package jw.feblog.repository;

import jw.feblog.domain.Member;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import java.util.List;

@Repository // component scan으로 자동으로 bean으로 등록
@RequiredArgsConstructor
public class MemberRepository {

    //원래는 @PersistenceContext로 설정을 해야하나 스프링부트 일정 버전 이후론 @Autowired로도 설정이 되게 해줌.
    //그런데 그 이후 버전으론 다시 @RequiredArgsConstructor로 @Autowired를 생략할 수 있게 해줘서
    //@RequiredArgsConstructor로만 설정.
    private final EntityManager em;

    public void save(Member member){
        em.persist(member);
    }

    public Member findOne(Long uid){
        return em.find(Member.class, uid);
    }

    public List<Member> findById(String id){
        return em.createQuery("select m from Member m where m.id = :id",Member.class)
        .setParameter("id", id)
                .getResultList();
    }

}
