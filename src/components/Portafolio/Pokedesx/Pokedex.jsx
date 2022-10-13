import React from 'react';
import {useTranslation} from "react-i18next"
import PokedexImg from '../../../assets/img/Pokedesx.jpg'

const Pokedex = () => {

    const [t, i18n] = useTranslation("global")

    return (
        <div className="column is-4-desktop is-3-widescreen is-half-tablet">

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
                                <p className='is-size-7'>{t("Pokedektext")}</p>
                            </div>
                            <br />
                            <div className='is-flex'>
                                <span className="icon is-small">
                                    <img src="https://bulma.io/assets/Bulma%20Icon.svg" alt="" />
                                </span>
                                <span className="icon is-small mx-1">
                                    <img src="https://cdn.cdnlogo.com/logos/r/85/react.svg" alt="" />
                                </span>
                                <span className="icon is-small mx-1">
                                    <img src="https://cdn.cdnlogo.com/logos/r/69/redux.svg" alt="" />
                                </span>
                            </div>
                        </figcaption>


                    </figure>

                </div>


                <footer className="card-footer">
                    <a href="https://zippy-hotteok-f9f10c.netlify.app/" target="_blank" className="card-footer-item"><i className="fas fa-search" aria-hidden="true"></i>Preview</a>
                    <a href="https://github.com/aromero7764/Pokedex" target="_blank" className="card-footer-item"><i className="fas fa-code" aria-hidden="true"></i>Source Code</a>
                </footer>
            </div>

        </div>
    );
};

export default Pokedex;