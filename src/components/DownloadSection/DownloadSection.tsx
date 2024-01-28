import Button from "../button"
import { DownloadSectionButtonContainer, DownloadSectionContainer } from "./style"
import { BiLogoPlayStore } from "react-icons/bi";
import { FaAppStoreIos } from "react-icons/fa";

export const DownloadSection: React.FC = () => {
    return(
      <DownloadSectionContainer>
        <DownloadSectionButtonContainer>
          <h3 className="download-section__title">Baixe já na sua loja de aplicativos</h3>
          <Button primary customClass="download-section__btn"> 
          <BiLogoPlayStore /> Play Store</Button>
          <Button primary customClass="download-section__btn"> 
          <FaAppStoreIos /> App Store</Button>
        </DownloadSectionButtonContainer>
      </DownloadSectionContainer>
    )
}