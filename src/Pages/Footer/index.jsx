import React from 'react'
import { Row, Col} from 'react-bootstrap'
import linkedin from '../../svg/linkedin-svgrepo-com.svg'
import gitHub from '../../svg/github-142-svgrepo-com.svg'
import whatsapp from '../../svg/whatsapp-svgrepo-com.svg';
import direita from '../../svg/direita.svg';
import esquerda from '../../svg/esquerda.svg';

const Footer = () => {
  return (
    
        <div className='footer container-fluid '>
            <Row className='footer'>
                <Col xs={4} className='seta-direita'><img src={direita} className='seta'></img></Col>
                <Col xs={4}>
                    <p className='obrigado'>Obrigado! Me siga nas minhas redes:</p>

                    <div>
                        <ul className='logo-footer'>
                            <li><a href="https://www.linkedin.com/in/pablo-henrique-3b37b9205/"> <img  className= 'linkedin' src={linkedin} alt="" /></a></li>
                            <li><a href="https://github.com/PABLOHLS3"> <img  className= 'github' src={gitHub} alt="" /></a></li>
                            <li><a href="https://wa.me/5511957170874"> <img  className= 'whatsapp' src={whatsapp} alt="" /></a></li>

                        </ul>
                    </div>
                </Col>
                <Col xs={4} className='seta-esquerda' ><img src={esquerda} className='seta'></img></Col>
            </Row>


        </div>

    
    
  
    
  )
}

export default Footer

