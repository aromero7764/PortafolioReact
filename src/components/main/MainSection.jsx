
import fotoPersonal from '../../assets/img/nuevaFoto.png'
import { useCallback } from "react";
import imgLinkedin from '../../assets/img/cib_linkedin-in.svg'
import imgGitHub from '../../assets/img/iconmonstr-github-1.svg'
import imgCv from '../../assets/img/curriculum-vitae.png'
import imgEmail from '../../assets/img/mail 3.svg'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-scroll'
import './MainSection.css'
import Particles from "react-tsparticles";
 import { loadFull } from "tsparticles"; 

const MainSection = () => {
const [t] = useTranslation('global')
  

  const particlesInit = useCallback(async engine => {    
    await loadFull(engine);
}, []);

const particlesLoaded = useCallback(async container => {
    await console.log("Loaded");
}, []); 
  return (
  
        <div className='hero-body is-align-items-start is-align-self-center p-0' id="home">
            
            <section className="principal-section animate__animated animate__fadeInRight">
            <Particles id="tsparticles"
           init={particlesInit} 
             loaded={particlesLoaded} 
             options={ {
                "fullScreen": {
                    "enable": true,
                    "zIndex": -1
                },
                fpsLimit: 60,
  particles: {
    number: {
      value: 0,
      density: {
        enable: true,
        value_area: 800
      }
    },
    color: {
      value: "#ffff00",
      animation: {
        enable: true,
        speed: -70,
        sync: true
      }
    },
    shape: {
      type: "circle"
    },
    opacity: {
      value: 1,
      random: false,
      animation: {
        enable: true,
        speed: 0.5,
        minimumValue: 0,
        sync: false
      }
    },
    size: {
      value: 8,
      random: { enable: true, minimumValue: 4 },
      animation: {
        enable: false,
        speed: 20,
        minimumValue: 4,
        sync: false
      }
    },
    life: {
      duration: {
        value: 4
      },
      count: 1
    },
    move: {
      angle: {
        value: 45,
        offset: 0
      },
      enable: true,
      gravity: {
        enable: true,
        acceleration: -0.5
      },
      speed: .2,
      direction: "top",
      random: false,
      straight: false,
      size: true,
      outModes: {
        default: "destroy",
        bottom: "none"
      },
      attract: {
        enable: false,
        distance: 300,
        rotate: {
          x: 600,
          y: 1200
        }
      }
    }
  },
  interactivity: {
    detectsOn: "canvas",
    events: {
      resize: true
    }
  },
  detectRetina: true,
  emitters: {
    direction: "top",
    rate: {
      quantity: 1,
      delay: 0.1
    },
    size: {
      width: 100,
      height: 10
    },
    position: {
      x: 50,
      y: 100
    }
  }
                
            }
             
             
             }/>

                <h1 className="title">Full Stack Web <br/><span className="development">Developer</span></h1>
                <h3 className="introduction">React - Svelte - JS - PHP - HTML5/CSS3</h3>
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
                        href="https://www.linkedin.com/in/7omero/" target="_blank" rel="noreferrer">
                            <img className="button-icon" src={imgLinkedin} alt="enlace-linkedin"/></a>
                    </div>
                    <div className="conteneder-icon">
                        <a className="nav-link"
                        href="https://github.com/aromero7764" target="_blank" rel="noreferrer">
                            <img className="button-icon" src={imgGitHub} alt="enlace-github"/></a>
                    </div>
                    <div className="conteneder-icon">
                        <a className="nav-link"
                        href="https://drive.google.com/file/d/1TN91qkXwL-RsgA-gOnX1iB3xSJLUk-9_/view?usp=sharing" target="_blank" rel="noreferrer">
                            <img className="button-icon" src={imgCv} alt="enlace-cv"/></a>
                    </div>
                </div>

                <div className="contac-button">

                <Link className="contac-button__item rgb buttonA" to="contact" spy={true} smooth={true} offset={-40} duration={250}>
                        <img className="contact-mail_icon"
                        src={imgEmail} alt="img-email"/>{t('Contactame')}

                   </Link>

                </div>
            </section>
        </div>
      
  )
}

export default MainSection
