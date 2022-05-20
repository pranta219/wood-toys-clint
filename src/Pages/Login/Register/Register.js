import React, { useState } from 'react';
import google from '../../../img/google.png'
import github from '../../../img/github.png'
import { Button, Form } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import { useCreateUserWithEmailAndPassword, useSignInWithGithub, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import './Register.css'
import PageTitle from '../../Shared/PageTitle/PageTitle';

const Register = () => {
    const [agree, setAgree] = useState(false);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);

    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    const [signInWithGithub, githubUser, githubLoading, githubError] = useSignInWithGithub(auth);

    const navigate = useNavigate()
    const navigateLogin = event => {
        navigate('/login')
    }

    const location = useLocation();
    let errorElement;
    let from = location.state?.from?.pathname || "/";

    // if (googleLoading || githubLoading) {
    //     return <Loading></Loading>
    // }

    if (googleError || githubError) {
        errorElement = <p className='text-danger'>Error: {googleError?.message} {githubError?.message}</p>
    }

    if (googleUser || githubUser) {
        navigate(from, { replace: true });
    }

    const handleRegister = async (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        // const agree = event.target.terms.checked;


        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });
        console.log('Updated profile');
        navigate('/home');
    }

    return (
        <div className='login'>
            <div className="login-box">
                <PageTitle title="Registration"></PageTitle>
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
                    <input onClick={() => setAgree(!agree)} type="checkbox" name="terms" id="terms" />
                    <label className={agree ? 'ps-2' : 'ps-2 text-danger'} htmlFor="terms"> Accept Terms and Conditions</label> <br />
                    <Button className='ankor mt-2' variant='black' type='submit'>
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
                    <a onClick={() => signInWithGoogle()} className="mt-3" type='button'>
                        <img
                            src={google}
                            width="60"
                            height="55"
                            className="d-inline-block align-top"
                            alt="google"
                        />
                    </a>
                    <span className='m-4'></span>
                    <a onClick={() => signInWithGithub()} className="mt-3 " type='button'>
                        <img
                            src={github}
                            width="60"
                            height="55"
                            className="d-inline-block align-top"
                            alt="github"
                        />
                    </a>
                    {errorElement}
                </div>
            </div>
        </div>
    );
};

export default Register;



// import React from 'react';
//import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
// import { useLocation, useNavigate } from 'react-router-dom';
// import auth from '../../../firebase.init';

// //import Loading from './Loading';
// const Register = () => {
//     const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
//     const [signInWithGithub, githubUser, githubLoading, githubError] = useSignInWithGithub(auth);
//     const navigate = useNavigate();
    // const location = useLocation();
    // let errorElement;
    // let from = location.state?.from?.pathname || "/";

    // // if (googleLoading || githubLoading) {
    // //     return <Loading></Loading>
    // // }

    // if (googleError || githubError) {
    //     errorElement = <p className='text-danger'>Error: {googleError?.message} {githubError?.message}</p>
    // }

    // if (googleUser || githubUser) {
    //     navigate(from, { replace: true });
    // }
//     return (
//         <div className='px-5'>
//             <button className='w-full rounded-lg bg-black text-white  py-3 mt-5 font-semibold' type='submit' onClick={() => signInWithGithub()} > Github</button>
//             <button onClick={() => signInWithGoogle()} className='w-full  rounded-lg bg-[#E34133] text-white py-3 mt-5 font-semibold' type='submit' > Google</button>
//             {errorElement}
//         </div>
//     );
// };

// export default Register;