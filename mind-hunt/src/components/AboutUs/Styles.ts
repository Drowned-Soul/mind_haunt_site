import styled from "styled-components";


export interface ICarousel {
    isActive?: boolean,
    margin?: string
}

export const Container = styled.div<ICarousel>`
    display: flex;
    justify-content: space-evenly;
    padding: 60px 0;
`;

export const Title = styled.h1`
    color: #fff;
    font-size: 50px;
    font-family: "Almendra SC", sans-serif;
`

export const Text = styled.p`
    color: #fff;
    font-size: 20px;
    font-family: sans-serif;
`

export const TitleRed = styled.span`
    color: red;
`

export const TextContainer = styled.div`
    padding: 20px;
    width: 40vw;
`

export const ImageContainer = styled.div`
    display: block;
`

export const Image = styled.img`
    width: 55vh; 
    object-fit: cover;
`;