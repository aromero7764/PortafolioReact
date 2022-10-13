
import './App.css'
import NavBarUser from './components/NavBar/NavBarUser'
import 'bulma/css/bulma.min.css'
import './assets/css/main.css'
import MainSection from './components/main/MainSection'

import 'animate.css'
import NewAboutMe from './components/AboutME/NewAboutMe'
import MainPortafolio from './components/Portafolio/MainPortafolio'
import Contactame from './components/Contactame/Contactame'

function App () {
  return (

    <div className="App">

   <NavBarUser />

      {/* <NvBar /> */}

      <div className="main">

      {/*   <div className="contenedor-principal container"> */}
          <div className='hero is-halfheight'>
          <MainSection />
           </div>
          <NewAboutMe />

          <MainPortafolio />

         {/* <Footer /> */}
         <Contactame />
         {/* </div> */}

      </div>
    </div>
  )
}

export default App
