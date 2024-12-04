import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Container, Image, ImageContainer, NavItem } from "./Styles";
import logoMind from '../../assets/logo_mind.png';
export default function NavBar(props) {
    return (_jsxs(Container, { isActive: props.isActive, margin: props.margin, children: [_jsx(ImageContainer, { children: _jsx(Image, { src: logoMind }) }), _jsx(NavItem, { as: "a", href: "#main", children: "Main" }), _jsx(NavItem, { as: "a", href: "#about-us", children: "About Us" }), _jsx(NavItem, { as: "a", href: "#games", children: "Games" }), _jsx(NavItem, { as: "a", href: "#team", children: "Team" }), _jsx(NavItem, { as: "a", href: "#contact-us", children: "Contact Us" })] }));
}
