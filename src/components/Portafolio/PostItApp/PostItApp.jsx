import { useTranslation } from 'react-i18next'
import Posit from '../../../assets/img/Posit.jpg'
import { AnimationOnScroll } from 'react-animation-on-scroll'

const PostItApp = () => {
  const [t] = useTranslation('global')

  return (
        <div className="column is-4-desktop is-3-widescreen is-half-tablet">

<AnimationOnScroll animateIn="animate__fadeInUpBig">
        <div className="card rgb">
            <header className="card-header">
                <p className="card-header-title">
                    <span>Post It CRUD: </span>

                </p>
            </header>
            <div onClick={() => window.open('https://profound-begonia-f76288.netlify.app/', '_blank')}
                className='p-4 is-clickable'>
                <figure className="c4-izmir c4-border-ccc-2 c4-image-zoom-out c4-gradient-top ">

                    <img src={Posit} alt="Social Media Imgane" />
                    <figcaption className='c4-layout-top-left'>
                        <div className="c4-reveal-left c4-delay-200">
                            <p className='is-size-7'> {t('postIt')}</p>
                        </div>
                      
                        <div className='is-flex'>
                            <span className="icon is-small">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg" alt="JsLogo" />
                            </span>
                            <span className="icon is-small mx-1">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg" alt="HTML5Logo" />
                            </span>
                            <span className="icon is-small mx-1">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/6/62/CSS3_logo.svg" alt="Css3Logo" />
                            </span>
                            <span className="icon is-small mx-1">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/6/6e/Svelte_logo_by_gengns.svg" alt="SvelteLogo" />
                            </span>
                        </div>
                    </figcaption>

                </figure>

            </div>

            <footer className="card-footer">
                <a href="https://profound-begonia-f76288.netlify.app/" target="_blank" className="card-footer-item" rel="noreferrer"><i className="fas fa-search" aria-hidden="true"></i>Preview</a>
                <a href="https://github.com/aromero7764/PostIt" target="_blank" className="card-footer-item" rel="noreferrer"><i className="fas fa-code" aria-hidden="true"></i>Source Code</a>
            </footer>
        </div>
        </AnimationOnScroll>

    </div>
  )
}

export default PostItApp
