import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { Navbar } from './components/Navbar/Navbar'

import { Home } from './pages/home/Home'
import { About } from './pages/about/Home'
import Projects from './pages/projects/Home'
import { Habilities } from './pages/habilities/Home'


function App() {

  return (
    <>
      <div className='App'>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path='Sobre' element={<About />} />
            <Route path='Projetos' element={<Projects isOpen={false} onClose={function (): void {
              throw new Error('Function not implemented.')
            }} children={undefined} />} />
            <Route path='Habilidades' element={<Habilities />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
