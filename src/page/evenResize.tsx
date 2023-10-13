import React, { useEffect } from 'react';
import {Link} from "react-router-dom";

function EventResize() {
    useEffect(() => {
        const handleResize = () => {
            console.log('Размер окна изменен на: ', window.innerWidth, 'x', window.innerHeight);
        };

        console.log('\'resize\', handleResize');
        window.addEventListener('resize', handleResize);

        // Здесь мы не удаляем обработчик события, что приводит к утечке памяти
        // return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className="App">
            <Link to={"/"}>Home</Link>
            <h1>Пример утечки памяти в React c добавлением событием</h1>
        </div>
    );
}

export default EventResize;