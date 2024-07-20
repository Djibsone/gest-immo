import React, { useState } from 'react';
import { Mail, Lock, User, EyeOff, Eye } from 'react-feather';
import { service } from '../../services/service';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Register = () => {
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [errors, setErrors] = useState({});
    const [formData, setFormData] = useState({ name: '', email: '', password: '', cpassword: '' });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (formData.password != formData.cpassword) {
            toast.error('Les deux mots de passe sont pas identiques.');
        } else {
            try {
                const res = await service.register(formData);
                toast.success(res.data.message);
            } catch (error) {
                if (error?.response?.data) {
                    setErrors(error.response.data);
                } else {
                    toast.error('Register failed.');
                }
            }
        }
    }

    return (
        <div className="font-[sans-serif]">
            <div className="h-full flex flex-col items-center justify-center">
              <div
                  className="grid md:grid-cols-2 items-center gap-4 max-md:gap-8 max-w-6xl max-md:max-w-lg w-full p-4 m-4 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-md">
                    <div className="md:max-w-md w-full px-4 py-4">
                        <form onSubmit={handleSubmit}>
                            <div className="mb-12">
                                <h3 className="text-gray-800 text-3xl font-extrabold">Register</h3>
                                <p className="text-sm mt-4 text-gray-800">
                                    Already have an account
                                    <Link to="/auth"
                                        className="text-blue-600 font-semibold hover:underline ml-1 whitespace-nowrap">Login here
                                    </Link>
                                </p>
                            </div>

                            <div>
                                <label className="text-gray-800 text-xs block mb-2">Name</label>
                                <div className="relative flex items-center">
                                    <input name="name" type="text"
                                        className="w-full text-gray-800 text-sm border-b border-gray-300 focus:border-blue-600 px-2 py-3 outline-none"
                                        placeholder="Enter name"
                                        onChange={handleChange} />
                                    <User className="w-[18px] h-[18px] absolute right-2" color="#bbb" />
                                </div>
                                {errors.name && <span className="text-red-500 text-sm">{errors.name[0]}</span>}
                            </div>

                            <div className="mt-8">
                                <label className="text-gray-800 text-xs block mb-2">Email</label>
                                <div className="relative flex items-center">
                                    <input name="email" type="email"
                                        className="w-full text-gray-800 text-sm border-b border-gray-300 focus:border-blue-600 px-2 py-3 outline-none"
                                        placeholder="Enter email"
                                        onChange={handleChange} />
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
                                    <span
                                        className="w-[18px] h-[18px] absolute right-2 cursor-pointer" color="#bbb"
                                        onClick={() => setShowPassword(!showPassword)}
                                    >
                                        {showPassword ? <EyeOff /> : <Eye />}
                                    </span>
                                </div>
                                {errors.password && <span className="text-red-500 text-sm">{errors.password[0]}</span>}
                            </div>

                            <div className="mt-8">
                                <label className="text-gray-800 text-xs block mb-2">Confirm Password</label>
                                <div className="relative flex items-center">
                                    <input name="cpassword" type={showPassword ? 'text' : 'password'}
                                        className="w-full text-gray-800 text-sm border-b border-gray-300 focus:border-blue-600 px-2 py-3 outline-none"
                                        placeholder="Confirm password"
                                        onChange={handleChange} />
                                    <span
                                        className="w-[18px] h-[18px] absolute right-2 cursor-pointer" color="#bbb"
                                        onClick={() => setShowPassword(!showPassword)}
                                    >
                                        {showPassword ? <EyeOff /> : <Eye />}
                                    </span>
                                </div>
                            </div>

                            <div className="mt-12">
                                <button className="w-full shadow-xl py-2.5 px-4 text-sm tracking-wide rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none">Register</button>
                            </div>
                        </form>
                    </div>

                    <div className="md:h-full bg-[#000842] rounded-xl lg:p-12 p-8">
                        <img src="https://www.shutterstock.com/image-vector/vector-illustration-register-now-speech-260nw-1902696775.jpg" className="w-full h-full object-cover"
                            alt="login-image" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register;
