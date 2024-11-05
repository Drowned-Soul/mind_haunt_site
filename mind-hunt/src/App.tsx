import NavBar from './components/navBar/navBar';
import Carousel from './components/Carousel/Carousel';
import AboutUs from  './components/AboutUs/AboutUs';

import { GlobalStyle } from './components/GlobalStyles/GlobalStyle';

function App() {
  return (
    <>
      <GlobalStyle />
      <NavBar></NavBar>
      <Carousel></Carousel>
      <AboutUs></AboutUs>
    </>
  )
}

export default App