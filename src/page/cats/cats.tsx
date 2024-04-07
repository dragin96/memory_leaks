import React, { useState, useEffect } from 'react';
import '../../App.css'; // Убедитесь, что стили подключены

function CatImages() {
    const [cats, setCats] = useState([]); // Состояние для хранения списка котов
    const [loading, setLoading] = useState(true); // Состояние для индикации загрузки
    const [error, setError] = useState(null); // Состояние для хранения возможной ошибки

    useEffect(() => {
        // Функция для загрузки картинок котов
        const fetchCats = async () => {
            try {
                // Запрос к тестовому API
                const response = await fetch('https://api.thecatapi.com/v1/images/search?limit=5');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                // Обновляем состояние списка котов данными из API
                // @ts-ignore
                setCats([...data, ...data,...data]);
            } catch (error) {
                // setError(error.message); // Сохраняем сообщение об ошибке в состояние
            } finally {
                setLoading(false); // Указываем, что загрузка завершена
            }
        };

        fetchCats(); // Вызываем функцию загрузки при монтировании компонента
    }, []); // Пустой массив зависимостей означает, что эффект запустится один раз после первого рендеринга

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div id="demo">
            {cats.map((cat: {id: number; url: string}) => (
                    <p key={cat.id} className="hover">
                <img src={cat.url} alt="Cat" style={{ width: '400px', height: '400px' }} />
    </p>
))}
    </div>
);
}

export default CatImages;
