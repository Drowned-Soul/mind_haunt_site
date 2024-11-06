import styled from "styled-components";

export interface ITitle {
    color?: string; /* Nova prop para imagem de fundo */
}

export interface IPersonCard{
    backgroundImage?: string;
}

export const Container = styled.div`
    justify-content: center;
`;

export const Title = styled.h1<ITitle>`
    color: ${(props) => props.color || "#fff"};;
    font-size: 70px;
    font-family: "Almendra SC", sans-serif;
    display: flex;
    justify-content: center;
    line-height: 1;
    margin: 0;
`

export const PersonContainer = styled.div`
    justify-content: space-evenly;
    display: flex;
    margin-bottom: 200px;
`

export const PersonCardContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 400px;
`
export const PersonCard = styled.div<IPersonCard>`
    position: relative;
    height: 500px;
    width: 500px;
    margin-bottom: 40px;
    border-radius: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const PersonIcon = styled.div<IPersonCard>`
    background-image: url(${(props) => props.backgroundImage});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    height: 300px;
    width: 300px;
    border-radius: 100%;
    position: absolute;
    z-index: 1;
`;

export const BorderPersonCard = styled.img`
    height: 500px;
    width: 500px;
    border-radius: 100%;
    object-fit: cover;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
`;

export const PersonName = styled.p`
    color: #fff;
    font-size: 30px;
    line-height: 1;
    margin: 0;
`