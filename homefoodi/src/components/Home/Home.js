import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Banner from '../Bannner/Banner';
import Services from '../Service/Services';

const Home = () => {
    return (
        <div className='container-fluid p-0'>
            <Banner/>
            <Services/>
            <Footer/>
        </div>
    );
};

export default Home;