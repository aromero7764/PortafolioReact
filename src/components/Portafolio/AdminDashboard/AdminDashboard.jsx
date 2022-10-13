import React from 'react';
import {useTranslation} from "react-i18next"
import adminDashboardimg from '../../../assets/img/adminDashboard.jpg'

const AdminDashboard = () => {

    const [t, i18n] = useTranslation("global")

    return (
        <div className="column is-4-desktop is-3-widescreen is-half-tablet">

        <div className="card rgb">
            <header className="card-header">
                <p className="card-header-title">
                    <span>Admin DashBoard </span>
    
                </p>
            </header>
            <div onClick={() => window.open('https://fantastic-sherbet-d1284c.netlify.app/', '_blank')}
                className='p-4 is-clickable'>
                <figure className="c4-izmir c4-border-ccc-2 c4-image-zoom-out c4-gradient-top ">

                    <img src={adminDashboardimg} alt="Social Media Imgane" />
                    <figcaption className='c4-layout-top-left'>
                        <div className="c4-reveal-left c4-delay-200">
                            <p className='is-size-7'>{t ("AdminDashBoard")}</p>
                        </div>
                        
                        <div className='is-flex'>
                            <span className="icon is-small">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg" alt="logoJS" />
                            </span>
                            <span className="icon is-small mx-1">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg" alt="LogoHtml5" />
                            </span>
                            <span className="icon is-small mx-1">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/6/62/CSS3_logo.svg" alt="LogoCSS3" />
                            </span>
                        </div>
                    </figcaption>


                </figure>

            </div>


            <footer className="card-footer">
                <a href="https://fantastic-sherbet-d1284c.netlify.app/" target="_blank" className="card-footer-item"><i className="fas fa-search" aria-hidden="true"></i>Preview</a>
                <a href="https://github.com/aromero7764/usersDashboard" target="_blank" className="card-footer-item"><i className="fas fa-code" aria-hidden="true"></i>Source Code</a>
            </footer>
        </div>

    </div>
    );
};

export default AdminDashboard;