import styled from "styled-components";

export interface IGameCard {
    backgroundImage?: string; /* Nova prop para imagem de fundo */
}

export const Container = styled.div`
    justify-content: center;
`;

export const Title = styled.h1`
    color: red;
    font-size: 50px;
    font-family: "Almendra SC", sans-serif;
    display: flex;
    justify-content: center;
`

export const GamesContainer = styled.div`
    justify-content: space-evenly;
    display: flex;
    margin-bottom: 100px
`

export const GameCardContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 400px;
`

export const GameCard = styled.div<IGameCard>`
    background-image: url(${(props) => props.backgroundImage});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    height: 600px;
    width: 400px;
    border-radius: 30px;
    border: 2px solid red;
    margin-bottom: 40px;
`;

export const Button = styled.button`
    border: none;
    background-color: red;
    color: #fff;
    height: 60px;
    width: 100%;
    border-radius: 10px;
    padding: 15px 50px;
    font-family: sans-serif;
    font-size: 20px;
    text-transform: uppercase;
    margin-bottom: 40px;
`;

export const GameDescription = styled.p`
    color: #fff
`