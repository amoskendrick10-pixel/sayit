
"use client";

import Button from "@/components/Button";
import { useAuth } from "@/context/AuthContext";
import Link from "next/link";
import { useState } from "react";



const SignInPage = () => {
    const { signup } = useAuth();
        const [formData, setFormData] = useState({
            email: "",
            password: ""
        });
        const [error, setError] = useState(null);
    
        const handleSignIn = (event) => {
            event.preventDefault();
    
            // const { name, email, password } = formData;
            const result = signup(formData.email, formData.password);
            if (result.error) {
                setError(result.error)
            }
        };
    
        const handleChange = (event) => {
            const { name, value } = event.target;
            setFormData(prevData => ({
                ...prevData,
                [name]: value
            }));
        };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
                <h1 className="text-3xl font-bold mb-4">Sign In</h1>
                <p className="text-gray-600 mb-6">Welcome back! Please sign in to continue.</p>
                {error && <p className="text-red-500 text-sm mb-4"> {error} </p>}
                <form action="" className=" p-6 space-y-4 w-80">
                    <div>
                        <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
                        <input
                            type="email"
                            onChange={handleChange}
                            value={formData.email}
                            name="email"
                            placeholder="amos@sayit.com"
                            className="border border-gray-300 rounded-full py-2 px-4 w-full focus:outline-none focus:ring-2 focus:ring-sky-500"
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-gray-700 mb-2">Password</label>
                        <input
                            type="password"
                            onChange={handleChange}
                            value={formData.password}
                            name="password"
                            placeholder="********"
                            className="border border-gray-300 rounded-full py-2 px-4 w-full focus:outline-none focus:ring-2 focus:ring-sky-500"
                        />
                    </div>

                    <Button
                        onClick={handleSignIn}
                        label="Sign In"
                        className="bg-sky-700 hover:bg-sky-800 w-full text-white font-semibold py-2 px-4 rounded transition-colors"
                    />
                </form>
                <p className="text-gray-600">Don&apos;t have an account? <Link href="/signup" className="text-sky-500 hover:underline">Sign up</Link></p>
            </div>
            
        </div>
    );
}

export default SignInPage;