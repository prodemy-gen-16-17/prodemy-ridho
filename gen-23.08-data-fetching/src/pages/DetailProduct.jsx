import React from 'react';
import ProductDetail from "../components/ProductDetail";
import Header from '../components/Header';
import Footer from '../components/Footer';
import Product from '../components/Product';
import { formFooter, linkFooter } from '../components/DataFooter';

const DetailProduct = () => {
    return (
        <>
            <Header titleHeader="Selamat Berbelanja" />
            <ProductDetail />
            <div className="mb-96"></div>
            <Footer formFooter={formFooter} linkFooter={linkFooter} />
        </>
    );
}

export default DetailProduct;