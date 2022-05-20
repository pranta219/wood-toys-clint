import React, { useEffect, useState } from 'react';
import { RotateLoader } from 'react-spinners';
import Toy from '../Toy/Toy';
import './Toys.css'

const Toys = () => {
    const [loading, serLoading] = useState(false)
    useEffect(() => {
        serLoading(true)
        setTimeout(() => {
            serLoading(false)
        }, 3000)
    }, [])

    const [toys, setToys] = useState([])

    useEffect(() => {
        fetch('https://warm-citadel-87543.herokuapp.com/service')
            .then(res => res.json())
            .then(data => setToys(data))
    }, [])
    return (
        <div className='container visit'>
            <h2 className='toy-title'>Toys List</h2>
            {
                loading ?
                    <RotateLoader color={'#2c5364'} loading={loading} size={15} margin={5} />
                    :
                    <div className='toy-container'>
                        {
                            toys.map(toy => <Toy
                                key={toy._id}
                                toy={toy}
                            ></Toy>)
                        }
                        <a className='view' href="/all-toys">Visit All</a>
                    </div>
            }
        </div>
    );
};

export default Toys;