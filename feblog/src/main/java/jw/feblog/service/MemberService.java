package jw.feblog.service;

import jw.feblog.domain.Member;
import jw.feblog.repository.MemberRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class MemberService {

    private final MemberRepository memberRepository;

    /*회원가입*/
    @Transactional
    public Long join(Member member){
        validateDuplicateMember(member);
        memberRepository.save(member);
        return member.getUid();
    }

    /*회원찾기*/
    public Member findOne(Long uid){
        Member member = memberRepository.findOne(uid);
        return member;
    }

    /*로그인*/
    public Member findById(String id, String password){
        List<Member> memberList = memberRepository.findById(id);
        if (memberList.isEmpty()){
            throw new IllegalStateException("일치하는 아이디가 없습니다.");
        }
        else if (!memberList.get(0).getPassword().equals(password)){
            throw new IllegalStateException("비밀번호가 일치하지 않습니다.");
        }
        else{
            return memberList.get(0);
        }
    }

    private void validateDuplicateMember(Member member) {
        List<Member> findMembers = memberRepository.findById(member.getId());

        if (!findMembers.isEmpty()){
            throw new IllegalStateException("이미 존재하는 회원입니다.");
        }
    }
}

