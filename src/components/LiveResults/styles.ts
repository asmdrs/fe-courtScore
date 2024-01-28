import { motion } from "framer-motion";
import styled from "styled-components";

export const LiveResultsContainer = styled(motion.div)`
    display: none;
    @media (min-width: 450px) {
        background-color: ${props => props.theme.colors.primary};
        display: flex;
        height: 200px;
        margin: 8px 24px;
        position: relative;
        top: -64px;
        z-index: 2;
        border-radius: 4px;
        box-shadow: -9px 10px 10px 0px rgba(0,0,0,0.1);
    }
`
export const LiveResultBlock = styled.div`
    @media (min-width: 450px) {
        display: flex;
        flex-direction: column;
        margin: 16px 0;
        padding: 0px 16px;
        border-right: 1px solid ${props => props.theme.colors.secondary};
    }
    .phase{
        font-family: 'Assistant', sans-serif;
        font-size: 12px;
        font-weight: 200;
        letter-spacing: 0.5%;
        color: ${props => props.theme.colors.secondary};
        margin: 8px 0;
    }
    .main-content{
        &__title{
            font-size: 24px;
            color:${props => props.theme.colors.accent};
            margin-bottom: 8px;
            font-weight: 700;
        }
        &__subtitle{
            font-size: 16px;
            color:${props => props.theme.colors.secondary};
            font-weight: 500;
        }
    }
`