import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import vite from "../../img/VITE.png"
import react from "../../img/REACT.png"
import sass from "../../img/SASS.png"
import tmdb from "../../img/TMDB.png"
import cadeiras from "../../img/Poltronas.png"

const Sobre = () => {
  return (
  
    
       <div className='sobre-section container-fluid'>
        <Row>
          <Col xs={6} className='cadeiras'><img src={cadeiras} /></Col>
          
          
          <Col xs={6} className='descricao-sobre '>
            <h1 className='sobre-site'>SOBRE O SITE</h1>
            <h6 className='criacao'>COMO O SITE FOI CRIADO</h6>
            <p className=''>Oi, sou <span>Pablo</span> , e estou empolgado em apresentar o CampCine, meu projeto dedicado ao mundo do 
              cinema.
              Desenvolvi este site com React, Vite e SASS para oferecer uma experiência cinematográfica moderna 
              e envolvente. Com a navegação suave do React e o carregamento rápido do Vite, você pode explorar nossa 
              seleção de filmes de forma eficiente.
              O toque elegante do SASS garante um design contemporâneo e estiloso. 
              Aqui no CampCine, a paixão pelo cinema encontra a tecnologia. Seja um entusiasta ou alguém em busca de 
               novidades, estou animado para guiá-lo por essa experiência cinematográfica única. Vamos explorar juntos 
               o melhor do cinema moderno. Bem-vindo ao <span>CampCine</span>!</p>

               <div className='icons'>
                <img className="logo" src={vite} alt="" />
                <img className="logo"src={react} alt="" />
                <img className="logo"src={sass} alt="" />
                <img className="logo" src={tmdb} alt="" />
               </div>
            
            
          </Col>
        </Row>

        

        </div>
       
    
    
  )
}

export default Sobre