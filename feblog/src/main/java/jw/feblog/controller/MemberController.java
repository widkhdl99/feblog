package jw.feblog.controller;

import jw.feblog.domain.Member;
import jw.feblog.dto.join.JoinDto;
import jw.feblog.dto.login.LoginDto;
import jw.feblog.service.MemberService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;

@RestController
@RequiredArgsConstructor
public class MemberController {

    private final MemberService memberService;

    @PostMapping("/member/joinCheck")
    public ResponseEntity<?> joinCheckForm(@Valid @RequestBody JoinDto member, BindingResult result){
        if (result.hasErrors()){
            System.out.println("에러");
            System.out.println(result.getFieldError().getDefaultMessage());
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity<>(HttpStatus.OK);
    }
    @PostMapping("/member/join")
    public ResponseEntity<?> createForm(@RequestBody JoinDto member){

        Member createMember = Member.createMember(member.getId(), member.getPassword(), member.getEmail());
        Long uid = memberService.join(createMember);
        memberService.findOne(uid);

        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PostMapping("/loginCheck")
    public ResponseEntity<?> loginCheck(@Valid @RequestBody LoginDto member, BindingResult result){

        if (result.hasErrors()){
            System.out.println("에러");
            System.out.println(result.getFieldError().getDefaultMessage());
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginDto member, BindingResult result){

        Member findMember = memberService.findById(member.getId(), member.getPassword());

        return new ResponseEntity<>(findMember, HttpStatus.OK);
    }
}



