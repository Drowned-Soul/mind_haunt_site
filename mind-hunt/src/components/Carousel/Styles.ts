import styled from "styled-components";


export interface ICarousel {
    isActive?: boolean,
    margin?: string
}

export const Container = styled.div<ICarousel>`
    background-color: #111;

`;

export const Image = styled.img`
    width: 100%;   /* Faz a imagem ocupar 100% da largura do container */
    height: auto;  /* Mantém a proporção da imagem automaticamente */
    object-fit: cover;  /* Cobre o espaço do container mantendo a proporção */
`;

