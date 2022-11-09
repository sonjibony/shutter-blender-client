import React from 'react';
import useTitle from '../../../hooks/useTitle';
import Achievement from '../Achievement/Achievement';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import Gallery from '../Gallery/Gallery';
import Services from '../Services/Services';

const Home = () => {
    useTitle('Home')
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Achievement></Achievement>
            <Gallery></Gallery>
            <Contact></Contact>
        </div>
    );
};

export default Home;