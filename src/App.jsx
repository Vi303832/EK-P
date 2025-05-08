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
import Hakkımızda from "./components/Hakkımızda"
import DefaultHeader from './components/DefaultHeader'
import NotFound from './components/NotFound'

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
              <DefaultHeader />
              <BitenProjeler />
              <Footer />
            </>
          } />
          <Route path='/DevamEdenProjeler' element={
            <>
              <DefaultHeader />
              <DevamProjeler />
              <Footer />
            </>
          } />
          <Route path='/GelecekProjeler' element={
            <>
              <DefaultHeader />
              <GelecekProjeler />
              <Footer />
            </>
          } />
          <Route path='/:id' element={
            <>
              <DefaultHeader />
              <Proje />
              <Footer />
            </>
          } />
          <Route path='/iletişim' element={
            <>
              <DefaultHeader />
              <İletişim />
              <Footer />
            </>
          } />
          <Route path='/Hakkımızda' element={
            <>
              <DefaultHeader />
              <Hakkımızda />
              <Footer />
            </>
          } />

          <Route path='*' element={
            <>
              <DefaultHeader />
              <NotFound />
              <Footer />
            </>
          } />
        </Routes>

      </div>

    </>
  )
}

export default App
