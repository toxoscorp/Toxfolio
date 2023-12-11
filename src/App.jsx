import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import HomePage from './views/HomePage'

function App() {
  console.log(window.location.pathname);

  return (
    <>
      <HomePage />
    </>
  )
}

export default App
