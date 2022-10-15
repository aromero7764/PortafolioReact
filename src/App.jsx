import NavBarUser from './components/NavBar/NavBarUser'
import MainSection from './components/main/MainSection'
import NewAboutMe from './components/AboutME/NewAboutMe'
import MainPortafolio from './components/Portafolio/MainPortafolio'
import Contactame from './components/Contactame/Contactame'
import 'bulma/css/bulma.min.css'
import './assets/css/main.css'
import 'animate.css'
import './assets/css/izmir.css'

function App () {
  return (
        <div className="App">
          <NavBarUser />
          <div className="main">
<MainSection />

   <NewAboutMe />

            <MainPortafolio />
            <Contactame />
          </div>
        </div>
  )
}

export default App
