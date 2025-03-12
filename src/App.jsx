import { useState } from 'react'
import { Routes, Route } from "react-router"
import Home from './components/Home'
import Header from './components/Header'

function App() {


  return (
    <>
      <div>
        <Routes>
          <Route path='/' element={
            <>

              <Header />




              <Home />
            </>

          } />


        </Routes>

      </div>

    </>
  )
}

export default App
