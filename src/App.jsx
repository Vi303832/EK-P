import { useState } from 'react'
import { Routes, Route } from "react-router"
import Home from './components/Home'
import Header from './components/Header'
import Footer from './components/Footer'

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


        </Routes>

      </div>

    </>
  )
}

export default App
