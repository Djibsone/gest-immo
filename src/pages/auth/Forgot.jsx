import React, { useState } from 'react';
import { Mail } from 'react-feather';
import { Link } from 'react-router-dom';
import { service } from '../../services/service';
import { toast } from 'react-toastify';

const Forgot = () => {
    const [errors, setErrors] = useState({});
    const [formData, setFormData] = useState({ email: '' });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await service.forgot(formData);
            toast.success(res.data.message);
        } catch (error) {
            if (error?.response?.data) {
                setErrors(error.response.data);
            } else {
                toast.error('Forgot password failed.');
            }
        }
    }

    return (
        <div className="font-[sans-serif]">
            <div className="min-h-screen flex items-center justify-center">
                <div className="grid md:grid-cols-2 items-center gap-4 max-md:gap-8 max-w-6xl max-md:max-w-lg w-full p-4 m-4 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-md">
                    <div className="md:max-w-md w-full px-4 py-4">
                        <form onSubmit={handleSubmit}>
                            <div className="mb-12">
                                <h3 className="text-gray-800 text-3xl font-extrabold">Forgot Password</h3>
                                <p className="text-sm mt-4 text-gray-800">
                                    Forgot your password
                                    <Link to="/auth"
                                        className="text-blue-600 font-semibold hover:underline ml-1 whitespace-nowrap">Reset it here
                                    </Link>
                                </p>
                            </div>

                            <div>
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

                            <div className="mt-12">
                                <button className="w-full shadow-xl py-2.5 px-4 text-sm tracking-wide rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none">Reset Password</button>
                            </div>
                        </form>
                    </div>

                    <div className="md:h-full bg-[#000842] rounded-xl lg:p-12 p-8">
                        <img src="https://img.freepik.com/free-vector/forgot-password-concept-illustration_114360-1095.jpg" className="w-full h-full object-cover"
                            alt="forgot-image" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Forgot;
