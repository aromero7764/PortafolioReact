import React from 'react';
import {useTranslation} from "react-i18next"
import quotes from '../../../assets/img/quotes.jpg'

const QuotesGenerator = () => {
    const [t, i18n] = useTranslation("global")

    return (
        <div className="column is-4-desktop is-3-widescreen is-half-tablet">

            <div className="card rgb">
                <header className="card-header">
                    <p className="card-header-title">
                        <span>Quotes Generator </span>
                       
                    </p>
                </header>
                <div onClick={() => window.open('https://remarkable-tartufo-6df274.netlify.app/', '_blank')}
                    className='p-4 is-clickable'>
                    <figure className="c4-izmir c4-border-ccc-2 c4-image-zoom-out c4-gradient-top ">

                        <img src={quotes} alt="QuotesImage" />
                        <figcaption className='c4-layout-top-left'>
                            <div className="c4-reveal-left c4-delay-200">
                                <p className='is-size-7'> {t ("QuotesGeneratos")}</p>
                            </div>
                         
                            <div className='is-flex'>
                            <span className="icon is-small">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg" alt="JSLogo" />
                            </span>
                            <span className="icon is-small mx-1">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg" alt="html5" />
                            </span>
                            <span className="icon is-small mx-1">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/6/62/CSS3_logo.svg" alt="LogoCSS3" />
                            </span>
                            <span className="icon is-small mx-1">
                                    <img src="https://cdn.cdnlogo.com/logos/r/85/react.svg" alt="loroReact" />
                                </span>
                        </div>
                        </figcaption>


                    </figure>

                </div>


                <footer className="card-footer">
                    <a href="https://remarkable-tartufo-6df274.netlify.app/" target="_blank" className="card-footer-item"><i className="fas fa-search" aria-hidden="true"></i>Preview</a>
                    <a href="https://github.com/aromero7764/entregable1" target="_blank" className="card-footer-item"><i className="fas fa-code" aria-hidden="true"></i>Source Code</a>
                </footer>
            </div>

        </div>
    );
};

export default QuotesGenerator;