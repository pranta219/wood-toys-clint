import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import './ToyDetail.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Delivered = () => toast("Toys Delivered 😊");

return (
    <div className='text-center mt-5'>
        <div>
            <h2>You are about to book: {service.name}</h2>
        </div>
        <div className='to text-center mt-5'>
            <img src={service.img} alt="" />
            <h2>{service.name}</h2>
            <p>Price: ${service.price}</p>
        </div>
        <Link to=''>
            <Button onClick={Delivered} className='py-2 rounded-full mt-3'>Delivered</Button>
        </Link>
        <ToastContainer />
    </div>
);
};

export default ToyDetail;