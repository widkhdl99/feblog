import { Form, Button } from "react-bootstrap";
import "../css/Home.css"

function Home() {
    return (
        <div>
            <div className="main-bg" />
            <div className="login-form">
                <Form>
                    <Form.Group className="mb-3" controlId="form.inputId">
                        <div className="form-box">
                            <Form.Label>아이디</Form.Label>
                            <Form.Control type="text" placeholder="" />
                        </div>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="form.inputPassword">
                        <div className="form-box">
                            <Form.Label>비밀번호</Form.Label>
                            <Form.Control type="password" placeholder="" />
                        </div>
                    </Form.Group>
                    <Button className="form-btn" variant="primary" type="submit">
                        Login
                    </Button>
                </Form>
            </div>
        </div>
    );
}

export default Home;