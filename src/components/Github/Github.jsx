import React from "react";
import { useEffect , useState } from "react";
import { useLoaderData } from "react-router-dom"


export default function Github() {

    const [data , setData] = useState([])
    useEffect(() => {
        fetch(`https://api.github.com/users/priyanshuvishwa`)
        .then((res) => res.json())
        .then((data) => 
        setData(data))
    }, [])

    return (
        <>
        <div className="text-center">
            <h1>Name:{data.name}</h1>
            <h2>Followers:{data.followers}</h2>
            <h2>Account created at:{data.created_at}</h2>
            <img src={data.avatar_url} alt="PFP" className="w-50 h-50" />
        </div>
            
        </>
    )
}