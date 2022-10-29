import { useTranslation } from 'react-i18next'
import './Aboutme.css'
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
                    
                    <div className="card animate__animated animate__fadeInLeft">
                        <div className="card-content">
                            <h3 className="title is-3">{t('AboutMe')}</h3>
                            <div className="container parrafo_skills">
                                <p className=' parrafo_skills'> {t('TxtAboutMe')}

                                </p>
                                <p className=' parrafo_skills'> {t('TxtAboutMe2')} </p>
                                
                            </div>

                        </div>
                    </div>
                  
                </div>

                <div className="column">
                    {/*    <!-- Skills --> */}
                   
                    <div className="card skills-content cardSkills animate__animated animate__fadeInRight" >
                        <div className="card-content">
                            <h3 className="title is-3 mb-0">Skills</h3>
                            <div className="content codecontent">

                            <pre className='p-0' style={{ whiteSpace: 'pre-wrap', background: 'var(--white)' }}>
                                <code>{'\n'}
                                <span style={{ color: 'rgb(171, 75, 184)' }}>class</span>
                                <span style={{ color: 'rgb(211, 61, 35)' }}> WebDeveloper</span> {'{'}{'\n'}{'  '}
                                <span style={{ color: 'rgb(171, 75, 184)' }}>constructor </span>
                                (
                                    <span>firstName</span>, <span>lastName</span>, <span>skills</span>) {'{'}{'\n'}{'    '}
                                    
                                    <span style={{ color: 'rgb(211, 61, 35)' }}>this
                                    </span>.<span>firstName</span> = <span>firstName</span>;{'\n'}{'    '}<span style={{ color: 'rgb(211, 61, 35)' }}>this</span>.<span>lastName</span> = <span>lastName</span>;{'\n'}{'    '}<span style={{ color: 'rgb(211, 61, 35)' }}>this</span>.<span>skills</span> = <span>skills</span>;{'\n'}{'  '}{'}'}{'\n'}{'}'}{'\n'}{'\n'}<span style={{ color: 'rgb(171, 75, 184)' }}>const</span> <span style={{ color: 'rgb(70, 146, 136)' }}>Alberto</span> = <span style={{ color: 'rgb(171, 75, 184)' }}>new</span> <span style={{ color: 'rgb(211, 61, 35)' }}>WebDeveloper </span>({'\n'}{'  '}<span style={{ color: 'rgb(117, 36, 47)' }}>"Alberto"</span>, {'\n'}{'  '}<span style={{ color: 'rgb(117, 36, 47)' }}>"Romero"</span>, {'\n'}{'  '}{'{'} {'\n'}{'      '}<span style={{ textDecorationLine: 'underline' }}>Front-End</span>: [<span style={{ color: 'var(--lightviolet)' }}>"HTML"</span>, <span style={{ color: 'var(--lightviolet)' }}>"CSS"</span>, <span style={{ color: 'var(--lightviolet)' }}>"JS"</span>, <span style={{ color: 'var(--lightviolet)' }}>"Svelte"</span>, <span style={{ color: 'var(--lightviolet)' }}>"React"</span>], {'\n'}{'      '}<span style={{ textDecorationLine: 'underline' }}>Back-End</span>: [<span style={{ color: 'var(--lightviolet)' }}>"NodeJs"</span>, <span style={{ color: 'var(--lightviolet)' }}>"PHP"</span>, <span style={{ color: 'var(--lightviolet)' }}>"Express"</span>, <span style={{ color: 'var(--lightviolet)'}}>"Jest"</span>]{'\n'}{'  '}{'}'},{'\n'}){'\n'}</code>{'\n'}</pre>
                            </div>
                        </div>
                    </div>
                    
                </div>

            </div>
        </section>

  )
}

export default NewAboutMe
