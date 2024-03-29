
import { Link } from 'react-scroll'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import enFlag from '../../assets/img/united-states.png'
import esFlag from '../../assets/img/spain.png'
import './NavBarUser.css'
import { useState } from 'react'
import TogleDarkMode from './TogleDarkMode'

const NavBarUser = () => {
  const lenguaje = useSelector((state) => state.lenguajes)
  const [t, i18n] = useTranslation('global')
  const [isActive, setIsActive] = useState(false)
  const [toggle, setCToggle] = useState(false)

  const changeIsActive = () => {
    setIsActive(!isActive)
  }

 

  const changeLenguaje = (lenguajeSelect) => {
    i18n.changeLanguage(lenguajeSelect)
    changeIsActive()
  }

  return (
        <nav className={`navbar nav ${(toggle) ? 'is-dark' : ''}
        animate__animated animate__slideInLeft`}>
            <div onClick={() => changeIsActive()} className="navbar-brand">

                <a role="button" className={`navbar-burger ${(isActive) && 'is-active'}`}>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>
            <div className={`navbar-menu ${(isActive) && 'is-active'}`}>
                <div className="navbar-end">
               {/*  <Link onClick={() => changeIsActive()} className="navbar-item" to="home" spy={true} smooth={true} offset={-40} duration={250}>
                    {t('Incio')}
                </Link> */}

                <Link onClick={() => changeIsActive()} className="navbar-item" to="skills" spy={true} smooth={true} offset={10} duration={100}>
                    {t('MySkills')}
                    </Link>

                    <Link onClick={() => changeIsActive()} className="navbar-item" to="portafolio" spy={true} smooth={true} offset={-20} duration={1}>
                    {t('Portafolio')}
                    </Link>

                    <Link onClick={() => changeIsActive()} className="navbar-item" to="contact" spy={true} smooth={true} offset={-40} duration={250}>
                    {t('Contacto')}
                    </Link>

                    <div className="buttons is-small">
                            <a onClick={() => changeLenguaje(lenguaje)} className="button is-small is-light">
                            <img src={esFlag} alt="USaflags" />
                            </a>
                            <a onClick={() => changeLenguaje('en')} className="button is-small is-light">
                                <img src={enFlag} alt="EspFlag" />
                            </a>
                        </div>
                     
                </div>
               {  <TogleDarkMode />  }
            </div>
            
    </nav>
  )
}

export default NavBarUser
