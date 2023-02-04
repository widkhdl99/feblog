import { useEffect, useState } from "react";
import { Button, Container, Form, Nav, Navbar, NavDropdown, ToggleButtonGroup } from "react-bootstrap";
import "../../css/layout/TopNav.css"
import SideNav from './SideNav';

function TopNav() {

    const [loginCheck, setLoginCheck] = useState(false);

    useEffect(()=>{
        if(localStorage.getItem("id") != null ){
            setLoginCheck(true);
        }
    },[]);
    
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <ToggleButtonGroup className="menuBar" type="disabled" md="1">--</ToggleButtonGroup>
                <Navbar.Brand className="logo" href="#home" md="2">feBlog</Navbar.Brand>
                
                <Nav.Link className="blogName"href="#" disabled>
                    블로그 이름
                </Nav.Link>
                <Nav.Link className="searchBar" href="#" md="3">
                    <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                </Nav.Link>
                {/* <Button type="button" className="DocSearch DocSearch-Button searchBtn" aria-label="Search" variant="outline-success" >search</Button> */}
                {/* <Nav.Link className="alarmBtn" href="#link" md="1">알람</Nav.Link> */}
                <NavDropdown title="글쓰기" className="writeBtn" id="basic-nav-dropdown" md="2" >
                    <NavDropdown.Item href="#action/3.1">블로그</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.1">메모장</NavDropdown.Item>
                </NavDropdown>

                


            </Container>
        </Navbar>
    )
}

export default TopNav;