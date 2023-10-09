import React from 'react';
import ProductCard from './ProductCard';
import data from './data.json';


function Product() {
    return (
        <div className="container font-sosial mx-auto">
            <h2 className="mt-24 mb-10 pl-14 font-bold text-3xl text-slate-700 uppercase">CHOCOLATE CHRISTMAS CALENDARS WITH 30 & 60 PIECES</h2>
            <div className="container px-6 sm:flex sm:flex-wrap sm:gap-6 sm:justify-evenly product" id="product">
                {data.map((product) => (
                    <ProductCard
                        key={product.id}
                        {...product}
                    />
                ))}
            </div>
        </div>
    );
}

export default Product;