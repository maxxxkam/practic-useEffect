import React, { useState } from 'react'
import './Header.scss'

const Header = () => {

    const [isBurger, setIsBurger] = useState(false)

    const handleBurger = () => setIsBurger((prev) => !prev);

  return (
    <>
    <header>
        <div className="container">
            <div className="wrapper">
                <img src="/eagle-logo.png" alt="" />
                <nav className={isBurger ? 'active' : null }>
                    <a href="">tak-to</a>
                    <a href="">syak-to</a>
                    <a href="">tuda-suda</a>
                </nav>

                    <button onClick={handleBurger} className='burger' >⌂</button>
            </div>
        </div>
    </header>
    </>
  )
}

export default Header
