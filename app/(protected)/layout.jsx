'use client'

import Sidebar from "@/components/Sidebar"
import TopNav from "@/components/TopNav";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation"
import { useEffect } from "react";



const ProtectedLayout = ({ children }) => {
    const { isAuthenticated, isLoading } = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (!isLoading && !isAuthenticated) {
            router.push("/"); 
        }
    }, [isAuthenticated, isLoading, router]);


    if (isLoading || !isAuthenticated) {
        return null;
    }

    return (
        <div className="flex h-screen bg-gray-50 overflow-hidden">
           
            <aside className="w-64 bg-sky-900 shrink-0">
                <Sidebar />
            </aside>
            <main className="flex-1 flex flex-col">
                <TopNav />
                <div className="flex-1 overflow-y-auto p-6">
                    {children}
                </div>
            </main>
        </div>
    )
}
export default ProtectedLayout