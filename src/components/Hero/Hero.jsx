import React, { useEffect, useState } from 'react';
import './Hero.scss';

const Hero = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log('Счетчик изменился');
    }, [count]); 

    return (
        <>
            <section className="hero">
                <div className="container">
                    <div className="hero__wrapper">
                    <p>Счетчик: {count}</p>
                    <button onClick={() => setCount(count + 1)}>Увеличить</button>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Hero;
