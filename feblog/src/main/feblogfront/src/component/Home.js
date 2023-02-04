import axios from "axios";
import { useEffect, useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "../css/Home.css"

function Home() {

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
        console.log("member : ",member)
        axios.post("/loginCheck", member)
        .then((res)=>{
          if (res.status == 200){
            
          }
        }).catch(function (error) {
          console.log(error)
      })
    },[member]);

    const submitLogin = (e)=>{
        e.preventDefault(); //submit이 하던일을 멈춤
        axios({
          url: '/login', // 통신할 웹문서
          method: 'post', // 통신할 방식
          
          data:  // 인자로 보낼 데이터
            member
          
        }).then((res) => {
          if (res.status == 200){
            navigate("/main")
            localStorage.clear()
            localStorage.setItem('id', res.data.id)
          }
        }).catch(function (error) {
            // 오류발생시 실행
        })
        //axios.post("/member/join", member)
    };

    return (
        <div>
            <div className="main-bg" />
            <div className="login-form">
                <Form onSubmit={ submitLogin }>
                    <Form.Group className="mb-3" controlId="form.inputId">
                        <div className="form-box">
                            <Form.Label>아이디</Form.Label>
                            <Form.Control type="text" placeholder="" onChange={changeValue} name="id"/>
                        </div>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="form.inputPassword">
                        <div className="form-box">
                            <Form.Label>비밀번호</Form.Label>
                            <Form.Control type="password" placeholder="" onChange={changeValue} name="password"/>
                        </div>
                    </Form.Group>
                    <Button className="form-btn" variant="primary" type="submit">
                        Login
                    </Button>
                </Form>
                <div className="homeBtn">
                <Alert.Link href="#" className="infoSearchBtn" >아이디 / 비밀번호 찾기</Alert.Link>
                <Alert.Link href="/member/join" className="joinBtn" >회원가입하기</Alert.Link>
                </div>
            </div>
        </div>
    );
}

export default Home;