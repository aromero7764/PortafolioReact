import React from 'react';
import {useTranslation} from "react-i18next"


const AboutMe = () => {
    
    const [t, i18n] = useTranslation("global")

    return (
        <section id="about" className="section_about-me subtitle mainsection animate__animated animate__fadeInUp">
            <h2 className="section-title subtitle">{t ("AboutMe")}</h2>
            <p className="section_about-me__parrafo normal">{t ("TxtAboutMe")}</p>
        </section>
    );
};

export default AboutMe;