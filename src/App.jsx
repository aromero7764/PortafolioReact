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


function App() {


  return (
    
    <div className="App">
      <NavBarUser />
      <div className="main">
        <div className="contenedor-principal container">

          <MainSection />
          <AboutMe />
         <Skills />
         </div>
        
         <Portafolio />
          <div className="contenedor-principal container">
         <Footer />
         </div>

        
      </div>

    </div>
  )
}

export default App
