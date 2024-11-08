import React from 'react'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import Main from '../components/Main'

const HomeScreen = () => {
  return (
    <div className='container'>
            <Hero />
            <Main />
            <Footer />
    </div>
  )
}

export default HomeScreen