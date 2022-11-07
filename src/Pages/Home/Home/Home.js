import React from 'react';
import Achievement from '../Achievement/Achievement';
import Banner from '../Banner/Banner';
import Gallery from '../Gallery/Gallery';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Achievement></Achievement>
            <Gallery></Gallery>
        </div>
    );
};

export default Home;