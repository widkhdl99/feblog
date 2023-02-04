package jw.feblog.domain;

import lombok.*;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter @Setter
@NoArgsConstructor(access = AccessLevel.PROTECTED) // 다른 곳에서 set하여 설정하는 것을 방지하여 유지보수성을 높인다.
public class Member {

    @Id @GeneratedValue
    @Column(name= "member_id")
    private Long uid;

    @Column(nullable = false, length = 30, unique = true)
    private String id;

    @Column(nullable = false, length = 100)
    private String Password;

    @Column(nullable = false, length = 50)
    private String Email;

    @OneToMany
    private List<Post> posts = new ArrayList<>();

    // 추상 생성 매서드
    public static Member createMember(String id, String password, String email){
        Member member = new Member();
        member.setId(id);
        member.setPassword(password);
        member.setEmail(email);
        return member;
    }
}
