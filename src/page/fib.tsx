import React, { useEffect, useState } from 'react';

function EventLeakComponent() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        // @ts-ignore
        setItems(Array.from({ length: 1000 }).map((_, i) => i));
    }, []);

    return (
        <div>

            {items.map(item => (
                <div
                    key={item}
                    onClick={() => console.log(item)}
                >
                    Item {item}
                </div>
            ))}
        </div>
    );
}

export  function Fib() {
    const [show, setShow] = useState(true);

    return (
        <div>
            <button onClick={() => setShow(prev => !prev)}>Toggle</button>
            {show && <EventLeakComponent />}
        </div>
    );
}
