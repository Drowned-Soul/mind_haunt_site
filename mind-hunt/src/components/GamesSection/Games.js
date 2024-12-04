import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Container, Title, GameCard, GamesContainer, GameCardContainer, Button, GameDescription } from "./Styles";
import game1 from '../../assets/game_1.jpeg';
import game2 from '../../assets/Game_2.png';
export default function Games() {
    return (_jsxs(Container, { id: "games", children: [_jsx(Title, { children: "Games" }), _jsx("br", {}), _jsxs(GamesContainer, { children: [_jsxs(GameCardContainer, { children: [_jsx(GameCard, { backgroundImage: game1 }), _jsx(Button, { children: "Drowned Soul" }), _jsx(GameDescription, { children: "Submerge yourself in the mysterious world of Drowned Soul, where a young swimmer, after a tragic accident, is given a second chance with enigmatic powers. Without her memories, she faces supernatural forces as she searches for the truth about her true nature." })] }), _jsxs(GameCardContainer, { children: [_jsx(GameCard, { backgroundImage: game2 }), _jsx(Button, { children: "File Gamble" }), _jsx(GameDescription, { children: "You want to access the deep web? No problem! This OS will help you do it safely and anonymous! if it wants to play, it's better to bet then to lose it all" })] })] })] }));
}
