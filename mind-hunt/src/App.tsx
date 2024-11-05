import NavBar from './components/navBar/navBar';
import Carousel from './components/Carousel/Carousel';
import { GlobalStyle } from './components/GlobalStyles/GlobalStyle';

function App() {
  return (
    <>
      <GlobalStyle />
      <NavBar></NavBar>
      <Carousel></Carousel>
      
    </>
  )
}

export default App