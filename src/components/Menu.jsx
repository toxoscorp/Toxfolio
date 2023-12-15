import React, { useState } from 'react'
import './Menu.css'

import menu from '/menu.svg'

function Menu() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    return (
        <>
            <div className='menu'>
                <img src={menu} alt="menu" onClick={toggleMenu} />
                {isMenuOpen && (
                    <div className='menu__links'>
                        <a href='#' onClick={toggleMenu}>Home</a>
                        <a href='#'>About</a>
                        <a href='#'>Skills</a>
                        <a href='#'>Projects</a>
                        <a href='#'>Contact</a>
                    </div>
                )}
            </div>
        </>
    )
}

export default Menu