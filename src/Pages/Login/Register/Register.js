import React from 'react';
import google from '../../../img/google.png'
import github from '../../../img/github.png'
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const navigate = useNavigate()
    const navigateLogin = event => {
        navigate('/login')
    }

    const handleRegister = event => {
        event.preventDefault()
        const name = event.target.name.value
        const email = event.target.email.value
        const password = event.target.password.value


    }

    return (
        <div className='login'>
            <div className="login-box">
                <h2>Registration Here</h2>
                <Form onSubmit={handleRegister}>
                    <div className="user-box">
                        <input name='text' type="text" placeholder="Enter your name" required />
                    </div>
                    <div className="user-box">
                        <input name='email' type="email" placeholder="Enter your email" required />
                    </div>
                    <div className="user-box">
                        <input name='password' type="password" placeholder="Enter your password" required />
                    </div>
                    <Button className='ankor' variant='black' type='submit'>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        Sing Up
                    </Button>
                    <div className="text-center text-light mb-3">Already Registered ? <a href='' className='text-sing text-decoration-none' onClick={navigateLogin} >Sing In</a> </div>
                </Form>
                <hr size="5" width="90%"></hr>
                <span className='connect'>Or Connect With</span>
                <div className='login-link'>
                    <a className="mt-3 text-decoration-none" type='button'>
                        <img
                            src={google}
                            width="60"
                            height="55"
                            className="d-inline-block align-top"
                            alt="google"
                        />
                    </a>
                    <span className='m-4'></span>
                    <a className="mt-3 text-decoration-none" type='button'>
                        <img
                            src={github}
                            width="60"
                            height="55"
                            className="d-inline-block align-top"
                            alt="github"
                        />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Register;