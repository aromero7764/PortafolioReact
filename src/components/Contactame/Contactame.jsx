import { useTranslation } from 'react-i18next'
import { useForm, ValidationError } from '@formspree/react';
import './contactame.css'


const Contactame = () => {

  const [state, handleSubmit] = useForm("xlevloey")

  if (state.succeeded) {
    return <p>Thanks you!</p>;
}



  const submit = (data) => {

    console.log(data)
}



  const [t] = useTranslation('global')
  return (
        <section className="section contactSection" id="contact">
        <div className="container">
          <div className="section-heading">
          <h2 className="section-title subtitle">{t('Contacto')}</h2>
            <h4 className="subtitle is-5">Get in touch</h4>
          </div>
          <br/>

          <div className="columns">
            <div className="column is-6 is-offset-3">
              <div className="box">
              <form onSubmit={handleSubmit}>
                <div className="field">
                  <label htmlFor="name" className="label">{t ("nombre")}</label>
                  <div className="control">
                    <input className="input"
                     id="name"
                     type="text" 
                     name="name"
                    placeholder="Write your name"
                  />
                  <ValidationError
                    prefix="name"
                    field="name"
                    errors={state.errors}
                  />
                  </div>
                </div>

                <div className="field">
                  <label htmlFor="email" className="label">Email</label>
                  <div className="control has-icons-left">
                    <input  className="input" type="email" placeholder="Enter your email" 
                      id="email"
                      name="email" required/>
                  <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                  />
                    <span className="icon is-small is-left">
                      <i className="fas fa-envelope"></i>
                    </span>
                  </div>
                </div>

                <div className="field">
                  <label htmlFor="message" className="label">{t ("mensaje")}</label>
                  <div className="control">
                    <textarea className="textarea" placeholder={t ("mensaje")} style={{ height: '128px' }}
                    id="message"
                    name="message"></textarea>
                  <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                      />
                  </div>
                </div>

                <div className="field is-grouped has-text-centered is-justify-content-center">
                  <div className="control contac-button2">
                    <button type="submit" disabled={state.submitting} className="contac-button__item rgb"><span className="icon">
                        <i className="fas fa-envelope"></i>
                      </span>
                      <span>{t ("send")}</span></button>
                  </div>
                </div>
                </form>
              </div>
            </div>
          </div>

        </div>
      </section>
  )
}

export default Contactame
