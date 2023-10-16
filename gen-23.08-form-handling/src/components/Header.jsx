import React from "react";

function Header(props) {
    const { titleHeader } = props;
    return (
        <header>
            <nav className="bg-slate-600 py-2">
                <div className="container mx-auto">
                    <h1 className="justify-center text-white text-center font-oswald">{titleHeader}</h1>
                </div>
            </nav>

        </header>
    );
}

export default Header;