import { useTranslation } from 'react-i18next'
import ClimaApp from '../../../assets/img/ClimaApp.jpg'
import { AnimationOnScroll } from 'react-animation-on-scroll'

const AppClima = () => {
  const [t] = useTranslation('global')

  return (
        <div className="column is-4-desktop is-4-widescreen is-half-tablet">
        <AnimationOnScroll animateIn="animate__zoomIn">
            <div className="card rgb">
                <header className="card-header">
                    <p className="card-header-title">
                        <span>APP del Clima </span>

                    </p>
                </header>
                <div onClick={() => window.open('https://serene-ganache-fdcfe0.netlify.app/', '_blank')}
                    className='p-4 is-clickable'>
                    <figure className="c4-izmir c4-border-ccc-2 c4-image-zoom-out c4-gradient-top ">

                        <img className='bg_portafolio' src={ClimaApp} alt="App Clima" />
                        <figcaption className='c4-layout-top-left'>
                            <div className="c4-reveal-left c4-delay-200">
                                <p className='text_portafolio'> {t('cliamateApp')}</p>
                            </div>

                            <div className='icon_container'>
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
                    <a href="https://serene-ganache-fdcfe0.netlify.app/" target="_blank" className="card-footer-item" rel="noreferrer"><i className="fas fa-search" aria-hidden="true"></i>Preview</a>
                    <a href="https://github.com/aromero7764/climateApp" target="_blank" className="card-footer-item" rel="noreferrer"><i className="fas fa-code" aria-hidden="true"></i>Source Code</a>
                </footer>
            </div>
        </AnimationOnScroll>
    </div>
  )
}

export default AppClima
