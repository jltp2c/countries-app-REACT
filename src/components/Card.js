import React from 'react'
import {useEffect, useState} from 'react';
import Loader from "./Loader";

const  Card= ({country}) => {
    let flagNames = country.translations.fra.common;

const [loader,setLoader] = useState(true);

useEffect (()=> {
  setTimeout(() => {
    setLoader(false)
  }, 1000);
}, [])

  return (

      loader ? 
    (
      <div className='loader'>
        <Loader/> 
      </div>
      
    ):(
      <li className='card'>
        <img src={country.flags.svg} alt={"Flags" + flagNames} />
        <div className='infos'>
            <h2>{flagNames}</h2>
            <h4>{country.capital}</h4>
            <p>Pop : {country.population.toLocaleString()}</p>
        </div>
      </li>
    )
   
  )
}

export default Card