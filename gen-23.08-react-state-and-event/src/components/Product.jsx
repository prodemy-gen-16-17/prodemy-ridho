import React from 'react';
import ProductCard from './ProductCard';
import data from './data.json';
import { useState } from 'react';


function Product() {
    const [sortedData, setSortedData] = useState(data);

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
            const sortedDataCopy = [...sortedData];
            sortedDataCopy.sort(sortFunction);
            setSortedData(sortedDataCopy);
        }
    };

    {/* Cara Kedua */ }
    // const sortProducts = (sortBy) => {
    //     if (sortBy === 'price') {
    //         // Urutkan produk berdasarkan harga (tinggi ke rendah)
    //         const sortedByPrice = [...sortedData].sort((x, y) => parseFloat(y.price) - parseFloat(x.price));
    //         setSortedData(sortedByPrice);
    //     } else if (sortBy === 'releaseDate') {
    //         // Urutkan produk berdasarkan tanggal rilis (baru ke lama)
    //         const sortedByReleaseDate = [...sortedData].sort((x, y) => new Date(y.releaseDate) - new Date(x.releaseDate));
    //         setSortedData(sortedByReleaseDate);
    //     }

    //     // Perbarui state data dengan urutan yang baru
    //     setData([...data]);
    // };

    return (
        <div className="container font-sosial mx-auto">

            <h2 className="mt-24 mb-10 pl-14 font-bold text-3xl text-slate-700 uppercase">CHOCOLATE CHRISTMAS CALENDARS WITH 30 & 60 PIECES</h2>

            <div className="container px-6 sm:flex sm:flex-wrap sm:gap-6 sm:justify-evenly product" id="product">
                {sortedData.map((product) => (
                    <ProductCard
                        key={product.id}
                        {...product}
                    />
                ))}
            </div>
            <div className="mt-24 mb-10 pl-14">
                <button
                    className="px-4 py-2 mr-2 bg-blue-500 text-white rounded"
                    onClick={() => sortProducts('price')}
                >
                    Sort by Price
                </button>
                <button
                    className="px-4 py-2 bg-blue-500 text-white rounded"
                    onClick={() => sortProducts('releaseDate')}
                >
                    Sort by Release Date
                </button>
            </div>
        </div>
    );
}

export default Product;