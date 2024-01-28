import { AboutSectionBlock, AboutSectionCard, AboutSectionContainer } from "./styles"
import { BsFillPeopleFill } from "react-icons/bs";
import { MdOutlineSportsTennis } from "react-icons/md";
import { FaRankingStar } from "react-icons/fa6";
import { GiTennisCourt } from "react-icons/gi";

export const AboutSection: React.FC = () => {
  return(
    <AboutSectionContainer>
      <div>
        <img className="about-section-container-img" src="img-2.jpg" alt="" />
      </div>
      <AboutSectionBlock>
        <AboutSectionCard >
          <BsFillPeopleFill className="about-icon"/>
          <h3 className="about-section-card__title">Crie seu grupo</h3>
          <p className="about-section-card__text">Sabe aquela galera que joga toda semana com você na sua quadra favorita? Forme seu grupo e gerencie torneios.</p>
        </AboutSectionCard>
        <AboutSectionCard>
          <MdOutlineSportsTennis className="about-icon" />
          <h3 className="about-section-card__title">Jogue um torneio</h3>
          <p className="about-section-card__text">Além de gerar datas para não haver conflitos de quadra. CourtScore faz todo o controle das fases do torneio até a Final.</p>
        </AboutSectionCard>
        <AboutSectionCard>
            <FaRankingStar className="about-icon" />
            <h3 className="about-section-card__title">Suba no Ranking</h3>
            <p className="about-section-card__text">Não é só o vencedor da final que ganha pontos. Qualquer partida ganha acumula pontos para você subir no ranking do seu grupo.</p>
        </AboutSectionCard>
        <AboutSectionCard>
            <GiTennisCourt className="about-icon" />
            <h3 className="about-section-card__title">Gerencie Torneios</h3>
            <p className="about-section-card__text">Você é o dono da quadra? Sem problemas, CourtScore também está disponível para quem quer apenas gerenciar os torneios.</p>
        </AboutSectionCard>
      </AboutSectionBlock>
    </AboutSectionContainer>
  )
}
