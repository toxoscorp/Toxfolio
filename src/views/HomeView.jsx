import React from 'react'
import './HomeView.css'

import logo from '/logo.svg'

import TitleSub from '../components/TitleSub'
import NavBar from '../components/NavBar'

function HomeView() {
  return (
    <>
        <div className='home'>
            <NavBar />
            <TitleSub title='Tristan Robichaud' subtitle='Software Engeneering,Devlopper' direction='right' />
        </div>
        <div className='background'>
            <img src={logo} alt="logo" />
        </div>
    </>
  )
}

export default HomeView