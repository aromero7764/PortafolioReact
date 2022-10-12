import React from 'react';
import Pokedex from '../../assets/img/Pokedesx.jpg'
import SocialMediaDashboard from '../../../assets/img/SocialMediaDashboard.jpg'
import adminDashboard from '../../../assets/img/adminDashboard.jpg'
import rickandmorty from '../../../assets/img/rickandmorty.jpg'
import Posit from '../../../assets/img/Posit.jpg'
import ClimaApp from '../../../assets/img/ClimaApp.jpg'
import Sunshine from '../../../assets/img/sunshine.jpg'
import quotes from '../../../assets/img/quotes.jpg'
import {useTranslation} from "react-i18next"




const Portafolio = () => {

    const [t, i18n] = useTranslation("global")

    return (
        <section id="portafolio" className="portafolio mainsection">
            <h2 className="section-title subtitle">{t ("Portafolio")}</h2>

            <div className="portafolio_container ">

                <div className='box has-background'>
                <h3 className="is-size-6"><span className='has-text-weight-bold'>Pokedex: </span><br />
                {t ("Pokedektext")}</h3><br />
                

                <div className="article container">
                    <article className="portafolio_articles rgb">
                        <a href="https://zippy-hotteok-f9f10c.netlify.app/" target="_blank">
                            <img className="imgportafolio rgb"
                            src={Pokedex} alt="portafolio_imagen" data-tilt
                            data-tilt-axis="x"/></a>
                    </article>
                </div>
                </div>

                <div className='box has-background'>
                <h3 className="is-size-6"><span className='has-text-weight-bold'>Social Media Dashboard: </span><br />
                {t ("SocialMedia")}</h3><br />

                <div className="article container">
                    <article className="portafolio_articles rgb">
                        <a href="https://velvety-rolypoly-91df31.netlify.app/" target="_blank">
                            <img className="imgportafolio"
                            src={SocialMediaDashboard} alt="portafolio_imagen" data-tilt
                            data-tilt-axis="x"/></a>
                    </article>
                </div>
                </div>

                <div className='box has-background'>
                <h3 className="is-size-6"><span className='has-text-weight-bold'>Admin DashBoard:</span><br />
                {t ("AdminDashBoard")}</h3><br />

                <div className="article container">
                    <article className="portafolio_articles rgb">
                        <a href="https://fantastic-sherbet-d1284c.netlify.app/" target="_blank">
                            <img className="imgportafolio"
                            src={adminDashboard} alt="portafolio_imagen" data-tilt data-tilt-axis="x"/></a>
                    </article>
                </div>
                </div>

                <div className='box has-background'>
                <h3 className="is-size-6"><span className='has-text-weight-bold'>Quotes Generator:</span><br />
               {t ("QuotesGeneratos")}</h3><br />
                <div className="article container">
                    <article className="portafolio_articles rgb">
                        <a href="https://remarkable-tartufo-6df274.netlify.app/" target="_blank">
                            <img className="imgportafolio"
                            src={quotes} alt="portafolio_imagen" data-tilt data-tilt-axis="x"/></a>
                    </article>
                </div>
                </div>

                <div className='box has-background'>
                <h3 className="is-size-6"><span className='has-text-weight-bold'>Rick and Morty App:</span><br />
               {t ("RickAndMorty")}</h3><br />

                <div className="article container">
                    <article className="portafolio_articles rgb">
                        <a href="https://symphonious-lolly-364e85.netlify.app/" target="_blank">
                            <img className="imgportafolio"
                            src={rickandmorty} alt="portafolio_imagen" data-tilt data-tilt-axis="x"/></a>
                    </article>
                </div>
            </div>
            <div className='box has-background'>
                <h3 className="is-size-6"><span className='has-text-weight-bold'>CRUD:</span><br />
                {t ("postIt")}</h3><br />
                <div className="article container">
                    <article className="portafolio_articles rgb">
                        <a href="https://profound-begonia-f76288.netlify.app/" target="_blank">
                            <img className="imgportafolio"
                            src={Posit} alt="portafolio_imagen" data-tilt data-tilt-axis="x"/></a>
                    </article>
                </div>
            </div>
            <div className='box has-background'>
                <h3 className="is-size-6"><span className='has-text-weight-bold'>APP del Clima:</span><br />
               {t ("cliamateApp")} </h3><br />
                <div className="article container">
                    <article className="portafolio_articles rgb">
                        <a href="https://serene-ganache-fdcfe0.netlify.app/" target="_blank">
                            <img className="imgportafolio"
                            src={ClimaApp} alt="portafolio_imagen" data-tilt data-tilt-axis="x"/></a>
                    </article>
                </div>
                </div>


                <div className='box has-background'>
                <h3 className="is-size-6"><span className='has-text-weight-bold'>Sunshine Landing Page:</span><br />
               {t ("sunshinePage")} </h3><br />
                <div className="article container">
                    <article className="portafolio_articles rgb">
                        <a href="https://roaring-jelly-81eb51.netlify.app/" target="_blank">
                            <img className="imgportafolio"
                            src={Sunshine} alt="portafolio_imagen" data-tilt data-tilt-axis="x"/></a>
                    </article>
                </div>
            </div>



            </div>
        </section>
    );
};

export default Portafolio;