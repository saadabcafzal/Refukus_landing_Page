import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Work from './components/Work'
import Stripes from './components/Stripes'
import Products from './components/Products'
import Marquees from './components/Marquees'
import Cards from './components/Cards'
import Footer from './components/Footer'
import LocomotiveScroll from 'locomotive-scroll';




function App() {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <div className='w-full h-full bg-zinc-900 font-["satoshi"] text-white'>
    <Navbar/>
    <Work/>
    <Stripes/> 
    <Products/>
    <Marquees/>
    <Cards/>
    <Footer/>
    </div>
  )
}

export default App
