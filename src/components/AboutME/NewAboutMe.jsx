import React from 'react';
import { useTranslation} from "react-i18next"
import './AboutMe.css'

const NewAboutMe = () => {
    const [t, i18n] = useTranslation("global")
    return (
        /* <!-- About --> */
        <section className="section has-background-light" id="about">
            {/* <!-- Title --> */}
            <div className="section-heading px-4">
                <h3 className="title is-2">{t ("AboutMe")}</h3>
                {/* <h4 className="subtitle is-5">Jack of all trades, master of "some"</h4> */}
                <div className="container">
                    <p>{t ("TxtAboutMe")} </p>
                </div>
            </div>

            <div className="columns has-same-height is-gapless">
            
                <div className="column">
                    {/*   <!-- Profile picture --> */}
                    <div className="card">
                        <div className="card-image">
                            <figure className="image is-4by3">
                                <img src="https://www.magictouchnet.com/wp-content/uploads/2019/01/Web-Applications.jpg" alt="Placeholder image" />
                            </figure>
                        </div>
                    </div>
                </div>
                <div className="column">
                    {/*    <!-- Skills --> */}
                    <div className="card">
                        <div className="card-content skills-content">
                            <h3 className="title is-4">Skills</h3>
                            <div className="content">

                                <article className="media">
                                    <div className="media-content">
                                        <div className="content">
                                            <p>
                                                <strong>JavaScript:</strong>
                                                <br />
                                                <progress className="progress is-primary" value="90" max="100"></progress>
                                            </p>
                                        </div>
                                    </div>
                                </article>

                                <article className="media">
                                    <div className="media-content">
                                        <div className="content">
                                            <p>
                                                <strong>React js:</strong>
                                                <br />
                                                <progress className="progress is-primary" value="90" max="100"></progress>
                                            </p>
                                        </div>
                                    </div>
                                </article>
                                <article className="media">
                                    <div className="media-content">
                                        <div className="content">
                                            <p>
                                                <strong>Svelte:</strong>
                                                <br />
                                                <progress className="progress is-primary" value="40" max="100"></progress>
                                            </p>
                                        </div>
                                    </div>
                                </article>

                                <article className="media">
                                    <div className="media-content">
                                        <div className="content">
                                            <p>
                                                <strong>Node.js:</strong>
                                                <br />
                                                <progress className="progress is-primary" value="75" max="100"></progress>
                                            </p>
                                        </div>
                                    </div>
                                </article>

                                <article className="media">
                                    <div className="media-content">
                                        <div className="content">
                                            <p>
                                                <strong>HTML5/CSS3</strong>
                                                <br />
                                                <progress className="progress is-primary" value="95" max="100"></progress>
                                            </p>
                                        </div>
                                    </div>
                                </article>

                                <article className="media">
                                    <div className="media-content">
                                        <div className="content">
                                            <p>
                                                <strong>SQL:</strong>
                                                <br />
                                                <progress className="progress is-primary" value="66" max="100"></progress>
                                            </p>
                                        </div>
                                    </div>
                                </article>

                                <article className="media">
                                    <div className="media-content">
                                        <div className="content">
                                            <p>
                                                <strong>PHP:</strong>
                                                <br />
                                                <progress className="progress is-primary" value="45" max="100"></progress>
                                            </p>
                                        </div>
                                    </div>
                                </article>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default NewAboutMe;