import NavBar from './components/navBar/navBar';
import Carousel from './components/Carousel/Carousel';
import AboutUs from  './components/AboutUs/AboutUs';
import Games from './components/GamesSection/Games';
import OurTeam from './components/OurTeam/OurTeam';
import Reviews from './components/ReviewsSection/ReviewsSection';

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
      <Reviews></Reviews>
    </>
  )
}

export default App