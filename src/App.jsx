import { useState } from 'react'
import './App.css'
import NavBarUser from './components/NavBar/NavBarUser'
import 'bulma/css/bulma.min.css';
import './assets/css/main.css'
import MainSection from './components/main/MainSection';
import AboutMe from './components/AboutME/AboutMe';
import Skills from './components/Skills/Skills';
import Portafolio from './components/Portafolio/Portafolio';
import Footer from './components/Footer/Footer';
import 'animate.css'
import NvBar from './components/NavBar/NvBar';
import NewSkills from './components/Skills/NewSkills';
import NewAboutMe from './components/AboutME/NewAboutMe';
import Animation from './components/Animation/animation';


function App() {


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
        
          
     {/*      <AboutMe />


          
         <Skills />
        */}
      {/*    </div> */}
         <Portafolio />
        {/*   <div className="contenedor-principal container"> */}
         <Footer />
         {/* </div> */}
 
      </div>
    </div>
  )
}

export default App
