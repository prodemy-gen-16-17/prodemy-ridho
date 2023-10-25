import axios from "axios";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { setToken, setUser } from "../store/reducers/authSlice";
// import user_icon from '../img/person.png';
import password_icon from '../img/password.png';
import email_icon from '../img/email.png'

function LoginForm() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const schema = yup.object().shape({
        email: yup.string().email().required('Email is required'),
        password: yup.string().min(5).max(32).required()
    });

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm({
        resolver: yupResolver(schema)
    });

    const onSubmitForm = (data) => {
        axios
            .post("http://localhost:3000/login", data)
            .then((res) => {
                const { accessToken, user } = res.data;
                dispatch(setToken(accessToken));
                dispatch(setUser(user));
                navigate('/home');
                reset();
                console.log(res);
                alert("Sucessfully Login!");
            })
            .catch((error) => console.log(error));

    };


    return (
        <form onSubmit={handleSubmit(onSubmitForm)}>
            <div className='bg-gradient-to-b from-[#b88967] to-[#cf7332] font-sosial h-screen'>
                <div className='flex flex-col m-auto bg-[#42220f] pb-8 w-[600px]' >
                    <div className='flex flex-col items-center gap-[9px] w-full mt-[30px]'>
                        <div className='text-[#b88967] text-[48px] font-bold'>Sign In</div>
                        <div className='w-[61px] h-[6px] bg-[#b88967] rounded-[9px]'></div>
                    </div>
                    <div className='mt-[55px] flex flex-col gap-[25px]'>
                        {/* <div className='flex items-center m-auto w-[480px] h-[80px] bg-[#eaeaea] rounded-[6px]'>
                            <label htmlFor="name" className='hidden'>Username</label>
                            <img className='m-[30px]' src={user_icon} alt="" />
                            <input id='name' placeholder='Username' type="text" className='h-[50px] w-[400px] bg-transparent border-none outline-none bg-[#797979] text-[19px]' />
                        </div> */}
                        <div className='flex items-center m-auto w-[480px] h-[80px] bg-[#eaeaea] rounded-[6px]'>
                            <label htmlFor="email" className='hidden'>Email</label>
                            <img className='m-[30px]' src={email_icon} alt="" />
                            <input {...register("email")} id='email' placeholder='Email' type="text" className='h-[50px] w-[400px] bg-transparent border-none outline-none bg-[#797979] text-[19px]' />
                            <p className="error">{errors.email?.message}</p>
                        </div>
                        <div className='flex items-center m-auto w-[480px] h-[80px] bg-[#eaeaea] rounded-[6px]'>
                            <label htmlFor="password" className='hidden'>Passowrd</label>
                            <img className='m-[30px]' src={password_icon} alt="" />
                            <input {...register("password")} id='password' placeholder='Password' type="password" className='h-[50px] w-[400px] bg-transparent border-none outline-none bg-[#797979] text-[19px]' />
                            <p className="error">{errors.password?.message}</p>
                        </div>
                    </div>
                    <div className='pl-[62px] mt-[27px] text-[#797979] text-[18px]'>Forgot Password? <span className='text-[#c29f8f] cursor-pointer'>Click Here!</span></div>
                    <div className='flex gap-[30px] my-[60px] m-auto'>
                        <div className='flex justify-center items-center w-[220px] h-[59px] text-[#fff] bg-[#fa8e40] rounded-[50px] text-[19px] font-bold cursor-pointer'>Register</div>
                        <button type="submit" className='flex justify-center items-center w-[220px] h-[59px] text-[#fff] bg-[#fa8e40] rounded-[50px] text-[19px] font-bold cursor-pointer'>Login</button>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default LoginForm;