import styled from "styled-components";
import { motion } from "framer-motion";

export const CenterContainer = styled.div`
  display: flex;
  align-self: center;
  flex: 3;
  justify-content: center;
`
export const NavbarLogo = styled.div`
  display: flex;
  align-self: center;
  justify-content: center;
  align-content: center;
  margin-left: 8px;
  align-items: center;
  font-weight: 700;

  .navbar-logo__icon {
    font-size: 24px;
    border-radius: 80px;
    background: #ffcb47;
    color: #ffffff;
  };
`
export const NavbarButton = styled.div`
font-size: 16px;
`

export const NavbarComponent = styled(motion.nav)`
  background: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.secondary};
  display: flex;
  width: 100vw;
  @media (max-width: 450px) { 
    width: 104vw;
  }
`;

export const SpanComponent = styled(motion.span)`
  padding: 16px 8px;
  font-size: 16px;
`;