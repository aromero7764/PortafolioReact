import { useTranslation } from 'react-i18next'
import Sunshine from '../../../assets/img/sunshine.jpg'
import { AnimationOnScroll } from 'react-animation-on-scroll'

const SunShineLandingPage = () => {
  const [t] = useTranslation('global')

  return (
            <div className="column is-4-desktop is-3-widescreen is-half-tablet">
    <AnimationOnScroll animateIn="animate__fadeInBottomRight">
            <div className="card rgb">
                <header className="card-header">
                    <p className="card-header-title">
                        <span>Sunshine Landing Page</span>

                    </p>
                </header>
                <div onClick={() => window.open('https://roaring-jelly-81eb51.netlify.app/', '_blank')}
                    className='p-4 is-clickable'>
                    <figure className="c4-izmir c4-border-ccc-2 c4-image-zoom-out c4-gradient-top ">

                        <img src={Sunshine} alt="Social Media Imgane" />
                        <figcaption className='c4-layout-top-left'>
                            <div className="c4-reveal-left c4-delay-200">
                                <p className='is-size-7'> {t('sunshinePage')}</p>
                            </div>
                      
                            <div className='is-flex'>

                                <span className="icon is-small mx-1">
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg" alt="" />
                                </span>
                                <span className="icon is-small mx-1">
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/6/62/CSS3_logo.svg" alt="" />
                                </span>
                            </div>
                        </figcaption>

                    </figure>

                </div>

                <footer className="card-footer">
                    <a href="https://roaring-jelly-81eb51.netlify.app/" target="_blank" className="card-footer-item" rel="noreferrer"><i className="fas fa-search" aria-hidden="true"></i>Preview</a>
                    <a href="https://github.com/aromero7764/landingPage" target="_blank" className="card-footer-item" rel="noreferrer"><i className="fas fa-code" aria-hidden="true"></i>Source Code</a>
                </footer>
            </div>
            </AnimationOnScroll>
        </div>
  )
}

export default SunShineLandingPage
