import React, { useState, useEffect } from "react";
import axios from "axios";
import {Link} from "react-router-dom";

export default function () {
    const [characters, setCharacters] = useState([]);
    const source = axios.CancelToken.source(); // Создаем источник для отмены запросов
    const fetchCharacters = async () => {
        try {
            for (let i = 1; i <= 100; i++) {
                const result = await axios.get(
                    `https://rickandmortyapi.com/api/character/?page=${i}`,
                    {
                        cancelToken: source.token, // Передаем токен отмены запроса
                    }
                );
                // await new Promise(res => setTimeout(res, 200));
                // @ts-ignore
                setCharacters((prevCharacters) => [...prevCharacters, ...result.data.results]);}

        } catch (error) {
            if (axios.isCancel(error)) {
                console.log("Request cancelled:", error.message);
            } else {
                console.error("Error fetching characters:", error);
            }
        }
    };
    useEffect(() => {

        fetchCharacters();

        // return () => {
        //     source.cancel("Component unmounted"); // Отменяем все запросы при размонтировании компонента
        // };
    }, []);

    return (
        <div>
            <Link to={"/"}>Home</Link>
            <button onClick={() => {
                setCharacters([...characters].reverse())
            }}>111111</button>

            {characters.length < 98 ? (
                <div>Loading...</div>
            ) : (
                characters.map((character: any, index) => (
                    <div key={index}>
                        <h2>{character.name}</h2>
                        <img width="250" height="250" src={character.image} alt={character.name}/>
                    </div>
                ))
            )}
        </div>
    );
}
