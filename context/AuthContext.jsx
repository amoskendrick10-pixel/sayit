


"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const router = useRouter();

    useEffect(() => {
      
        const token = localStorage.getItem("authToken");
        if (token) {
            // eslint-disable-next-line react-hooks/set-state-in-effect
            setIsAuthenticated(true);
        }
        setIsLoading(false);
    }, []);

    const login = (token) => {
        localStorage.setItem("authToken", token);
        setIsAuthenticated(true);
        router.push("/dashboard");
    };

    const logout = () => {
        localStorage.removeItem("authToken");
        setIsAuthenticated(false);
        router.push("/"); 
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, isLoading, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    if(!useContext){
        throw new Error("useAuth must be used in an AuthProvider")
    }
    return useContext(AuthContext)
}