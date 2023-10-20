import React from 'react';
import CheckoutForm from '../components/CheckoutForm';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { formFooter, linkFooter } from '../components/DataFooter';

const FormCheckout = () => {
    return (
        <>
            <Header titleHeader="Checkout" />
            <CheckoutForm />
            <div className="mb-96"></div>
            <Footer formFooter={formFooter} linkFooter={linkFooter} />
        </>
    );

}

export default FormCheckout;