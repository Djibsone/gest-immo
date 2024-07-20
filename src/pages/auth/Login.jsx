import React, { useState } from 'react';
import { Mail, EyeOff, Eye } from 'react-feather';
import { Link, useNavigate } from 'react-router-dom';
import { service } from '../../services/service';
import { toast } from 'react-toastify';

const Login = () => {
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [errors, setErrors] = useState({});
    const [formData, setFormData] = useState({ email: '', password: '' });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await service.login(formData);
            service.saveToken(res.data.authorisation.token);
            toast.success(res.data.status);
            navigate('/admin');
        } catch (error) {
            if (error?.response?.data) {
                setErrors(error.response.data);
            } else {
                // toast.error('Login failed.');
                toast.error('Email or password incorrect.');
            }
        }
    }

    return (
        <div className="font-[sans-serif]">
            {/* <div className="min-h-screen flex flex-col items-center justify-center"> */}
            <div className="h-full flex flex-col items-center justify-center">
                <div className="grid md:grid-cols-2 items-center gap-4 max-md:gap-8 max-w-6xl max-md:max-w-lg w-full p-4 m-4 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-md">
                    <div className="md:max-w-md w-full px-4 py-4">
                        <form onSubmit={handleSubmit}>
                            <div className="mb-12">
                                <h3 className="text-gray-800 text-3xl font-extrabold">Log in</h3>
                                <p className="text-sm mt-4 text-gray-800">
                                    Don't have an account
                                    <Link to="./register" className="text-blue-600 font-semibold hover:underline ml-1 whitespace-nowrap">Register here</Link>
                                </p>
                            </div>

                            <div>
                                <label className="text-gray-800 text-xs block mb-2">Email</label>
                                <div className="relative flex items-center">
                                    <input name="email" type="text" className="w-full text-gray-800 text-sm border-b border-gray-300 focus:border-blue-600 px-2 py-3 outline-none" placeholder="Enter email" onChange={handleChange} />
                                    <Mail className="w-[18px] h-[18px] absolute right-2" color="#bbb" />
                                </div>
                                {errors.email && <span className="text-red-500 text-sm">{errors.email[0]}</span>}
                            </div>

                            <div className="mt-8">
                                <label className="text-gray-800 text-xs block mb-2">Password</label>
                                <div className="relative flex items-center">
                                    <input name="password" type={showPassword ? 'text' : 'password'}
                                        className="w-full text-gray-800 text-sm border-b border-gray-300 focus:border-blue-600 px-2 py-3 outline-none"
                                        placeholder="Enter password" 
                                        onChange={handleChange} />
                                    {/* <Lock className="w-[18px] h-[18px] absolute right-2 cursor-pointer" color="#bbb" /> */}
                                    <span
                                        className="w-[18px] h-[18px] absolute right-2 cursor-pointer" color="#bbb"
                                        onClick={() => setShowPassword(!showPassword)}
                                    >
                                        {showPassword ? <EyeOff /> : <Eye />}
                                    </span>
                                </div>
                                {errors.password && <span className="text-red-500 text-sm">{errors.password[0]}</span>}
                            </div>

                            <div className="flex flex-wrap items-center justify-between gap-4 mt-6">
                                <div className="flex items-center">
                                    <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 shrink-0 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
                                    <label htmlFor="remember-me" className="ml-3 block text-sm text-gray-800">Remember me</label>
                                </div>
                                <div>
                                    <Link to="./forgot-password" className="text-blue-600 font-semibold text-sm hover:underline">Forgot Password?</Link>
                                </div>
                            </div>

                            <div className="mt-12">
                                <button className="w-full shadow-xl py-2.5 px-4 text-sm tracking-wide rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none">Log in</button>
                            </div>

                            {/* <div className="space-x-6 flex justify-center mt-6">
                                <button type="button" className="border-none outline-none">
                                    <Facebook className="inline" size={32} color="#3b5998" />
                                </button>
                                <button type="button" className="border-none outline-none">
                                    <Twitter className="inline" size={32} color="#1DA1F2" />
                                </button>
                                <button type="button" className="border-none outline-none">
                                    <Instagram className="inline" size={32} color="#E1306C" />
                                </button>
                            </div> */}
                        </form>
                    </div>

                    <div className="md:h-full bg-[#000842] rounded-xl lg:p-12 p-8">
                        <img src="https://readymadeui.com/signin-image.webp" className="w-full h-full object-contain" alt="login-image" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
