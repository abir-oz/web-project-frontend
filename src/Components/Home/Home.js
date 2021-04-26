import React from 'react';
import Banner from './Banner/Banner';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import './Home.css'
import Review from './Review/Review';
import Services from './Services/Services';
import TourPackages from './TourPackages/TourPackages';
const Home = () => {
    return (
        <>
            <Header />
            <Banner />
            <Services />


            <Review />

            <TourPackages />
            <Footer />
        </>
    );
};

export default Home;