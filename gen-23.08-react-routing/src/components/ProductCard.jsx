import React from 'react';
import { Link } from 'react-router-dom';

function ProductCard(props) {
    const { id, title, imageSrc, price, releaseDate } = props;

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
