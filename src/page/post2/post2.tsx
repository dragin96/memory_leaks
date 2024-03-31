import React, { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';

const Post2 = () => {
        const [position, setPosition] = useState(0);

        useEffect(() => {
            let lastFrameTime = Date.now();

            const animate = () => {
                const now = Date.now();
                const deltaTime = now - lastFrameTime;
                lastFrameTime = now;

                // Обновляем позицию для создания анимации движения
                setPosition((prevPosition) => prevPosition + deltaTime * 0.01);

                requestAnimationFrame(animate);
            };

            const animationFrameId = requestAnimationFrame(animate);

            // Очистка ресурсов
            return () => {
                cancelAnimationFrame(animationFrameId);
            };
        }, []);

        // Простейшая "анимация" — изменение стиля элемента на основе состояния
        return (
            <div style={{ position: 'relative', height: '50px', width: '100%' }}>
                <div style={{
                    position: 'absolute',
                    left: `translateX(${position}px)`,
                    willChange: 'auto',
                    top: '10px',
                    width: '50px',
                    height: '50px',
                    backgroundColor: 'red',
                    zIndex:8,
                    animation: 'all ease-in-out 3s'
                }}>
                    Анимация
                </div>
            </div>
        );
};


export default Post2;
