import React from 'react';
import { useTranslation} from "react-i18next"
import './AboutMe.css'

const NewAboutMe = () => {
    const [t, i18n] = useTranslation("global")
    return (
        /* <!-- About --> */
        <section class="section" id="about">
            {/* <!-- Title --> */}
            <div class="section-heading">
                <h3 class="title is-2">{t ("AboutMe")}</h3>
                {/* <h4 class="subtitle is-5">Jack of all trades, master of "some"</h4> */}
                <div class="container">
                    <p>{t ("TxtAboutMe")} </p>
                </div>
            </div>

            <div class="columns has-same-height is-gapless">
            
                <div class="column">
                    {/*   <!-- Profile picture --> */}
                    <div class="card">
                        <div class="card-image">
                            <figure class="image is-4by3">
                                <img src="https://www.magictouchnet.com/wp-content/uploads/2019/01/Web-Applications.jpg" alt="Placeholder image" />
                            </figure>
                        </div>
                    </div>
                </div>
                <div class="column">
                    {/*    <!-- Skills --> */}
                    <div class="card">
                        <div class="card-content skills-content">
                            <h3 class="title is-4">Skills</h3>
                            <div class="content">

                                <article class="media">
                                    <div class="media-content">
                                        <div class="content">
                                            <p>
                                                <strong>JavaScript:</strong>
                                                <br />
                                                <progress class="progress is-primary" value="90" max="100"></progress>
                                            </p>
                                        </div>
                                    </div>
                                </article>

                                <article class="media">
                                    <div class="media-content">
                                        <div class="content">
                                            <p>
                                                <strong>React js:</strong>
                                                <br />
                                                <progress class="progress is-primary" value="90" max="100"></progress>
                                            </p>
                                        </div>
                                    </div>
                                </article>
                                <article class="media">
                                    <div class="media-content">
                                        <div class="content">
                                            <p>
                                                <strong>Svelte:</strong>
                                                <br />
                                                <progress class="progress is-primary" value="40" max="100"></progress>
                                            </p>
                                        </div>
                                    </div>
                                </article>

                                <article class="media">
                                    <div class="media-content">
                                        <div class="content">
                                            <p>
                                                <strong>Node.js:</strong>
                                                <br />
                                                <progress class="progress is-primary" value="75" max="100"></progress>
                                            </p>
                                        </div>
                                    </div>
                                </article>

                                <article class="media">
                                    <div class="media-content">
                                        <div class="content">
                                            <p>
                                                <strong>HTML5/CSS3</strong>
                                                <br />
                                                <progress class="progress is-primary" value="95" max="100"></progress>
                                            </p>
                                        </div>
                                    </div>
                                </article>

                                <article class="media">
                                    <div class="media-content">
                                        <div class="content">
                                            <p>
                                                <strong>SQL:</strong>
                                                <br />
                                                <progress class="progress is-primary" value="66" max="100"></progress>
                                            </p>
                                        </div>
                                    </div>
                                </article>

                                <article class="media">
                                    <div class="media-content">
                                        <div class="content">
                                            <p>
                                                <strong>PHP:</strong>
                                                <br />
                                                <progress class="progress is-primary" value="45" max="100"></progress>
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