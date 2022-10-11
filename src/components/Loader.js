import React from 'react' 
import LoaderGif from '../assets/img/cube.gif'

function Loader() {
  return (
    <div>
        <img src={LoaderGif} alt="loader" />
    </div>
  )
}

export default Loader