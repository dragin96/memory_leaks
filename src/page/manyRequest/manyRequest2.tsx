import React, { useState, useEffect } from 'react';
import {Link} from "react-router-dom";

interface IPostID {
    id: number,
    title: string,
    body: string
}

function UserPosts({ userId = 1 }) { // Задаем значение по умолчанию для userId
    const [posts, setPosts] = useState([] as IPostID[]);
    const [reload, setReload] = useState(false);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
            .then(response => response.json())
            .then((data: IPostID[]) => {
                setPosts(data);
                setReload(false);
            })
            .catch(error => console.error("Failed to fetch user posts", error));
    }, [reload]);

    return (
        <div>
            <Link to={"/"}>Home</Link>
            <button onClick={() => setReload(true)}>Reload Posts</button>
    <ul>
    {posts.map(post => (
            <li key={post.id}>
                <h3>{post.title}</h3>
                <div>{post.body}</div>
                <hr/>
            </li>
        ))}
    </ul>
    </div>
);
}

export default UserPosts;
