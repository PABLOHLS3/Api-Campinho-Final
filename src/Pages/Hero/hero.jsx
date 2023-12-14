import React from 'react'
import { Col, Row } from 'react-bootstrap'


const Hero  = () => { 
  return (
        <section className='hero'>
            <div className=' descrição container-fluid  '>
                <Row>
                    <Col xs= {2} className=''></Col>
                    <Col xs = {8} className=''>
                    <h1>O LUGAR DOS SEUS FILMES <span>FAVORITOS</span></h1>
                    <p>Explore o fascinante universo do cinema no CampiCine. Descubra uma coleção diversificada de 
                        filmes, desde clássicos atemporais até as últimas estreias.</p>

                    <div className='busca'>
                    <input type="text" placeholder='Digite um filme aqui...'/>
                    <button className='seta'></button>
                    </div>

                    </Col>
                    <Col xs= {2} ></Col>
                 </Row>
            </div>
        </section>

  )
}

export default Hero