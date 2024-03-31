import React, { useState, useEffect } from 'react';

const Posts = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then<{title: string; body: string}[]>(response => response.json())
            .then(data => {
                const expandedData = [...Array(10)].flatMap(() => data); // Умножение данных для демонстрации
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
                        <div style={{
                            backgroundImage: `linear-gradient(45deg, ${color} ${index * 3}%, transparent ${index * 4}%, transparent ${index * 5}%, ${color} ${index * 6}%, ${color} ${index * 7}%, transparent ${index * 8}%, transparent)`
                        }} className="heavy-load"></div>
                        <h3>{post.title}</h3>
                        <img src={"https://via.placeholder.com/600x" +Math.floor(Math.random()*index)}  alt="Image" />
                        <p>{post.body}</p>
                    </div>
                );
            })}
        </div>
);
};

export default Posts;
