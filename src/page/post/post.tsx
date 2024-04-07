import React, { useState, useEffect } from 'react';

const Posts = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then<{title: string; body: string}[]>(response => response.json())
            .then(data => {
                const expandedData = [...Array(1)].flatMap(() => data); // Умножение данных для демонстрации
                // @ts-ignore
                setPosts(expandedData);
            })
            .catch(error => console.error('Error loading posts:', error));
    }, []);

    const getRandomColor = () => {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    return (
        <div className="posts">
            {posts.map((post: {title: string; body: string}, index) => {
                const color = getRandomColor();
                return (
                    <div key={index} className="post">
                        <h3>{post.title}</h3>
                        <p>{post.body}</p>
                    </div>
                );
            })}
        </div>
);
};

export default Posts;
