package jw.feblog.domain;

import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name= "posts")
@Getter @Setter
@NoArgsConstructor(access = AccessLevel.PROTECTED) // 다른 곳에서 set하여 설정하는 것을 방지하여 유지보수성을 높인다.
public class Post {

    @Id
    @GeneratedValue
    @Column(name= "post_id")
    private Long uid;

    @Column(nullable = false, length = 100)
    private String title;

    @Lob
    private String content;

    @ManyToOne
    @JoinColumn(name="member_id")
    private Member member;

    private LocalDateTime postDate; // 글쓴 시간

    //== 연관관계 매서드 ==//
    public void setMember(Member member){
        this.member = member;
        member.getPosts().add(this);
    }

    //== 생성 매서드 ==//

    public static Post createPost(Member member, String title, String content ){
        Post post = new Post();
        post.setMember(member);
        post.setTitle(title);
        post.setContent(content);
        post.setPostDate(LocalDateTime.now());
        return post;
    }



    // 요소 추가시 cascade= CascadeType.All 추가 고려, 연관된 테이블이 2개 이상이면 db관리가 힘들어지므로 사용 지양
}
