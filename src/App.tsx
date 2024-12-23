import NavBar from './components/navBar/navBar';
import Carousel from './components/Carousel/Carousel';
import AboutUs from  './components/AboutUs/AboutUs';
import Games from './components/GamesSection/Games';
import OurTeam from './components/OurTeam/OurTeam';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

import { GlobalStyle } from './components/GlobalStyles/GlobalStyle';

function App() {
  return (
    <>
      <GlobalStyle />
      <NavBar></NavBar>
      <Carousel></Carousel>
      <AboutUs></AboutUs>
      <Games></Games>
      <OurTeam></OurTeam>
      <Contact></Contact>
      <Footer></Footer>
    </>
  )
}

export default App