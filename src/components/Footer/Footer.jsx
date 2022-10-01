import React from 'react';
import phone from'../../assets/img/phone 3.svg'
import mail from'../../assets/img/mail 4.svg'
import { useTranslation } from 'react-i18next';



const Footer = () => {
    
    const [t, i18n] = useTranslation("global")
    
    return (
        <footer>
            <section id="contacto" className="contact">
                <h2 className="section-title subtitle">{t ("Contacto")}</h2>
                <div className="contac-container">
                    <article className="contac-method">

                        <div className="footer-icon">
                            <a href="tel:+584142360529">
                            <span class="icon">
                                <i class="fa-solid fa-phone"></i>
                                </span>
                                
                            </a>
                        </div>
                            <p className="phone_text parrafo1">{t ("PhoneNumber")}</p>
                            <a className="phone_number parafo parrafo2" href="tel:+584142360529">+58 414 236 0529</a>

                    </article>
                    <article className="contac-method">
                        <div className="footer-icon">
                            <a className="phone_number" href="mailto:aromero7764@gmail.com">
                                <span class="icon">
                                <i class="fa-solid fa-envelope-circle-check"></i>
                                </span>
                                </a>
                        </div>
                        <p className="phone_email parrafo1">Email</p>
                        <a className="phone_number parrafo2" href="mailto:aromero7764@gmail.com">aromero7764@gmail.com</a>
                    </article>
                </div>
                <p className="parrafo_amor">{t ("Madewhid")} <strong className="love">&#x2764;</strong> {t ("in")} Venezuela</p>
            </section>
        </footer>
    );
};

export default Footer;