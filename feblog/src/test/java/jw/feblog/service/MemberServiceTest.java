/*
package jw.feblog.service;

import jw.feblog.domain.Member;
import jw.feblog.repository.MemberRepository;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.annotation.Rollback;
import org.springframework.test.context.junit.jupiter.SpringExtension;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityManager;

import static org.junit.jupiter.api.Assertions.*;


@ExtendWith(SpringExtension.class)
@SpringBootTest
@Transactional //rollback을 위해
class MemberServiceTest {


    @Autowired MemberRepository memberRepository;
    @Autowired MemberService memberService;
    @Autowired
    EntityManager em;

    @Test
    //@Rollback(value = false) // DB에 테스트 데이터를 직접 보고 싶으면 rollback 포기
    public void 회원가입() throws Exception{
        //given
        Member member = new Member();
        member.setId("user1");
        member.setPassword("1234");
        member.setEmail("wrd@naver.com");

        //when
        Long savedUid = memberService.join(member);

        //then
        em.flush(); // 로그로 입력되는 정보들을 확인하려면 rollback을 하지 않는 방법이 있긴하나 그렇게 할 시 DB에 데이터가 남음.
        // 원래 테스트시 데이터는 DB에 남지 않아야 하므로 rollback을 사용하지 않고 로그로 입력한 데이터를 직접 보고 싶다면 flush()로 하면됨
        // (입력된 데이터는 클래스에 선언한 @Transactional 어노테이션으로 인해 자동 Rollback됨
        assertEquals(member, memberRepository.findOne(savedUid));
    }
    
    @Test()
    public void 중복_회원_예외() throws Exception{
        //given
        Member member1 = new Member();
        member1.setId("user1");
        member1.setPassword("1234");
        member1.setEmail("wrd@naver.com");
        Member member2 = new Member();
        member2.setId("user1");
        member2.setPassword("1234");
        member2.setEmail("wrd@naver.com");

        //when
        memberService.join((member1));

        //예상되는 예외(발생해야 성공)
        IllegalStateException thrown = assertThrows(IllegalStateException.class, ()->
            memberService.join(member2)
        );

        //then
        assertEquals("이미 존재하는 회원입니다.", thrown.getMessage());
    }
}*/
