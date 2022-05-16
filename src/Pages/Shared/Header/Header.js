import React from 'react';
import './Header.css'
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CustomLink from '../CustomLink/CustomLink';
import logo from '../../../img/logo_500w.png'

const Header = () => {
    return (
        <div>
            <Navbar className='bg' variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to="/">
                        <img
                            src={logo}
                            width="120"
                            height="50"
                            className="d-inline-block align-top"
                            alt="logo"
                        />
                    </Navbar.Brand>
                    <Nav className="me-auto">
                        <CustomLink className='link' to='/'>Home</CustomLink>
                        <CustomLink className='link' to='/inventory'>Inventory</CustomLink>
                        <CustomLink className='link' to='/blogs'>Blogs</CustomLink>
                    </Nav>
                    <Navbar.Collapse className="justify-content-end">
                        <CustomLink className='login-button' to="/login">
                            Login
                        </CustomLink>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;