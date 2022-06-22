import { Form } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import logo from '../images/funge-logo.png';

const NavBar = () => {
    return (
        <Navbar expand="sm" className='p-3 shadow-sm'>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Container fluid className='navbar-container'>
                <Navbar.Collapse className='justify-content-between' id="basic-navbar-nav">
                    <Navbar.Brand href="#home"><img width="100" src={logo} alt="Funge" /></Navbar.Brand>
                    <Form className="d-flex search">
                        <FormControl
                            type="search"
                            placeholder="Feeds"
                            className="me-2 topbar-search"
                            aria-label="Search"
                        />
                    </Form>
                    <Nav>
                        <Nav.Link href="/explore">Explore</Nav.Link>
                        <Nav.Link href="/about_us">About us</Nav.Link>
                        <Nav.Link href="/community">Community</Nav.Link>
                        <Nav.Link className='defaultBtn' href="/community">Signup</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar