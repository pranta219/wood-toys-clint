import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Toy.css'

const Toy = ({ toy }) => {
    const navigate = useNavigate()
    const navigateToToyDetail = id => {
        navigate(`/toy/${id}`)
    }
    const { _id, name, img, description, price } = toy
    return (
        <div className='toy'>
            <img src={img} alt="" />
            <h2>{name}</h2>
            <p>Price: ${price}</p>
            <p><small>{description}</small></p>
            <button onClick={() => navigateToToyDetail(_id)} className='btn mb-2'>Manage</button>
        </div>
    );
};

export default Toy;