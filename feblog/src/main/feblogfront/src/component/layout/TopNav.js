import { Container, Nav, Navbar, ToggleButtonGroup  } from "react-bootstrap";

function TopNav() {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <ToggleButtonGroup type="disabled">메뉴바</ToggleButtonGroup>
                <Navbar.Brand href="#home">feBlog</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">Link</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default TopNav;