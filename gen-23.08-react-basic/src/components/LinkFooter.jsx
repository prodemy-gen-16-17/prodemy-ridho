import React from 'react';

function LinkFooter(props) {
    return (
        <div>
            <h3 className="fonts-sosial text-white uppercase text-4xl tracking-wider">{props.title}</h3>
            <div className="mt-4 space-y-4">
                {props.links.map((link, index) => (
                    <a key={index} href={link.url} className="text-base text-white hover:text-red-400 block">
                        {link.text}
                    </a>
                ))}
            </div>
        </div>
    );
}

export default LinkFooter;