import styled from "styled-components";

export interface ICarousel {
    backgroundImage?: string; /* Nova prop para imagem de fundo */
}

export const Container = styled.div<ICarousel>`
    background-image: url(${(props) => props.backgroundImage}); /* Usa a prop backgroundImage */
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    justify-content: center;
    align-items: end;
    height: 100vh;
`;

export const Button = styled.button`
    border: none;
    background-color: red;
    color: #fff;
    height: 60px;
    border-radius: 10px;
    padding: 15px 50px;
    font-family: sans-serif;
    margin-bottom: 70px;
`;
