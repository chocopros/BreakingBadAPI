import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'

const Card__Character = () => {

    const [character, setCharacter] = useState({})

    useEffect ( ()=>{

        const URL = "https://www.breakingbadapi.com/api/character/random"

        axios.get(URL)
        .then(rest => {
            setCharacter(rest.data[0])
        })
        .catch(err => {console.log(err)})
    },[])

    console.log(character)
    
  return (
    <div className="card">
        <h2>{character?.nickname}</h2>
        <img src={character?.img} alt="" />
        <ul className='list__details'>
            <li><span>Name: </span>{character?.name}</li>
            <li><span>Birthday: </span>{character.birthday}</li>
            <li className='details__appearance'><span>Appearance: </span>{character?.occupation}</li>
            <li className='details__Occupation'><span>Occupation: </span>{character?.name}</li>
            <li><span>Status: </span>{character?.status}</li>
        </ul>
    </div>
  )
}

export default Card__Character