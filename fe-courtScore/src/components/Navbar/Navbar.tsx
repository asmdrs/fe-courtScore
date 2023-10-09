import { motion } from "framer-motion";
import styled from "styled-components";
import { BiTennisBall } from "react-icons/bi";
import "./Navbar.css";
import Button from "../button";

const NavbarComponent = styled(motion.nav)`
  background: #f3f5f7;
  color: #404e4d;
  display: flex;
  width: 100vw;
`;
const SpanComponent = styled(motion.span)`
  padding: 16px 8px;
  font-size: 16px;
`;

const hoverAnimation = {
  scale: 1.1,
  background:
    "linear-gradient(0deg, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0) 60%)",
};

export const Navbar = () => {
  return (
    <NavbarComponent>
      <div className="navbar-logo">
        <BiTennisBall className="navbar-logo__icon"></BiTennisBall>
        <SpanComponent>CourtScore</SpanComponent>
      </div>
      <div className="navbar-center">
        <SpanComponent whileHover={hoverAnimation}>
          <a href="">Grupos</a>
        </SpanComponent>
        <SpanComponent whileHover={hoverAnimation}>
          <a href="">abuble</a>
        </SpanComponent>
        <SpanComponent></SpanComponent>
      </div>
      <div className="navbar-logo__btn">
        <Button primary>Login</Button>
      </div>
    </NavbarComponent>
  );
};
