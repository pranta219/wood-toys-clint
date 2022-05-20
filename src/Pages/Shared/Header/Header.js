import React from 'react';
import './Header.css'
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CustomLink from '../CustomLink/CustomLink';
import logo from '../../../img/logo_500w.png'
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { signOut } from 'firebase/auth';

const Header = () => {
    const [user] = useAuthState(auth)

    const handleSingOut = () => {
        signOut(auth)
    }
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
                        <CustomLink className='link' to='/all-toys'>All Toys</CustomLink>
                        <CustomLink className='link' to='/blogs'>Blogs</CustomLink>
                        {
                            user && <>
                                <CustomLink className='link' to='/add-item'>Add Toys</CustomLink>
                            </>
                        }
                    </Nav>
                    <Navbar.Collapse className="justify-content-end">
                        {
                            user ?
                                <button onClick={handleSingOut} className='login-button text-light'>SingOut</button>
                                :
                                <CustomLink className='login-button text-light' to="/login">
                                    Login
                                </CustomLink>}
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;