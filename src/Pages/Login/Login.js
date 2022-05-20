import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import './Login.css'
import google from '../../img/google.png'
import github from '../../img/github.png'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PageTitle from '../Shared/PageTitle/PageTitle';

const Login = () => {
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    const [signInWithGithub, githubUser, githubLoading, githubError] = useSignInWithGithub(auth);

    const emailRef = useRef('')
    const passwordRef = useRef('')
    const location = useLocation()
    const navigate = useNavigate()

    let errorElement;
    let from = location.state?.from?.pathname || "/"

    if (googleError || githubError) {
        errorElement = <p className='text-danger'>Error: {googleError?.message} {githubError?.message}</p>
    }

    if (googleUser || githubUser) {
        navigate(from, { replace: true });
    }

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth)

    const handleSubmit = event => {
        event.preventDefault()
        const email = emailRef.current.value
        const password = passwordRef.current.value

        signInWithEmailAndPassword(email, password)
    }

    if (user) {
        navigate(from, { replace: true })
    }

    const navigateRegister = event => {
        navigate('/register')
    }

    const resetPassword = async () => {
        const email = emailRef.current.value
        if (email) {
            await sendPasswordResetEmail(email)
            toast('Sent email')
        }
        else {
            toast('please enter your email')
        }
    }

    return (
        <div className='login'>
            <div className="login-box">
                <PageTitle title="Login"></PageTitle>
                <h2>Login Here</h2>
                <Form onSubmit={handleSubmit}>
                    <div className="user-box">
                        <input ref={emailRef} type="email" placeholder="Enter your email" required />
                    </div>
                    <div className="user-box">
                        <input ref={passwordRef} type="password" placeholder="Enter your password" required />
                    </div>
                    <div class="form-inline">
                        <p>Forget password? <Link to='' className='text-sing text-decoration-none' onClick={resetPassword} >Reset Password</Link></p>
                    </div>
                    <Button className='ankor' variant='black' type='submit'>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        Login
                    </Button>
                    <div className="text-center text-light mb-3">Don't have an account? <a href='' className='text-sing text-decoration-none' onClick={navigateRegister} >Sign up</a> </div>
                </Form>
                <hr size="5" width="90%"></hr>
                <span className='connect'>Or Connect With</span>
                <div className='login-link'>
                    <a onClick={() => signInWithGoogle()} className="mt-3 text-decoration-none" type='button'>
                        <img
                            src={google}
                            width="60"
                            height="55"
                            className="d-inline-block align-top"
                            alt="google"
                        />
                    </a>

                    <span className='m-4'></span>
                    <a onClick={() => signInWithGithub()} className="mt-3 text-decoration-none" type='button'>
                        <img
                            src={github}
                            width="60"
                            height="55"
                            className="d-inline-block align-top"
                            alt="github"
                        />
                    </a>
                    {errorElement}
                    <ToastContainer />
                </div>
            </div>
        </div>
    );
};

export default Login;