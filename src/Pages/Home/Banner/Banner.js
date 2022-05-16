import React from 'react';
import './Banner.css'
import banner from '../../../img/houses.png'

const Banner = () => {
    return (
        <div className='banner'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-6'>
                        <h3 className='text-light mt mb-4'>Inspired by old wooden toys. Perfect idea for creating catching design.</h3>
                        <a className='link' href="/login">CONNECT</a>
                    </div>
                    <div className='col-md-6'>
                        <img className='img-fluid' src={banner} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;