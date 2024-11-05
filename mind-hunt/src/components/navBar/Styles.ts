import styled from "styled-components";


export interface InavBar {
    isActive?: boolean,
    margin?: string
}

export const Container = styled.div<InavBar>`
    background-color: #111;
    height: 100px;
    width: 100%;
    margin: ${(props) => props.margin || "auto"};
    z-index: 2;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
`;

export const ImageContainer = styled.div`
    display: flex;
    width: 70px;
    height: 70px;
`

export const Image = styled.img`
    height: 100%;
`

export const NavItem = styled.p`
    color: #fff;
    font-size: 30px;
    font-family: "Almendra SC", sans-serif;
    transition: color 0.3s ease, transform 0.3s ease;

    &:hover {
        cursor: pointer;
        color: red;
        transform: scale(1.05);
    }
`
