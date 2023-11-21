import { motion } from "framer-motion";
import styled from "styled-components";

export const HeroContainer = styled(motion.div)`
    background-color: ${props => props.theme.colors.accent};
    color: ${props => props.theme.colors.primary};
    display: flex;
    flex-direction: column;
    width: 100vw;
    
    .hero-img{
        max-width: 100vw;
        max-height: 1280px;
        overflow: hidden;
        object-fit: cover;
    };

    .hero-txt{
        align-self: center;
        font-weight: 600;
        font-size: 64px;
        text-align: center;
        padding: 20px;
        
        &__paragraph{
            font-weight: 100;
            font-size: 20px;
            margin-top: 8px;
           }
    }
    .hero-btn{
        font-size: 24px;
        margin: 0;
        margin-top: 8px;
    }

    @media (min-width: 450px) { 
        background-color: ${props => props.theme.colors.accent};
        color: ${props => props.theme.colors.primary};
        flex-direction: row;
        height: 720px;
        .hero-img{
            max-width: 60vw;
            max-height: 1280px;
            object-fit: cover;
            overflow: hidden;
        };
        .hero-txt{
           align-self: center;
           font-weight: 600;
           font-size: 64px;
           text-align: left;
           padding-left: 20px;
           padding-right: 20px;
           position: relative;

           &__paragraph{
            padding-right: 60px;
            font-weight: 100;
            font-size: 20px;
           }
        }
  }
`