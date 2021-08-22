import '../styles/Capa.scss'
import  React from 'react'
import { Link } from 'react-router-dom';

import '../assets/imagens/facebook.svg'
import rexfort3 from '../assets/imagens/rexfort3.png'
import rexfort from '../assets/imagens//rexfort.png'
import rexfort2 from '../assets/imagens/rexfort2.png'
import logotipo from '../assets/imagens/logotipo.png'
import facebookicon from '../assets/imagens/facebook.svg'
import instagramicon from '../assets/imagens/instagram.svg'
import linkedinicon from '../assets/imagens/linkedin.svg'
import whatsappicon from '../assets/imagens/whatsapp.svg'

import capa1 from '../assets/imagens/capa1.png'
import capa2 from '../assets/imagens/capa2.png'
import capa3 from '../assets/imagens/capa3.png'



export function Home(){
    

    return (
        <>
        <menu/>
    <div className="App">
      <div className="menulogo">
       
      
       <img src={logotipo} height="30" />
      </div>

    <div className="social" >
        <img src={whatsappicon} height="20" />
       <img src={instagramicon} height="20" />
       <img src={linkedinicon} height="20" />
       <img src={facebookicon} />
       
       </div>

    <div className="accordion">
        <div className="img-container" >
          <img src={capa1} />
          <div className="cover">
          </div>
          <div className="caption">
            <img src={rexfort3}/>
            
            
          </div>
        </div>
        <div className="img-container">
          <img src={capa2} />
          <div className="cover">
          </div>
          <div className="caption">
            <img src={rexfort2}/>
            
            
          </div>
        </div>
        
        <div className="img-container">
          <img src={capa3} />
          <div className="cover"/>
          </div>
          <div className="caption">
          <img src={rexfort}/>
            </div>
          </div>
        </div>
        </>

        
    
  );
}

    
            