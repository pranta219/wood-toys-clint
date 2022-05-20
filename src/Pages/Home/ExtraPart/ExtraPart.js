import React from 'react';
import './ExtraPart.css'
import toy from '../../../img/toy.jpg'
import open from '../../../img/open.webp'
import free from '../../../img/free.webp'
import non from '../../../img/non.webp'

const ExtraPart = () => {
    return (
        <div><div className='container extra'>
            <div className='part'>
                <img className='w-20' src={open} alt="" />
                <h3>OPEN-ENDED TOYS</h3>
                <p>Our toys are meant to grow with your child and are recommended from age 18 months all the way to 8 years old. There is unlimited potential for creativity!</p>
            </div>
            <div className='part'>
                <img className='w-20' src={free} alt="" />
                <h3>FREE SHIPPING ACROSS NORTH AMERICA</h3>
                <p>We ship FREE across anywhere in the US or Canada. Delivery time approximately 3-10 business days.</p>
            </div>
            <div className='part'>
                <img className='w-20' src={non} alt="" />
                <h3>NON-TOXIC AND SAFE</h3>
                <p>We've done a TON of research on the BEST materials to use for children's toys - we use premium woods and finishes that are safe and will last for years to come.</p>
            </div>
        </div>
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