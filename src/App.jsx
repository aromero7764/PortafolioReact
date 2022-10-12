
import './App.css'
import NavBarUser from './components/NavBar/NavBarUser'
import 'bulma/css/bulma.min.css';
import './assets/css/main.css'
import MainSection from './components/main/MainSection';
import Footer from './components/Footer/Footer';
import 'animate.css'
import NewAboutMe from './components/AboutME/NewAboutMe';
import MainPortafolio from './components/Portafolio/MainPortafolio';


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

          <MainPortafolio />
       
         <Footer />
         {/* </div> */}
 
      </div>
    </div>
  )
}

export default App
