import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const User = () => {

    const [data, setData] = useState({});

    const { id } = useParams();

    useEffect(() => {
        const getData = async () => {
            const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
            const response = await res.json();
            if(response){
                setData(response);
            }
        }

        getData();

        return ()=>{
            getData();
        }

    }, [id]);

    console.log(id);

    return (
        <div>User
            <h3>{data.id}</h3>
            <h3>{data.title}</h3>
            <h3>{data.body}</h3>
        </div>
    )
}

export default User