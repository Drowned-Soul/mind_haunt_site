import { jsx as _jsx } from "react/jsx-runtime";
import { Container, Button } from "./Styles";
import wallPaper from '../../assets/mind_wallpaper.png';
export default function Carousel() {
    return (_jsx(Container, { backgroundImage: wallPaper, id: "main", children: _jsx(Button, { children: "VIEW GAMES" }) }));
}
