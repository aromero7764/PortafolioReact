import React from 'react';
import fotoPersonal from '../../assets/img/personal-foto_m.png'
import imgLinkedin from '../../assets/img/cib_linkedin-in.svg'
import imgGitHub from '../../assets/img/iconmonstr-github-1.svg'
import imgCv from '../../assets/img/curriculum-vitae.png'
import imgEmail from '../../assets/img/mail 3.svg'
import {useTranslation} from "react-i18next"
import { Link } from 'react-scroll';
import './MainSection.css'




const MainSection = () => {

    const [t, i18n] = useTranslation("global")


    return (
        <div className='hero-body'>
            <section id="home" className="principal-section animate__animated animate__fadeInRight">
                <h1 className="title">Full Stack Web <br/><span className="development">Developer</span></h1>
                <h3 className="introduction">JavaScript, React, CSS, HTML, PHP, SQL</h3>
                <div className="imagen-principal">
                    <div className="decoration-container">
                        <div className="decoration1 all"></div>
                        <div className="decoration2 all"></div>
                        <div className="decoration3 all"></div>
                        <div className="decoration4 all"></div>
                        <div className="decoration5 all"></div>
                    </div>

                    <img className="imagen-personal" src={fotoPersonal} alt="foto-personal"/>
                </div>
                <div className="main-buttons">
                    <div className="conteneder-icon">
                        <a className="nav-link" 
                        href="https://www.linkedin.com/in/7omero/" target="_blank">
                            <img className="button-icon" src={imgLinkedin} alt="enlace-linkedin"/></a>
                    </div>
                    <div className="conteneder-icon">
                        <a className="nav-link" 
                        href="https://github.com/aromero7764" target="_blank">
                            <img className="button-icon" src={imgGitHub} alt="enlace-github"/></a>
                    </div>
                    <div className="conteneder-icon">
                        <a className="nav-link" 
                        href="https://drive.google.com/file/d/120va5Hb-phEdcblzGy0nLS5JshWA9385/view?usp=sharing" target="_blank">
                            <img className="button-icon" src={imgCv} alt="enlace-cv"/></a>
                    </div>
                </div>
                <div className="contac-button">
                <Link  className="contac-button__item rgb" to="contacto" spy={true} smooth={true} offset={-40} duration={250}>
                        <img className="contact-mail_icon" 
                        src={imgEmail} alt="img-email"/>{t ("Contactame")}
                        
                   </Link>
                </div>
            </section>
        </div>
    );
};

export default MainSection;