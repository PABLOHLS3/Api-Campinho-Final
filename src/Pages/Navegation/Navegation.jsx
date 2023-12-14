import React from 'react'
import logo from "../../img/logo.png"

const Navegation = () => {
  return (
    <div className='nav'>
       <div className='logo'>
            <h1>CampCine</h1>
        </div>

        <div className='imagem'>
            <img src={logo} alt="logo" />
        </div>

          <div>       
            <ul className=''>
               <li><a href="home">Home</a></li>
               <li><a href="filmes">Filmes</a></li>
               <li><a href="populares">Sobre</a></li>
               <li><a href="campinho" className='campinho'>Campinho Digital</a></li>
               
            </ul>

            </div>


    </div>
  )
}

export default Navegation