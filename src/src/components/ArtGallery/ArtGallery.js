import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Container, Title, Span, ArtsContainer, ArtCard, ArtCardContainer, Button, Text, DescriptionContainer } from "./Styles";
import Art1 from '../../assets/art1.png';
import Art2 from '../../assets/art2.png';
import Art3 from '../../assets/art3.png';
export default function ArtGallery() {
    return (_jsxs(Container, { id: "art-gallery", children: [_jsxs(Title, { children: [_jsx(Span, { color: "red", children: "Art " }), " Gallery"] }), _jsxs(ArtsContainer, { children: [_jsxs(DescriptionContainer, { children: [_jsx(Text, { children: "Get the chance to have your fan art shared on our site by our entire community! " }), _jsx(Text, { children: " Send us your artwork by email" }), _jsx(Button, { children: "View All Arts" })] }), _jsx(ArtCardContainer, { children: _jsx(ArtCard, { backgroundImage: Art1 }) }), _jsx(ArtCardContainer, { children: _jsx(ArtCard, { backgroundImage: Art2 }) }), _jsx(ArtCardContainer, { children: _jsx(ArtCard, { backgroundImage: Art3 }) })] })] }));
}
