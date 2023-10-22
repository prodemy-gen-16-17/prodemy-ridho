import React from 'react';
import { Link } from 'react-router-dom';
import useSWR from 'swr';
import axios from 'axios';

function ProductCard(props) {
    const getProducts = (url) => axios.get(url).then((response) => response.data);
    const { data, error } = useSWR("http://localhost:3000/products", getProducts)

    if (error) return <div>Error fetching data</div>;
    if (!data) return <div>Loading...</div>;

    const { id, title, imageSrc, price, releaseDate } = props.product;

    console.log(props)


    return (
        <div className="rounded-md shadow-lg overflow-hidden mb-10 sm:mb-0 sm:w-64 md:w-80 lg:w-72">
            <Link to={`/products/${id}`}>
                <img src={imageSrc} alt="ImageCaption" className="w-full" />
            </Link>
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2 text-slate-700 text-center">{title}</div>
                <p className="text-sm text-slate-600 text-center">Price : {price} KR</p>
                <p className="text-sm text-slate-600 text-center">Date : {releaseDate}</p>

            </div>
        </div>
    );
}

export default ProductCard;
