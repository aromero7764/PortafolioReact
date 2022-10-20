import NavBarUser from './components/NavBar/NavBarUser'
import MainSection from './components/main/MainSection'
import NewAboutMe from './components/AboutME/NewAboutMe'
import MainPortafolio from './components/Portafolio/MainPortafolio'
import Contactame from './components/Contactame/Contactame'
import 'bulma/css/bulma.min.css'
import './assets/css/main.css'
import 'animate.css'
import './assets/css/izmir.css'
import ScrollUp from './components/ScrollUp/ScrollUp'

function App () {
  return (
        <div className="App">
          
          <div className="main">

          <div className='hero is-halfheight'>
            
            <div class="hero-head">
              <NavBarUser />
            </div> 
            <MainSection />
            </div>  

            


   <NewAboutMe />

            <MainPortafolio />
            <Contactame />
          </div>
          <ScrollUp />
        </div>
  )
}

export default App
