import { Form } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import logo from '../images/funge-logo.png';
import env from 'react-dotenv'
import ProfileLogin from './ProfileLogin'
import { Auth0Provider, useAuth0 } from '@auth0/auth0-react';
import '../App.css';

const NavBar = () => {
    console.log(`${env.AUTH0_DOMAIN} :: ${env.AUTH0_CLIENT_ID} :: ${env.LOGIN_REDIRECT_URL}`)
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
                        <Auth0Provider
                                        domain={env.AUTH0_DOMAIN}
                                        clientId={env.AUTH0_CLIENT_ID}
                                        redirectUrl={env.LOGIN_REDIRECT_URL}
                        >
                            <ProfileLogin />
                        </Auth0Provider>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar