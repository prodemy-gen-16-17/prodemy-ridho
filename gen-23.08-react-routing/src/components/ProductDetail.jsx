import React from 'react';
import { useParams } from 'react-router-dom';
import data from './data.json';

function ProductDetail() {
    const { productId } = useParams();
    const product = data.find((p) => p.id === parseInt(productId));

    if (!product) {
        return <div>Produk tidak ditemukan.</div>;
    }

    const { title, imageSrc, price, releaseDate } = product;

    return (
        <div class="bg-[#b88967] detail" id="detail">
            <div class="container grid grid-cols-2 gap-6 mx-auto detail" id="detail">
                <div>
                    <h2 className="text-2xl font-bold mb-4">{title}</h2>
                    <img src={imageSrc} alt={title} className="mb-4" />
                    <p>Harga: {price} KR</p>
                    <p>Tanggal Rilis: {releaseDate}</p>
                </div>
            </div>
        </div>
    );
}

export default ProductDetail;
