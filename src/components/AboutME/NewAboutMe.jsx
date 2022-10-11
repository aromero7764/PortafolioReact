import React from 'react';

const NewAboutMe = () => {
    return (
        /* <!-- About --> */
        <section class="section" id="about">
            {/* <!-- Title --> */}
            <div class="section-heading">
                <h3 class="title is-2">About Me</h3>
                {/* <h4 class="subtitle is-5">Jack of all trades, master of "some"</h4> */}
                <div class="container">
                    <p>Web developer with more than <strong>4 years</strong> of well-rounded experience with a degree in the
                        field of
                        <strong>Computer Science</strong>, extensive knowledge of modern Web techniques and love for <strong>Coffee</strong>.
                        Looking for an opportunity to work and upgrade, as well as being involved in an organization that
                        believes
                        in gaining a competitive edge and giving back to the community.</p>
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
                                                <strong>Vue.js:</strong>
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
                                                <strong>Databases</strong>
                                                <br />
                                                <progress class="progress is-primary" value="66" max="100"></progress>
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