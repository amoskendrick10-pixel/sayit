"use client"

import Counter from "@/components/Counter"
import PostList from "@/components/PostList";
import { useEffect, useState } from "react"


const Dashboard = () => {

    const [count, setCount] = useState(0);
    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const handleIncrement = () => {
        setCount(count + 1);
    }

    const handleDecrement = () => {
        if(count > 0) {
            setCount(count - 1);
        } else {
            setCount(0);
        }
    }

    useEffect(() => {
        const fetchPost = async () => {
            try{
                const response = await fetch("https://dummyjson.com/posts")

                const data = await response.json()
                setPosts(data.posts)
            }catch(error){
                console.error("Error fetching posts:", error);
            }finally{
                setIsLoading(false);
            }
        }
        fetchPost()

    },[]);

    if(isLoading) {
        return <div>Loading...</div>
    }

  return (
    <div>
        {/* <Counter
          count={count}
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
        /> */}

        <PostList
         posts={posts}
        />
    </div>
  )
}
export default Dashboard