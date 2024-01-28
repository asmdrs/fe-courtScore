import { motion } from "framer-motion";
import styled from "styled-components";

export const DownloadSectionContainer = styled(motion.div)`
  background-image: url("img-3.jpg");
  height: 500px;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center
`

export const DownloadSectionButtonContainer = styled(motion.div)`
  background-color: ${props => props.theme.colors.primary};
  z-index: 2;
  position: relative;
  top: 60px;
  max-width: 400px;
  padding: 24px;
  border-radius: 4px;
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .download-section{
    &__title{
      font-size: 24px;
      font-weight: 600;
      color: ${props => props.theme.colors.secondary};
      letter-spacing: 0.25px;
    }
    &__btn{
      width: 250px;
      font-size: 16px;
      height: 70px;
    }
  }
  
`