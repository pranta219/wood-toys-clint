import React from 'react';
import PageTitle from '../../Shared/PageTitle/PageTitle';
import Banner from '../Banner/Banner';
import ExtraPart from '../ExtraPart/ExtraPart';
import Toys from '../Toys/Toys';

const Home = () => {
    return (
        <>
            <PageTitle title="Home"></PageTitle>
            <Banner></Banner>
            <Toys></Toys>
            <ExtraPart></ExtraPart>
        </>
    );
};

export default Home;