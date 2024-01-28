import { motion } from "framer-motion";
import styled from "styled-components";

export const AboutSectionContainer = styled(motion.div)`
    background-color: ${props => props.theme.colors.primary};
    @media (max-width: 450px) {
      display: flex;
      flex-direction: column;
      align-items: center;
      .about-section-container-img{
        margin: 50px;
        max-height: 350px;
        width: 300px;
        object-fit: cover;
        border-radius: 50px;
      }
    }
    @media (min-width: 450px) {
        background-color: ${props => props.theme.colors.primary};
        display: flex;
        padding: 80px 16px 24px 300px;
        position: relative;
        top: -216px;
      
      .about-section-container-img{
        margin-top: 100px;
        max-height: 350px;
        width: 500px;
        object-fit: cover;
        border-radius: 50px;
      }
    }
`

export const AboutSectionBlock = styled(motion.div)`
    background-color: ${props => props.theme.colors.primary};
    @media (min-width: 450px) {
        background-color: ${props => props.theme.colors.primary};
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        height: 450px;
        padding: 100px 16px 24px 16px;
        max-width: 400px;
    }
`

export const AboutSectionCard = styled(motion.div)`
    background-color: rgba(65,180,103, 0.3);
    @media (max-width: 450px) {
      background-color: rgba(65,180,103, 0.3);
        border-radius: 4px;
        display: flex;
        flex-direction: column;
        margin-bottom: 8px;
        margin-right: 8px;
        padding: 24px 16px 24px 16px;
        max-height: 182px;
        max-width: 370px;
        .about-icon{
          font-size: 30px;
          color:  ${props => props.theme.colors.accent};
          margin-bottom: 8px;
        }
        
        .about-section-card{
          &__title{
            font-weight: 600;
            font-size: 24px;
            margin-bottom: 8px;
          }
          &__text{
            font-family: 'Assistant', sans-serif;
            letter-spacing: 0.25%;
            color: ${props => props.theme.colors.secondary};
          }
        }
    }

    @media (min-width: 450px) {
        background-color: rgba(65,180,103, 0.3);
        border-radius: 4px;
        display: flex;
        flex-direction: column;
        margin-bottom: 8px;
        margin-right: 8px;
        padding: 24px 16px 24px 16px;
        max-height: 182px;
        .about-icon{
          font-size: 30px;
          color:  ${props => props.theme.colors.accent};
          margin-bottom: 8px;
        }
        
        .about-section-card{
          &__title{
            font-weight: 600;
            font-size: 24px;
            margin-bottom: 8px;
          }
          &__text{
            font-family: 'Assistant', sans-serif;
            letter-spacing: 0.25%;
            color: ${props => props.theme.colors.secondary};
          }
        }
     } 
`

