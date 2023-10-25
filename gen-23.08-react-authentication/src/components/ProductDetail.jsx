import React from 'react';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import useSWR from 'swr';
import axios from 'axios';
import useRegularHooks from '../hooks/useRegularHooks';
import { checkoutBooking } from '../store/reducers/checkoutSlice';
import { useDispatch } from 'react-redux';

function ProductDetail(props) {
    const { navigate } = useRegularHooks();
    const [isSubmitEnabled, setIsSubmitEnabled] = useState(false);
    const dispatch = useDispatch();

    const [qty, setQty] = useState(1);

    const incrementQty = () => setQty(qty + 1);
    const decrementQty = () => {
        if (qty > 1) {
            setQty(qty - 1);
        }
    };

    const [selectedSize, setSelectedSize] = useState(null);

    const handleSizeChange = (size) => {
        setSelectedSize(size);
        // checkSubmitButtonStatus();
        setIsSubmitEnabled(selectedSize && qty > 0);
    };

    useEffect(() => {
        setIsSubmitEnabled(selectedSize !== null && qty > 0);
    }, [selectedSize, qty]);

    const onClickBuyNow = () => {
        dispatch(checkoutBooking({ ...data, qty, size: selectedSize }));
        navigate("/checkout");

    };



    const getProducts = (url) => axios.get(url).then((response) => response.data);
    const { id } = useParams();
    const { data, error } = useSWR(`http://localhost:3000/products/${id}`, getProducts)

    const [selectedImage, setSelectedImage] = useState(null);
    const handleImageClick = (imageSrc) => {
        setSelectedImage(imageSrc);
    };

    if (error) {
        return <div>Error loading data</div>;
    }
    if (!data) {
        return <div>Loading...</div>;
    }

    const { title, secTitle, imageSrc, price, priceBefore, rating, reviews, releaseDate, img11, img12
    } = data;

    // console.log(data)


    return (
        <div className="bg-[#b88967] detail" id="detail">
            <div className="container grid grid-cols-2 gap-6 mx-auto detail" id="detail">
                <div>
                    <img src={selectedImage || imageSrc} alt={title} className="w-[435px] h-[513px] items-center slide" />
                    <div className="columns-3 mt-4 flex flex-wrap">
                        <img src={imageSrc} alt={title} className="w-20 cursor-pointer mb-4" onClick={() => handleImageClick(imageSrc)} />
                        <img src={img11} alt={title} className="w-20 cursor-pointer mb-4" onClick={() => handleImageClick(img11)} />
                        <img src={img12} alt={title} className="w-20 cursor-pointer mb-4" onClick={() => handleImageClick(img12)} />
                    </div>
                </div>
                <div className="pt-16 text-white">
                    <h2 className="text-2xl font-sosial uppercase mb-2 font-bold">{title}</h2>
                    <h2 className="text-3xl font-sosial uppercase mb-2 font-bold leading-none">{secTitle}</h2>
                    <div className="flex items-baseline mb-1 space-x-2 mt-4">
                        <p className="text-[#ECCBB2] mt-7 font-bold mb-3 line-through">{priceBefore} KR</p>
                        <p className="text-[#ECCBB2] mt-7 font-bold mb-3 text-2xl">{price} KR</p>
                    </div>
                    <div className='flex itmes-center mb-4'>
                        <div className="flex gap-1 text-sm text-yellow-400">
                            <span>{rating}</span>
                        </div>
                        <div className="text-xs text-[#ECCBB2] ml-3">{reviews} reviews</div>
                    </div>
                    <div className='pt-4 font-sosial mt-4'>
                        <h3 className='text-xl text-white mb-3 uppercase font-sosial'>Size</h3>
                        <div className='flex item-center gap-2'>
                            <div className='size-selector'>
                                <input hidden
                                    type="radio"
                                    name="size"
                                    id="size-xs"
                                    checked={selectedSize === 'XS'}
                                    onChange={() => handleSizeChange('XS')}
                                />
                                <label htmlFor="size-xs" className='mb-5 text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-white'>
                                    XS
                                </label>
                            </div>
                            <div className='size-selector'>
                                <input hidden
                                    type="radio"
                                    name="size"
                                    id="size-s"
                                    checked={selectedSize === 'S'}
                                    onChange={() => handleSizeChange('S')}
                                />
                                <label htmlFor="size-s" className='mb-5 text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-white'>
                                    S
                                </label>
                            </div>
                            <div className='size-selector'>
                                <input hidden
                                    type="radio"
                                    name="size"
                                    id="size-l"
                                    checked={selectedSize === 'L'}
                                    onChange={() => handleSizeChange('L')}
                                />
                                <label htmlFor="size-l" className='mb-5 text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-white'>
                                    L
                                </label>
                            </div>
                            <div className='size-selector'>
                                <input hidden
                                    type="radio"
                                    name="size"
                                    id="size-m"
                                    checked={selectedSize === 'M'}
                                    onChange={() => handleSizeChange('M')}
                                />
                                <label htmlFor="size-m" className='mb-5 text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-white'>
                                    M
                                </label>
                            </div>
                            <div className='size-selector'>
                                <input hidden
                                    type="radio"
                                    name="size"
                                    id="size-xl"
                                    checked={selectedSize === 'XL'}
                                    onChange={() => handleSizeChange('XL')}
                                />
                                <label htmlFor="size-xl" className='mb-5 text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-white'>
                                    XL
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className='mt-4 mb-4'>
                        <h3 className='text-sm text-white uppercase mb-1'>Quantity</h3>
                        <div className='flex border border-gray-300 text-white divide-x divide-gray-300 w-max'>
                            <button className='h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none' onClick={decrementQty}>-</button>
                            <input type='number' name="qty" value={qty} disabled className='h-8 w-8 text-xl flex items-center justify-center' />
                            <button className='h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none' onClick={incrementQty}>+</button>
                        </div>
                    </div>
                    <div className='flex gap-3 border-b border-slate-50 pb-5 mt-6'>
                        <button
                            onClick={isSubmitEnabled ? onClickBuyNow : undefined}
                            className={`bg-slate-600 border border-slate-600 text-white px-8 py-2 font-sosial rounded uppercase flex items-center gap-2 hover:bg-transparent hover:text-slate-800 transition ${isSubmitEnabled ? '' : 'opacity-50 cursor-not-allowed'}`}
                        >
                            <span>🛒</span> Add to cart
                        </button>
                        <a href="#" className='border border-slate-300 text-white px-8 py-2 font-sosial rounded uppercase flex items-center gap-2 hover:text-slate-800 transition'>
                            <span>♥</span> Wishlist
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductDetail;


