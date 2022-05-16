import React from 'react';
import { Button, Form } from 'react-bootstrap';
import './Login.css'
import google from '../../img/google.png'
import github from '../../img/github.png'
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate()
    const navigateRegister = event => {
        navigate('/register')
    }

    return (
        <div className='login'>
            <div className="login-box">
                <h2>Login Here</h2>
                <Form >
                    <div className="user-box">
                        <input type="text" placeholder="Enter your email" required />
                    </div>
                    <div className="user-box">
                        <input type="password" placeholder="Enter your password" required />
                    </div>
                    <div class="form-inline"> <input type="checkbox" name="remember" id="remember" />
                        <label for="remember" class="text-light">Remember me <span className='m-4'></span></label>
                        <a href="" id="forgot" class="forgot text-decoration-none">Forgot password?</a>
                    </div>
                    <Button className='ankor' variant='black' type='submit'>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        Login
                    </Button>
                    <div className="text-center text-dark mb-3">Don't have an account? <a href='' className='text-sing text-decoration-none' onClick={navigateRegister} >Sign up</a> </div>
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

export default Login;