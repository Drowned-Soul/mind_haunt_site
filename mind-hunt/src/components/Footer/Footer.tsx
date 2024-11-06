import { Container, Title, Span, SubContainer, Image, RedText, WhiteText, FatherContainer, WaterMarkContainer} from "./Styles"
import logoMind from '../../assets/logo_mind.png';

export default function Footer() {
    return (
        <FatherContainer>
            <Span></Span>
            <SubContainer>
                <Container>
                    <Image src={logoMind} />
                    <Title>MindHaunt Studios </Title>
                    <RedText>a game studio</RedText>
                </Container>
                <Container>
                    <WhiteText>Main</WhiteText>
                    <WhiteText>About Us</WhiteText>
                    <WhiteText>Games</WhiteText>
                    <WhiteText>Team</WhiteText>
                    <WhiteText>Review</WhiteText>
                    <WhiteText>Art Gallery</WhiteText>
                    <WhiteText>Contact Us</WhiteText>
                </Container>
                <Container>
                    <WhiteText>Instagram</WhiteText>
                    <WhiteText>TikTok</WhiteText>
                    <WhiteText>mindhuntsudios@gmail.com</WhiteText>
                </Container>
            </SubContainer>
            
            <Span></Span>

            <WaterMarkContainer>
                <WhiteText>Mindhaunt Studios - 2024. All rights reserved</WhiteText>
            </WaterMarkContainer>
        </FatherContainer>
        
    )
}