import React from 'react';
import Tampilan from "../components/Tampilan";
import Header from '../components/Header';
import Headline from '../components/Headline';
import Product from '../components/Product';
import Footer from '../components/Footer';
import { formFooter, linkFooter } from '../components/DataFooter';

const Home = () => {
    return (
        <>
            <Header titleHeader="Selamat Berbelanja" />
            <Tampilan />
            <Headline
                feature1="Håndlavet i Danmark"
                feature2="Naturlige ingredienser"
                feature3="Produceret på solenergi"
            />
            <hr className="my-16" />
            <Product titleCard="CHOCOLATE CHRISTMAS CALENDARS WITH 30 & 60 PIECES" />
            <div className="mb-96"></div>
            <Footer formFooter={formFooter} linkFooter={linkFooter} />
        </>
    );

}

export default Home;