import { InavBar, Container, Image, ImageContainer, NavItem } from "./Styles"
import logoMind from '../../assets/logo_mind.png';

export default function NavBar(props: InavBar) {
    return (
        <Container
            isActive={props.isActive}
            margin={props.margin}
            >
            <ImageContainer>
            <Image src={logoMind} />
            </ImageContainer>
            <NavItem>
                Main                
            </NavItem>
            <NavItem>
                About Us                
            </NavItem>
            <NavItem>
                Games              
            </NavItem>
            <NavItem>
                Team             
            </NavItem>
            <NavItem>
                Reviews          
            </NavItem>
            <NavItem>
                Art Gallery      
            </NavItem>
            <NavItem>
                Contact Us   
            </NavItem>
        </Container>
        
    )
}