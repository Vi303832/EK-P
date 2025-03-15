import { useState } from 'react'
import { Routes, Route } from "react-router"
import Home from './components/Home'
import Header from './components/Header'
import Footer from './components/Footer'
import BitenProjeler from './components/BitenProjeler'
import Proje from './components/Proje'
import GelecekProjeler from './components/GelecekProjeler'
import DevamProjeler from './components/DevamEdenProjeler'
import İletişim from "./components/İletişim"

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
          <Route path='/BitenProjeler' element={

            <>

              <Header />




              <BitenProjeler />
              <Footer />
            </>

          } />
          <Route path='/DevamEdenProjeler' element={

            <>

              <Header />




              <DevamProjeler />
              <Footer />
            </>

          } />
          <Route path='/GelecekProjeler' element={

            <>

              <Header />




              <GelecekProjeler />
              <Footer />
            </>

          } />
          <Route path='/:id' element={



            <>

              <Header />

              <Proje />
              <Footer />
            </>

          } />

          <Route path='/iletişim' element={
            <>

              <Header />




              <İletişim />
              <Footer />
            </>

          } />


        </Routes>

      </div>

    </>
  )
}

export default App
