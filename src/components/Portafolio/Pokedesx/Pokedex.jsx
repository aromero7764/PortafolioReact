import React from 'react'
import { useTranslation } from 'react-i18next'
import PokedexImg from '../../../assets/img/Pokedesx.jpg'
import { AnimationOnScroll } from 'react-animation-on-scroll'

const Pokedex = () => {
  const [t] = useTranslation('global')

  return (
        <div className="column is-4-desktop is-4-widescreen is-half-tablet">
            <AnimationOnScroll animateIn="animate__zoomIn" animateOut='animate__fadeOutDown'>
            <div className="card rgb">
                <header className="card-header">
                    <p className="card-header-title">
                        <span>Pokedex </span>

                    </p>
                </header>
                <div onClick={() => window.open('https://zippy-hotteok-f9f10c.netlify.app/', '_blank')}
                    className='p-4 is-clickable'>
                    <figure className="c4-izmir c4-border-ccc-2 c4-image-zoom-out c4-gradient-top ">

                        <img src={PokedexImg} alt="PokedexImgane" />
                        <figcaption className='c4-layout-top-left'>
                            <div className="c4-reveal-left c4-delay-200">
                                <p className='text_portafolio'>{t('Pokedektext')}</p>
                            </div>
                           
                            <div className='icon_container'>
                                <span className="icon is-small">
                                    <img className='icon_img' src="https://bulma.io/assets/Bulma%20Icon.svg" alt="" />
                                </span>
                                <span className="icon is-small mx-1">
                                    <img className='icon_img' src="https://cdn.cdnlogo.com/logos/r/85/react.svg" alt="" />
                                </span>
                                <span className="icon is-small mx-1">
                                    <img className='icon_img' src="https://cdn.cdnlogo.com/logos/r/69/redux.svg" alt="" />
                                </span>
                            </div>
                        </figcaption>

                    </figure>

                </div>

                <footer className="card-footer">
                    <a href="https://zippy-hotteok-f9f10c.netlify.app/" target="_blank" className="card-footer-item" rel="noreferrer"><i className="fas fa-search" aria-hidden="true"></i>Preview</a>
                    <a href="https://github.com/aromero7764/Pokedex" target="_blank" className="card-footer-item" rel="noreferrer"><i className="fas fa-code" aria-hidden="true"></i>Source Code</a>
                </footer>
            </div>
            </AnimationOnScroll>

        </div>
  )
}

export default Pokedex
