import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import NavBar from './components/navBar/navBar';
import Carousel from './components/Carousel/Carousel';
import AboutUs from './components/AboutUs/AboutUs';
import Games from './components/GamesSection/Games';
import OurTeam from './components/OurTeam/OurTeam';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import { GlobalStyle } from './components/GlobalStyles/GlobalStyle';
function App() {
    return (_jsxs(_Fragment, { children: [_jsx(GlobalStyle, {}), _jsx(NavBar, {}), _jsx(Carousel, {}), _jsx(AboutUs, {}), _jsx(Games, {}), _jsx(OurTeam, {}), _jsx(Contact, {}), _jsx(Footer, {})] }));
}
export default App;
