import styled from "styled-components";


export interface ICarousel {
    isActive?: boolean,
    margin?: string
}

export const Container = styled.div<ICarousel>`
    background-color: #111;
`;

export const Image = styled.img`
    width: 100%; 
    height: auto;
    object-fit: cover;
`;

