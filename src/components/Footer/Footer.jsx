import React from 'react';
import phone from'../../assets/img/phone 3.svg'
import mail from'../../assets/img/mail 4.svg'


const Footer = () => {
    return (
        <footer>
            <section id="contacto" className="contact">
                <h2 className="section-title subtitle">Contacto</h2>
                <div className="contac-container">
                    <article className="contac-method">

                        <div className="footer-icon">
                            <a href="tel:+584142360529">
                            <span class="icon">
                                <i class="fa-solid fa-phone"></i>
                                </span>
                                
                            </a>
                        </div>
                            <p className="phone_text parrafo1">Número Celular</p>
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
                <p className="parrafo_amor">Hecho con <strong className="love">&#x2764;</strong> en Venezuela</p>
            </section>
        </footer>
    );
};

export default Footer;