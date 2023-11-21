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
    }
`
export const LiveResultBlock = styled.div`
    @media (min-width: 450px) {
        display: flex;
        flex-direction: column;
    }
`