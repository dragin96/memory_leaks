import React, { useState, useEffect } from "react";
import axios from "axios";
import {Link} from "react-router-dom";
import {rootPath} from "../index";

export default function () {
    const [characters, setCharacters] = useState([]);
    const source = axios.CancelToken.source(); // Создаем источник для отмены запросов
    useEffect(() => {
        const fetchCharacters = async () => {
            try {
                for (let i = 1; i <= 100; i++) {
                    const result = await axios.get(
                        `https://rickandmortyapi.com/api/character/${i}`,
                        {
                            cancelToken: source.token, // Передаем токен отмены запроса
                        }
                    );
                    await new Promise(res => setTimeout(res, 200));
                    // @ts-ignore
                    setCharacters((prevCharacters) => [...prevCharacters, result.data]);
                }
            } catch (error) {
                if (axios.isCancel(error)) {
                    console.log("Request cancelled:", error.message);
                } else {
                    console.error("Error fetching characters:", error);
                }
            }
        };

        fetchCharacters();

        // return () => {
        //     source.cancel("Component unmounted"); // Отменяем все запросы при размонтировании компонента
        // };
    }, []);

    return (
        <div>
            <Link to={rootPath + "/"}>Home</Link>
            {characters.length === 0 ? (
                <div>Loading...</div>
            ) : (
                characters.map((character: any) => (
                    <div key={character.id}>
                        <h2>{character.name}</h2>
                        <img width="250" height="250" src={character.image} alt={character.name} />
                    </div>
                ))
            )}
        </div>
    );
}


const user = {
    name: 'alex',
    age: 29
};