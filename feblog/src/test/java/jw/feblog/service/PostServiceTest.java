package jw.feblog.service;

import jw.feblog.domain.Member;
import jw.feblog.domain.Post;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.annotation.Rollback;
import org.springframework.test.context.junit.jupiter.SpringExtension;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityManager;
import javax.swing.text.html.parser.Entity;

import static org.junit.jupiter.api.Assertions.*;

@ExtendWith(SpringExtension.class)
@SpringBootTest
@Transactional //rollback을 위해
class PostServiceTest {


    @Autowired
    private EntityManager em;
    @Autowired PostService postService;

    @Test
    public void 게시글_생성() throws Exception{
        //given
        Member member = Member.createMember("kim", "1234", "1234@naver.com");
        em.persist(member);

        Post post = Post.createPost(member, "첫제목", "첫내용");
        em.persist(post);

        //when
        postService.postting(member.getUid(), post.getTitle(), post.getContent());

        //then

    }

}