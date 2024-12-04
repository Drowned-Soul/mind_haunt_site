import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Container, Title, Span, SubContainer, Image, RedText, WhiteText, FatherContainer, WaterMarkContainer } from "./Styles";
import logoMind from '../../assets/logo_mind.png';
export default function Footer() {
    return (_jsxs(FatherContainer, { children: [_jsx(Span, {}), _jsxs(SubContainer, { children: [_jsxs(Container, { children: [_jsx(Image, { src: logoMind }), _jsx(Title, { children: "MindHaunt Studios " }), _jsx(RedText, { children: "a game studio" })] }), _jsxs(Container, { children: [_jsx(WhiteText, { as: "a", href: "#main", children: "Main" }), _jsx(WhiteText, { as: "a", href: "#about-us", children: "About Us" }), _jsx(WhiteText, { as: "a", href: "#games", children: "Games" }), _jsx(WhiteText, { as: "a", href: "#team", children: "Team" }), _jsx(WhiteText, { as: "a", href: "#contact-us", children: "Contact Us" })] }), _jsxs(Container, { children: [_jsx(WhiteText, { as: "a", href: "#main", children: "Instagram" }), _jsx(WhiteText, { as: "a", href: "#main", children: "TikTok" }), _jsx(WhiteText, { as: "a", href: "#main", children: "studiosmindhaunt@gmail.com" })] })] }), _jsx(Span, {}), _jsx(WaterMarkContainer, { children: _jsx(WhiteText, { children: "Mindhaunt Studios - 2024. All rights reserved" }) })] }));
}