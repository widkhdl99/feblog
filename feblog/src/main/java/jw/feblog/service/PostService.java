package jw.feblog.service;

import jw.feblog.domain.Member;
import jw.feblog.domain.Post;
import jw.feblog.repository.MemberRepository;
import jw.feblog.repository.PostRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class PostService {

    private final PostRepository postRepository;
    private final MemberRepository memberRepository;

    /*주문*/
    @Transactional
    public Long postting(Long memberId, String title, String content){
        
        // 엔티티 조회
        Member member = memberRepository.findOne(memberId);

        // 게시글 생성
        Post post = Post.createPost(member, title, content);

        // 게시글 저장
        postRepository.save(post);

        return member.getUid();
    }
}
