import Button from "../button"
import { HeroContainer } from "./styles"

export const HeroSection: React.FC = () => {
    return(
        <HeroContainer>
            <img className="hero-img" src="img-1.jpg" alt="" />
            <div className="hero-txt">
                <h1>Torne-se uma lenda local</h1>
                <p className="hero-txt__paragraph">Conheça os aces do tênis da sua região, marque partidas, obtenha o ranking atualizado da sua cidade</p>
                <div className="hero-btn">
                    <Button
                    customClass="hero-btn">Conheça já</Button>
                </div>
            </div>
        </HeroContainer>
    )
}