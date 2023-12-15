import React from 'react'
import './NavBar.css'

import menu from '/menu.svg'

function NavBar() {
  return (
    <>
        <div className='navBar'>
            <div className='navBar__menu'>
                <img src={menu} alt="menu" />
                <div className='navBar__links'>
                    <a href='#'>Home</a>
                    <a href='#'>About</a>
                    <a href='#'>Skills</a>
                    <a href='#'>Projects</a>
                    <a href='#'>Contact</a>
                </div>
            </div>
            <div className='navBar__logo'>
                <h1>Toxfolio</h1>
            </div>
        </div>
    </>
  )
}

export default NavBar