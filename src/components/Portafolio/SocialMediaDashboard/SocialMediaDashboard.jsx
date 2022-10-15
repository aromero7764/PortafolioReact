import { useTranslation } from 'react-i18next'
import SocialMediaDashboardIMG from '../../../assets/img/SocialMediaDashboard.jpg'
import { AnimationOnScroll } from 'react-animation-on-scroll'

const SocialMediaDashboard = () => {
  const [t] = useTranslation('global')

  return (
        <div className="column is-4-desktop is-3-widescreen is-half-tablet">

        <AnimationOnScroll animateIn="animate__zoomIn">
        <div className="card rgb">
            <header className="card-header">
                <p className="card-header-title">
                    <span>Social Media Dashboard </span>

                </p>
            </header>
            <div onClick={() => window.open('https://velvety-rolypoly-91df31.netlify.app/', '_blank')}
                className='p-4 is-clickable'>
                <figure className="c4-izmir c4-border-ccc-2 c4-image-zoom-out c4-gradient-top ">

                    <img src={SocialMediaDashboardIMG} alt="Social Media Imgane" />
                    <figcaption className='c4-layout-top-left'>
                        <div className="c4-reveal-left c4-delay-200">
                            <p className='is-size-7'>{t('SocialMedia')}</p>
                        </div>
                        <br />
                        <div className='is-flex'>
                            <span className="icon is-small">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg" alt="" />
                            </span>
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
                <a href="https://velvety-rolypoly-91df31.netlify.app/" target="_blank" className="card-footer-item" rel="noreferrer"><i className="fas fa-search" aria-hidden="true"></i>Preview</a>
                <a href="https://github.com/aromero7764/SMDashboard" target="_blank" className="card-footer-item" rel="noreferrer"><i className="fas fa-code" aria-hidden="true"></i>Source Code</a>
            </footer>
        </div>
        </AnimationOnScroll>
    </div>
  )
}

export default SocialMediaDashboard
