import { useState } from 'react';
import React from 'react';
import { Link } from 'react-router-dom';


const ForgotPassword = () => {
    const [email, setEmail] = useState('');

    const handleForgotPassword = (e) => {
        e.preventDefault();
        // Send password reset email logic
        console.log('Sending password reset email to:', email);
    };

    return (
        <div className="bg-cover min-h-screen flex items-center justify-center relative">
            <div className="absolute inset-0 bg-gradient-to-b from-gray-200 to-transparent opacity-50"></div>
            <div className="container mx-auto text-center relative z-10">
                <h2 className="text-3xl font-bold text-gray-500 mb-4">Forgot Password</h2>
                <form onSubmit={handleForgotPassword} className="mt-4 max-w-md mx-auto">
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="mt-1 block w-full rounded-md p-4 border-gray-800 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                            required placeholder='Enter your mail'
                        />
                    </div>
                    <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">
                        Reset Password
                    </button>
                </form>
                <p className="mt-4 text-sm text-gray-600">
                    Remember your password? <Link to="/login" className="text-blue-500 hover:underline">Login here</Link>.
                </p>
            </div>
        </div>
    );
};

export default ForgotPassword;