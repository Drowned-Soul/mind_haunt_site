import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Container, Title, TitleRed, TextContainer, Text } from "./Styles";
export default function AboutUs() {
    return (_jsx(Container, { id: "about-us", children: _jsxs(TextContainer, { children: [_jsxs(Title, { children: ["About ", _jsx(TitleRed, { children: "Us" })] }), _jsx(Text, { children: "We are a studio committed to producing psychological horror experiences, focused on creating experiences that provoke deep reflections on the horror that is intrinsic to the human being. " }), _jsx(Text, { children: "Through a passion for innovation, engaging storytelling and exploration of impactful themes, our studio is proud to reveal stories based on real events that are dark and undercover, showing the importance of tackling uncomfortable topics that deeply affect our society. " })] }) }));
}
