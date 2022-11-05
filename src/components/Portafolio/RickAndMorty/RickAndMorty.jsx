import rickandmortyimg from '../../../assets/img/rickandmorty.jpg'
import { useTranslation } from 'react-i18next'
import { AnimationOnScroll } from 'react-animation-on-scroll'

const RickAndMorty = () => {
  const [t] = useTranslation('global')

  return (
            <div className="column is-4-desktop is-4-widescreen is-half-tablet">
     <AnimationOnScroll animateIn="animate__zoomIn" animateOut='animate__fadeOutDown'>
            <div className="card rgb">
                <header className="card-header">
                    <p className="card-header-title">
                        <span>Rick and Morty App </span>

                    </p>
                </header>
                <div onClick={() => window.open('https://symphonious-lolly-364e85.netlify.app/', '_blank')}
                    className='p-4 is-clickable'>
                    <figure className="c4-izmir c4-border-ccc-2 c4-image-zoom-out c4-gradient-top ">

                        <img className='bg_portafolio' src={rickandmortyimg} alt="Social Media Imgane" />
                        <figcaption className='c4-layout-top-left'>
                            <div className="c4-reveal-left c4-delay-200">
                                <p className='text_portafolio'>{t('RickAndMorty')}</p>
                            </div>

                            <div className='icon_container'>
                                <span className="icon is-small">
                                    <img className='icon_img' src="https://bulma.io/assets/Bulma%20Icon.svg" alt="bulma" />
                                </span>
                                <span className="icon is-small mx-1">
                                    <img className='icon_img' src="https://cdn.cdnlogo.com/logos/r/85/react.svg" alt="react" />
                                </span>
                                <span className="icon is-small mx-1">
                                    <img className='icon_img' src="https://upload.wikimedia.org/wikipedia/commons/d/d1/Axios_%28computer_library%29_logo.svg" alt="axioslogo" />
                                </span>

                            </div>
                        </figcaption>

                    </figure>

                </div>

                <footer className="card-footer">
                    <a href="https://symphonious-lolly-364e85.netlify.app/" target="_blank" className="card-footer-item" rel="noreferrer"><i className="fas fa-search" aria-hidden="true"></i>Preview</a>
                    <a href="https://github.com/aromero7764/rickandmortyApi" target="_blank" className="card-footer-item" rel="noreferrer"><i className="fas fa-code" aria-hidden="true"></i>Source Code</a>
                </footer>
            </div>
            </AnimationOnScroll>
        </div>
  )
}

export default RickAndMorty
