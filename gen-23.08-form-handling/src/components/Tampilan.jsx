import React from "react";
import background from "../img/cc.jpeg";
import inputHeader from './InputHeader';
import { Link } from 'react-router-dom';


function Tampilan() {
    const myBackground = {
        backgroundImage: `url(${background})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
    };
    return (
        <div className="py-80 relative"
            style={myBackground}>
            <div className="container flex">
                <div className="cursor-pointer">
                    <h1 className="text-4xl text-black font-sosial absolute top-40 left-0 -rotate-90">Simply
                        Chocolate</h1>
                </div>
                <div className="flex items-center justify-between flex-grow pl-12 uppercase font-sosial">
                    <div className="absolute pl-36 top-5 left-5 items-center space-x-6">
                        {inputHeader.map((link, index) => (
                            <a key={index} href={link.url} className="text-gray-500 hover:text-slate-50 transition">
                                {link.text}
                            </a>
                        ))}
                    </div>
                    <Link to={"/form"}>
                        <a className="text-black hover:text-slate-50 transition absolute top-5 right-16 items-center text-lg">
                            Cart</a>
                    </Link>
                </div>

            </div>

        </div>


    );
}

export default Tampilan;