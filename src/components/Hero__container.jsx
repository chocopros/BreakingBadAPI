import React from 'react'
import Card__Character from './Card__Character'

const Hero__container = () => {


  return (
    <div className='container__hero'>
        <nav>
            <img className='logo' src="https://www.pngplay.com/wp-content/uploads/6/Breaking-Bad-Logo-PNG-HD-Quality.png" alt="" />
            <ul className='list__nav'>
                <li><a href=""></a>Home</li>
                <li><a href=""></a>Personajes</li>
                <li><a href=""></a>Episodes</li>
                <li><a href=""></a>About Page</li>
                <li><a href=""></a>Contact</li>
            </ul>
        </nav>

        <div className="container__card">
            <Card__Character />
            <Card__Character />
            <Card__Character />
            <Card__Character />
            <Card__Character />
            <Card__Character />
        </div>

    </div>
  )
}

export default Hero__container