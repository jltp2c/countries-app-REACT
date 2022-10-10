import React from 'react'


const  Card= ({country}) => {
    let flagNames = country.translations.fra.common;

  return (
    <li className='card'>
        <img src={country.flags.svg} alt={"Flags" + flagNames} />
        <div className='infos'>
            <h2>{flagNames}</h2>
            <h4>{country.capital}</h4>
            <p>Pop : {country.population.toLocaleString()}</p>
        </div>
    </li>
  )
}

export default Card