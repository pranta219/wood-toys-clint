import React from 'react';
import './ExtraPart.css'
import toy from '../../../img/toy.jpg'

const ExtraPart = () => {
    return (
        <div>
            <div>
                <div className='spinner'></div>
            </div>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-6'>
                        <img className='img-fluid' src={toy} alt="" />
                    </div>
                    <div className='col-md-5'>
                        <h3 className='text'>TOP TOYS OF THE MONTH</h3><br />
                        <p>Top sell of this month. Total sell 1 Ton . Total Earning 2M USD. Saffron is the most valuable spices in the world.</p>
                        <a className='join' href="/login">Join Now</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExtraPart;