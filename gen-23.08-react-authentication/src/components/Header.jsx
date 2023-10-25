import React from "react";
import { Link } from 'react-router-dom';
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { resetAuthData } from "../store/reducers/authSlice";


function Header(props) {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [showDropdown, setShowDropdown] = useState(false);
    const user = useSelector((state) => state.auth.user);
    const isLoggedIn = useSelector((state) => state.auth.token !== "");

    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
    };

    const onClickLogout = () => {
        dispatch(resetAuthData());
        navigate("/login");
    };


    const { titleHeader } = props;
    return (
        <header className={`${isLoggedIn ? "justify-between" : "justify-center"}`}>
            <nav className="bg-slate-600 py-2">
                <div className="container mx-auto">

                    <h1 className="text-white text-center font-oswald">{titleHeader}</h1>

                    {isLoggedIn && (
                        <div
                            className="self-center text-white text-right relative">
                            <span className="cursor-pointer"
                                onClick={toggleDropdown}
                            >
                                Hi, {user.name}
                            </span>
                            {showDropdown && (
                                <div className="z-10 absolute right-0 mt-2 w-48 bg-white rounded shadow-lg" onClick={onClickLogout}>
                                    <div className="p-2 cursor-pointer text-black hover:bg-gray-200">
                                        Logout
                                    </div>
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </nav>

        </header>
    );
}

export default Header;