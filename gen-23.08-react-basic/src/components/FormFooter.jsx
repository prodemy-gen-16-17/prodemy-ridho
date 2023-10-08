import React from 'react';

function FormFooter() {
    return (
        <form action="">
            <input
                type="email"
                id="email"
                placeholder="Enter your email address..."
                className="px-3 py-2 border border-black bg-black shadow rounded w-full block text-sm placeholder:text-slate-400 focus:outline-none focus:ring-1 focus:ring-sky-500 focus:border-sky-500 invalid:text-pink-700 invalid:focus:ring-pink-500 invalid:focus:border-pink-700 peer"
            />
        </form>
    );
}

export default FormFooter;