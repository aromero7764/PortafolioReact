import React from 'react';
import { FloatingWhatsApp } from 'react-floating-whatsapp'
import fotoPersonal from '../../assets/img/nuevaFoto.png'


const WhatsappButton = () => {
  return (
    <div>
       <FloatingWhatsApp
           accountName="Alberto Romero"
           phoneNumber="+584142360529"
           avatar={fotoPersonal}
           statusMessage="Normalmente responde en 15 min."
           chatMessage={`Hola! 🤝 ${"\n"}Comenzamos a trabajar??`}
           placeholder="Escribe un mensaje aquí"
           allowClickAway="true"
           chatboxHeight={278}
           
          
           
 />
           
    </div>
  );
};

export default WhatsappButton;