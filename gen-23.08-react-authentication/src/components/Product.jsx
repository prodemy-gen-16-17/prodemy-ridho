import React from 'react';
import ProductCard from './ProductCard';
import { useState, useEffect } from 'react';
import useSWR from 'swr';
import axios from 'axios';


function Product(props) {
    const getProducts = (url) => axios.get(url).then((response) => response.data);
    const { data, error } = useSWR("http://localhost:3000/products", getProducts);

    const [sortedData, sortingData] = useState([]);


    const { titleCard } = props;

    {/* Cara Pertama */ }
    // Objek yang berisi fungsi pengurutan
    const sortFunctions = {
        price: (x, y) => parseFloat(y.price) - parseFloat(x.price),
        releaseDate: (x, y) => new Date(y.releaseDate) - new Date(x.releaseDate),
    };

    // Fungsi untuk mengurutkan produk
    const sortProducts = (sortBy) => {
        const sortFunction = sortFunctions[sortBy];

        if (sortFunction) {
            const dataSorting = [...data];
            dataSorting.sort(sortFunction);
            sortingData(dataSorting);
        }
    };

    useEffect(() => {
        if (data) {
            // Default sorting by releaseDate (Terbaru ke Lama)
            sortingData([...data].sort(sortFunctions.releaseDate));
        }
    }, [data]);

    if (!data) {
        return <div>Loading...</div>;
    }

    // console.log(sortedData)

    return (
        <div className="container font-sosial mx-auto">

            <h2 className="mt-24 mb-10 pl-14 font-bold text-3xl text-slate-700 uppercase">{titleCard}</h2>

            <div className="container px-6 sm:flex sm:flex-wrap sm:gap-6 sm:justify-evenly product" id="products">
                {sortedData?.map((product) => (
                    <ProductCard
                        key={product.id}
                        product={product}
                    />
                ))}
            </div>
            <div className="mt-24 mb-10 pl-14">
                <button
                    className="px-4 py-2 mr-2 bg-blue-500 text-white rounded"
                    onClick={() => sortProducts('price')}
                >
                    Sort Berdasarkan Harga (Tinggi ke Rendah)
                </button>
                {/* <button
                    className="px-4 py-2 bg-blue-500 text-white rounded"
                    onClick={() => sortProducts('releaseDate')}
                >
                    Sort Berdasarkan Tanggal Rilis (Terbaru ke Lama)
                </button> */}
            </div>
        </div>
    );
}

export default Product;