import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Almendra+SC&display=swap');

    :root {
        --green: #00A868;
        --gray: #909090;
        --white: #fff;
        --primary-font: Inter, 'sans-serif';
    }

    body {
        margin: 0;
        padding: 0;
        background-color: #111;
    }

    body * {
        box-sizing: border-box;
        font-family: Inter, 'sans-serif';
    }

    body button, body a {
        cursor: pointer;
    }
`