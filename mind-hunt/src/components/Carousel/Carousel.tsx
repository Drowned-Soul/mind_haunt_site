import { Container, Image } from "./Styles"
import wallPaper from '../../assets/mind_wallpaper.png';

export default function Carousel() {
    return (
        <Container>
            <Image src={wallPaper} />
        </Container>
        
    )
}