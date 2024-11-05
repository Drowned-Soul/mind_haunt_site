import NavBar from './components/navBar/navBar';
import Carousel from './components/Carousel/Carousel';
import AboutUs from  './components/AboutUs/AboutUs';
import Games from './components/GamesSection/Games';

import { GlobalStyle } from './components/GlobalStyles/GlobalStyle';

function App() {
  return (
    <>
      <GlobalStyle />
      <NavBar></NavBar>
      <Carousel></Carousel>
      <AboutUs></AboutUs>
      <Games></Games>
    </>
  )
}

export default App