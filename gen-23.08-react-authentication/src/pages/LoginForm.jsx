import React from 'react';
import user_icon from '../img/person.png';
import password_icon from '../img/password.png';

const LoginForm = () => {
    return (
        // <div className='bg-gradient-to-b from-[#b88967] to-[#cf7332] font-sosial h-screen'>
        <div className='flex flex-col m-auto mt-52 bg-[#42220f] pb-8 w-[600px]' >
            <div className='flex flex-col items-center gap-[9px] w-full mt-[30px]'>
                <div className='text-[#b88967] text-[48px] font-bold'>Sign In</div>
                <div className='w-[61px] h-[6px] bg-[#b88967] rounded-[9px]'></div>
            </div>
            <div className='mt-[55px] flex flex-col gap-[25px]'>
                <div className='flex items-center m-auto w-[480px] h-[80px] bg-[#eaeaea] rounded-[6px]'>
                    <img className='m-[30px]' src={user_icon} alt="" />
                    <input placeholder='Username' type="text" className='h-[50px] w-[400px] bg-transparent border-none outline-none bg-[#797979] text-[19px]' />
                </div>
                <div className='flex items-center m-auto w-[480px] h-[80px] bg-[#eaeaea] rounded-[6px]'>
                    <img className='m-[30px]' src={password_icon} alt="" />
                    <input placeholder='Password' type="password" className='h-[50px] w-[400px] bg-transparent border-none outline-none bg-[#797979] text-[19px]' />
                </div>
            </div>
            <div className='pl-[62px] mt-[27px] text-[#797979] text-[18px]'>Forgot Password? <span className='text-[#c29f8f] cursor-pointer'>Click Here!</span></div>
            <div className='flex gap-[30px] my-[60px] m-auto'>
                <div className='flex justify-center items-center w-[220px] h-[59px] text-[#fff] bg-[#fa8e40] rounded-[50px] text-[19px] font-bold cursor-pointer'>Register</div>
                <div className='flex justify-center items-center w-[220px] h-[59px] text-[#fff] bg-[#fa8e40] rounded-[50px] text-[19px] font-bold cursor-pointer'>Login</div>
            </div>
        </div>
        // </div>
    )
}

export default LoginForm;