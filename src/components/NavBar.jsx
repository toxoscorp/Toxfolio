import React from 'react'
import './NavBar.css'

import Menu from './Menu'

import menu from '/menu.svg'

function NavBar() {
  return (
    <>
        <div className='navBar'>
            <Menu />
            <div className='navBar__logo'>
                <h1>Toxfolio</h1>
            </div>
        </div>
    </>
  )
}

export default NavBar