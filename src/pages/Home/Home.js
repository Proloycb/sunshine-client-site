import React from 'react';
import Banner from './Banner';
import Contact from './Contact';
import Services from './Services';
import Transform from './Transform';

const Home = () => {
    return (
        <div>
            <Banner />
            <Services />
            <Transform />
            <Contact />
        </div>
    );
};

export default Home;