
"use client";

import Button from "@/components/Button";
import { useAuth } from "@/context/AuthContext";




const SignInPage = () => {
    const { login } = useAuth();

    const handleLogin = () => {
        // Perform your auth logic here, then call login()
        const fakeToken = "abc-123-token";
        login(fakeToken);
    };

    return (
        <div>
            <h1>Public Page</h1>
            <Button
                onClick={handleLogin}
                label="Sign In"
                className="bg-sky-700 hover:bg-sky-800 text-white font-semibold py-2 px-4 rounded transition-colors"
            />
        </div>
    );
}

export default SignInPage;