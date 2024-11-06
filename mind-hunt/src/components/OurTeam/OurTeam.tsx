import { Container, Title, PersonContainer, PersonCardContainer, PersonCard, BorderPersonCard, PersonIcon, PersonName } from "./Styles"
import border from '../../assets/blood_border.png';
import None from '../../assets/none.jpg';

export default function OurTeam() {
    return (
        <Container>
            <Title color="red">MindHaunt</Title>
            <Title>Team</Title>
            <PersonContainer>
                <PersonCardContainer>
                    <PersonCard>
                        <PersonIcon backgroundImage={None}></PersonIcon>
                        <BorderPersonCard src={border}></BorderPersonCard>
                    </PersonCard>
                    <PersonName>Custódio</PersonName>
                    <PersonName>Java Programmer</PersonName>
                </PersonCardContainer>

                <PersonCardContainer>
                    <PersonCard>
                        <PersonIcon backgroundImage={None}></PersonIcon>
                        <BorderPersonCard src={border}></BorderPersonCard>
                    </PersonCard>
                    <PersonName>Custódio</PersonName>
                    <PersonName>Java Programmer</PersonName>
                </PersonCardContainer>

                <PersonCardContainer>
                    <PersonCard>
                        <PersonIcon backgroundImage={None}></PersonIcon>
                        <BorderPersonCard src={border}></BorderPersonCard>
                    </PersonCard>
                    <PersonName>Custódio</PersonName>
                    <PersonName>Java Programmer</PersonName>
                </PersonCardContainer>
            </PersonContainer>
        </Container>
        
    )
}