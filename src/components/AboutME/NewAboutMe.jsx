import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next'
import { TypeAnimation } from 'react-type-animation';
import './AboutMe.css'
import { AnimationOnScroll } from 'react-animation-on-scroll'

const NewAboutMe = () => {
  const [t] = useTranslation('global')


  return (
        /* <!-- About --> */
        <section id="skills" className="section skills" >
            {/* <!-- Title --> */}

            <div className="columns has-same-height is-gapless">

         
                <div className="column">
                    {/*   <!-- Profile picture --> */}
                    <AnimationOnScroll animateIn="animate__fadeInLeft">
                    <div className="card">
                        <div className="card-content">
                            <h3 className="title is-2">{t('AboutMe')}</h3>
                            <div className="container has-text-centered">
                                <p> {t('TxtAboutMe')}

                                </p>
                            </div>

                        </div>
                    </div>
                    </AnimationOnScroll>
                </div>
                
               
                <div className="column">
                    {/*    <!-- Skills --> */}
                    <AnimationOnScroll animateIn="animate__fadeInRight">
                    <div className="card skills-content cardSkills">
                        <div className="card-content">
                            <h3 className="title is-2 mb-0">Skills</h3>
                            <div className="content codecontent">

                            <pre className='p-0' style={{ whiteSpace: 'pre-wrap', background: 'var(--white)' }}>
                                <code>{'\n'}
                                <span style={{ color: 'rgb(171, 75, 184)' }}>class</span>
                                <span style={{ color: 'rgb(211, 61, 35)' }}> WebDeveloper</span> {'{'}{'\n'}{'  '}
                                <span style={{ color: 'rgb(171, 75, 184)' }}>constructor </span>
                                (
                                    <span>firstName</span>, <span>lastName</span>, <span>skills</span>) {'{'}{'\n'}{'    '}
                                    <span style={{ color: 'rgb(211, 61, 35)' }}>this</span>.<span>firstName</span> = <span style={{ color: 'rgb(211, 61, 35)' }}>this</span>.<span>firstName</span>;{'\n'}{'    '}<span style={{ color: 'rgb(211, 61, 35)' }}>this</span>.<span>lastName</span> = <span style={{ color: 'rgb(211, 61, 35)' }}>this</span>.<span>lastName</span>;{'\n'}{'    '}<span style={{ color: 'rgb(211, 61, 35)' }}>this</span>.<span>skills</span> = <span style={{ color: 'rgb(211, 61, 35)' }}>this</span>.<span>skills</span>;{'\n'}{'  '}{'}'}{'\n'}{'}'}{'\n'}{'\n'}<span style={{ color: 'rgb(171, 75, 184)' }}>const</span> <span style={{ color: 'rgb(70, 146, 136)' }}>Alberto</span> = <span style={{ color: 'rgb(171, 75, 184)' }}>new</span> <span style={{ color: 'rgb(211, 61, 35)' }}>WebDeveloper </span>({'\n'}{'  '}<span style={{ color: 'rgb(117, 36, 47)' }}>"Alberto"</span>, {'\n'}{'  '}<span style={{ color: 'rgb(117, 36, 47)' }}>"Romero"</span>, {'\n'}{'  '}{'{'} {'\n'}{'      '}<span>frontEnd</span>: [<span style={{ color: 'rgb(117, 36, 47)' }}>"HTML"</span>, <span style={{ color: 'rgb(117, 36, 47)' }}>"CSS"</span>, <span style={{ color: 'rgb(117, 36, 47)' }}>"JS"</span>, <span style={{ color: 'rgb(117, 36, 47)' }}>"Svelte"</span>, <span style={{ color: 'rgb(117, 36, 47)' }}>"React"</span>], {'\n'}{'      '}<span>backEnd</span>: [<span style={{ color: 'rgb(117, 36, 47)' }}>"PHP"</span>, <span style={{ color: 'rgb(117, 36, 47)' }}>"SQL"</span>, <span style={{ color: 'rgb(117, 36, 47)' }}>"MySql"</span>]{'\n'}{'  '}{'}'},{'\n'}){'\n'}</code>{'\n'}</pre>
                            </div>
                        </div>
                    </div>
                    </AnimationOnScroll>
                </div>
              
            </div>
        </section>

  )
}

export default NewAboutMe
