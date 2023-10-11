import React from 'react';
import ProductDetail from "../components/ProductDetail";
import Header from '../components/Header';
import Footer from '../components/Footer';
import { formFooter, linkFooter } from '../components/DataFooter';

const DetailProduct = () => {
    return (
        <>
            <Header titleHeader="Selamat Berbelanja" />
            <ProductDetail />
            <Footer formFooter={formFooter} linkFooter={linkFooter} />
        </>
    );
}

export default DetailProduct;