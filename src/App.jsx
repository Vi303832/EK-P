import { useState } from 'react'
import { Routes, Route } from "react-router"
import Home from './components/Home'
import Header from './components/Header'
import Footer from './components/Footer'
import BitenProjeler from './components/BitenProjeler'
import Proje from './components/Proje'

function App() {


  return (
    <>
      <div>
        <Routes>
          <Route path='/' element={
            <>

              <Header />




              <Home />
              <Footer />
            </>

          } />
          <Route path='/Biten' element={<BitenProjeler />} />
          <Route path='/:id' element={<Proje />} />

        </Routes>

      </div>

    </>
  )
}

export default App
