import React from 'react'
import { useTranslation } from 'react-i18next'
import ecommerceSvelteImg from '../../../assets/img/ecommerce.jpg'
import { AnimationOnScroll } from 'react-animation-on-scroll'

const Pokedex = () => {
  const [t] = useTranslation('global')

  return (
        <div className="column is-4-desktop is-4-widescreen is-half-tablet">
            <AnimationOnScroll animateIn="animate__zoomIn" /* animateOut='animate__fadeOutDown' */>
            <div className="card rgb">
                <header className="card-header">
                    <p className="card-header-title">
                        <span>E-commerce </span>

                    </p>
                </header>
                <div onClick={() => window.open('https://classy-kheer-521585.netlify.app/', '_blank')}
                    className='p-4 is-clickable'>
                    <figure className="c4-izmir c4-border-ccc-2 c4-image-zoom-out c4-gradient-top ">

                        <img className='bg_portafolio' src={ecommerceSvelteImg} alt="ecoomerce" />
                        <figcaption className='c4-layout-top-left'>
                            <div className="c4-reveal-left c4-delay-200">
                                <p className='text_portafolio'>{t('ecommerceSvelteText')}</p>
                            </div>
                           
                            <div className='icon_container'>
                                <span className="icon is-small">
                                    <img className='icon_img' src="https://bulma.io/assets/Bulma%20Icon.svg" alt="" />
                                </span>
                                <span className="icon is-small mx-1">
                                    <img className='icon_img' src="https://upload.wikimedia.org/wikipedia/commons/1/1b/Svelte_Logo.svg" alt="" />
                                </span>
                                <span className="icon is-small mx-1">
                                    <img className='icon_img' src="https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg" alt="JsLogo" />
                                </span>
                                <span className="icon is-small mx-1">
                                    <img className='icon_img' src="https://upload.wikimedia.org/wikipedia/commons/d/d1/Axios_%28computer_library%29_logo.svg" alt="axioslogo" />
                                </span>
                            </div>
                        </figcaption>

                    </figure>

                </div>

                <footer className="card-footer">
                    <a href="https://classy-kheer-521585.netlify.app/" target="_blank" className="card-footer-item" rel="noreferrer"><i className="fas fa-search" aria-hidden="true"></i>Preview</a>
                    <a href="https://github.com/aromero7764/SvelteEcommerce" target="_blank" className="card-footer-item" rel="noreferrer"><i className="fas fa-code" aria-hidden="true"></i>Source Code</a>
                </footer>
            </div>
            </AnimationOnScroll>

        </div>
  )
}

export default Pokedex
