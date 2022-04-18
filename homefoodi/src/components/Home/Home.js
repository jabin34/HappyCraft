import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Banner from '../Bannner/Banner';
import CustomerReview from '../CustomerReview/CustomerReview';
import Services from '../Service/Services';

const Home = () => {
    return (
        <div className='container-fluid p-0'>
            <Banner/>
            <Services/>
            <CustomerReview/>
            <Footer/>
        </div>
    );
};

export default Home;