import React from 'react';
import { FloatingWhatsApp } from 'react-floating-whatsapp'
import fotoPersonal from '../../assets/img/nuevaFoto.png'
import './buttonwhatsapp.css'


const WhatsappButton = () => {
  return (
    <div>
       <FloatingWhatsApp
           accountName="Alberto Romero"
           phoneNumber="+584142360529"
           avatar={fotoPersonal}
           statusMessage="Normalmente responde en 5 min."
           chatMessage={`Hola! 🤝 ${"\n"}Comenzamos a trabajar??`}
           placeholder="Escribe un mensaje aquí"
           allowClickAway="true"
           className='main-buttonChat'
           buttonClassName='button-whatsapp1'
           darkMode='true'
          
           
 />
           
    </div>
  );
};

export default WhatsappButton;