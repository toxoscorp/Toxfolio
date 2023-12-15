import React from 'react'
import './HomeView.css'

import logo from '/logo.svg'

import TitleSub from '../components/TitleSub'

function HomeView() {
  return (
    <>
        <div className='home'>
            <TitleSub title='Tristan Robichaud' subtitle='Software Engeneering,Devlopper' direction='right' />
        </div>
        <div className='background'>
            <img src={logo} alt="logo" />
        </div>
    </>
  )
}

export default HomeView