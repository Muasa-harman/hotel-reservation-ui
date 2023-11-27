import React from 'react'
import './Home.scss'
import Navbar from '../components/navbar/Navbar'
import Header from '../components/header/Header'

function Home() {
  return (
    <div className='home'>
        <Navbar/>
        <Header/>
    </div>
  )
}

export default Home