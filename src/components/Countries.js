import axios from "axios";
import {useEffect, useState} from 'react';
import Card from "./Card";

function Countries() {
const [data,setData] = useState([]);
const [range,setRange] =useState(36);
const [selectedRadio, setSelectedRadio] = useState("");
const continents = ["Africa", "Europe", "Asia", "America", "Oceania"];

useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all").then((res)=> setData(res.data))
}, [])


  return (
    <div className="countries">
        <ul className="radio-container">
            <input type="range" 
            min="1" 
            max= "250" 
            defaultValue ={range} 
            onChange={(e) =>{setRange(e.target.value)}}/>
            {
                continents.map(continent =>(
                    <li>
                        <input checked={continent=== selectedRadio} type="radio" id={continent} name="ContinentsRadio" onChange={(e) => setSelectedRadio(e.target.id)}/>
                        <label htmlFor={continent}> {continent} </label>
                    </li>
            ))}
        </ul>
        {selectedRadio&& <button onClick={() => setSelectedRadio("")}>Annuler la recherche</button>} 
        <ul>
            {
                data
                .filter((country) => country.continents[0].includes(selectedRadio))
                .sort((a,b) => b.population-a.population )
                .slice(0,range)
                .map((country, index) => (
                    <Card key ={index} country={country} />
                ))
            }
        </ul>
    </div>
  );
};

export default Countries