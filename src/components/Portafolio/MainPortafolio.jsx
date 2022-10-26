import './portafolio.css'
import { useTranslation } from 'react-i18next'
import Pokedex from './Pokedesx/Pokedex'
import SocialMediaDashboard from './SocialMediaDashboard/SocialMediaDashboard'
import AdminDashboard from './AdminDashboard/AdminDashboard'
import QuotesGenerator from './QuotesGenerator/QuotesGenerator'
import RickAndMorty from './RickAndMorty/RickAndMorty'
import PostItApp from './PostItApp/PostItApp'
import AppClima from './AppClima/AppClima'
import SunShineLandingPage from './SunShineLanding/SunShineLandingPage'
import EcommerceSvelte from './EcommerceSvelte/EcommerceSvelte'

const MainPortafolio = () => {
  const [t] = useTranslation('global')

  return (

      <section id="portafolio" className="portafolio mainsection">

        <h2 className="section-title subtitle">{t('Portafolio')}</h2>
        <div className="container content-wrapper">
          <div className="columns is-multiline">
            <EcommerceSvelte />
            <Pokedex />
            <SocialMediaDashboard />
            <AdminDashboard />
          <QuotesGenerator />
            <RickAndMorty />
            <PostItApp />
            <AppClima />
            <SunShineLandingPage />
          </div>
        </div>
      </section>
  )
}

export default MainPortafolio
