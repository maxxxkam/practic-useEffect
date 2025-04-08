import React, { useEffect, useState } from 'react';
import './Hero.scss';

const Hero = () => {
    const [count, setCount] = useState(() =>{
        const savedCount = localStorage.getItem('count');
        return savedCount ? parseInt(savedCount, 10) : 0
    });

    useEffect(() => {
        localStorage.setItem('count', count)
        console.log('Счетчик изменился', count);
    }, [count]); 

    return (
        <>
            <section className="hero">
                <div className="container">
                    <div className="hero__wrapper">
                    <p>Счетчик: {count}</p>
                    <button onClick={() => setCount(count + 1)}>Увеличить</button>
                    <button onClick={() => setCount(count * 2)}>X 2</button>
                    <button onClick={() => setCount(count / 2)}>разделить</button>
                    <button onClick={() => setCount(0)}>Сбросить</button>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Hero;
