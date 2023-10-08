import React from 'react';

function ProductCard(props) {
    const { title, imageSrc, price } = props;

    return (
        <div className="rounded-md shadow-lg overflow-hidden mb-10 sm:mb-0 sm:w-64 md:w-80 lg:w-72">
            <a href="#">
                <img src={imageSrc} alt="ImageCaption" className="w-full" />
            </a>
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2 text-slate-700 text-center">{title}</div>
                <p className="text-sm text-slate-600 text-center">{price} KR</p>
            </div>
        </div>
    );
}

export default ProductCard;
