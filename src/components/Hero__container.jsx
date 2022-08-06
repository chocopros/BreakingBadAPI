import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'

const Hero__container = () => {

  const [character, setCharacter] = useState([])

  useEffect ( ()=>{

      const URL = "https://www.breakingbadapi.com/api/characters?limit=6&offset=0"

      axios.get(URL)
      .then(rest => {
          setCharacter(rest.data)
      })
      .catch(err => {console.log(err)})
  },[])

  console.log(character)


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

          {character.map (per => (
            <div className="card">
              <h2>{per?.nickname}</h2>
              <img src={per?.img} alt="" />
              <ul className='list__details'>
                <li><span>Name: </span>{per?.name}</li>
                <li><span>Birthday: </span>{per.birthday}</li>
                <li><span>Portrayed: </span>{per?.portrayed}</li>
                <li><span>Status: </span>{per?.status}</li>
              </ul>
            </div>
            
          ))
          }

        </div>
         
    </div>

   
  )
}

export default Hero__container