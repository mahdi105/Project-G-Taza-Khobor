import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header/Header'
import Blogs from './components/Blogs/Blogs'

function App() {
  return (
    <div className='App'>
      <Header></Header>
      <Blogs></Blogs>
    </div>
  )
}

export default App
