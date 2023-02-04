import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Col, Form, InputGroup, Row } from "react-bootstrap";
import { Navigate, useNavigate } from "react-router-dom";
import "../../css/member/Join.css"

function Join(){
    const [validated, setValidated] = useState(false);

    // const handleSubmit = (event) => {
    //   const form = event.currentTarget;
   
    //   if (form.checkValidity() === false) {
    //     event.preventDefault();
    //     event.stopPropagation();
    //   }
    // }
    const navigate = useNavigate();

    const [member, setMember] = useState({
    });

    const changeValue = (e)=>{
      setMember({
        ...member,
        [e.target.name] : e.target.value,
      })
    }
    useEffect(()=>{
      axios.post("/member/joinCheck", member)
      .then((res)=>{
        if (res.status == 200){
          
        }
      }).catch(function (error) {
        console.log(error)
    })
    },[member]);

    // setValidated(true);

    const submitJoin = (e)=>{
      e.preventDefault(); //submit이 하던일을 멈춤
      axios({
        url: '/member/join', // 통신할 웹문서
        method: 'post', // 통신할 방식
        
        data:  // 인자로 보낼 데이터
          member
        
      }).then((res) => {
        if (res.status == 200){
          console.log("페이지 이동!!")}
          navigate("/")
      }).catch(function (error) {
          // 오류발생시 실행
      })
      //axios.post("/member/join", member)
    };

  return (
    <div className="joinForm">
        
    <Form noValidate validated={validated} onSubmit={submitJoin}>
      <Row className="mb-3">
        <Form.Group as={Row} md="4" controlId="validationCustom01">
          <Form.Label>아이디</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="영어와 숫자로 이루어진 8~20자의 아이디"
            defaultValue=""
            name = "id"
            onChange={changeValue}
          />
          <Form.Control.Feedback>사용 가능한 아이디 입니다.</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Row} md="4" controlId="validationCustom02">
          <Form.Label>비밀번호</Form.Label>
          <Form.Control
            required
            type="password"
            placeholder="8~20자의 비밀번호"
            defaultValue=""
            name = "password"
            onChange={changeValue}
          />
          <Form.Control.Feedback>사용 가능한 비밀번호 입니다.</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Row} md="4" controlId="validationCustom02">
          <Form.Label>비밀번호 확인</Form.Label>
          <Form.Control
            required
            type="password"
            placeholder="8~20자의 비밀번호"
            defaultValue=""
            name = "password_check"
            onChange={changeValue}
          />
          <Form.Control.Feedback>비밀번호가 일치합니다.</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Row} md="4" controlId="validationCustom02">
          <Form.Label>이메일</Form.Label>
          {/* <InputGroup hasValidation> */}
          <Form.Control
              type="email"
              placeholder="이메일 주소"
              aria-describedby="inputGroupPrepend"
              required
              defaultValue=""
              name = "email"
              onChange={changeValue}
            />
            {/* <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
            <Form.Control
              type="text"
              placeholder="이메일 주소"
              aria-describedby="inputGroupPrepend"
              required
              defaultValue=""
              name = "email_back"
              onChange={changeValue}
            /> */}
            <Form.Control.Feedback type="invalid">
              이메일을 올바르게 입력해주세요.
            </Form.Control.Feedback>
          {/* </InputGroup> */}
        </Form.Group>
      </Row>
      
      <Button type="submit">회원가입하기</Button>
    </Form>
    
    </div>
  );
}

export default Join;