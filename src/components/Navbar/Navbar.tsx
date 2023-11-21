import { BiTennisBall } from "react-icons/bi";
import Button from "../button";
import Switch from 'react-switch';
import { ThemeContext } from "styled-components";
import React, { useContext } from 'react';
import { CenterContainer, NavbarButton, NavbarComponent, NavbarLogo, SpanComponent } from "./styles";

const hoverAnimation = {
  scale: 1.1,
  background:
    "linear-gradient(0deg, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0) 60%)",
};

interface Props {
  toggleTheme():void;
}

export const Navbar: React.FC<Props> = ({ toggleTheme }) => {
  const { colors, title } = useContext(ThemeContext);

  return (
    <NavbarComponent>
      <NavbarLogo>
        <BiTennisBall className="navbar-logo__icon"></BiTennisBall>
        <SpanComponent>CourtScore</SpanComponent>
      </ NavbarLogo>
      <CenterContainer>
        <SpanComponent whileHover={hoverAnimation}>
          <a href="">Grupos</a>
        </SpanComponent>
        <SpanComponent whileHover={hoverAnimation}>
          <a href="">Torneios</a>
        </SpanComponent>
        <SpanComponent whileHover={hoverAnimation}>
          <a href="">Rankings</a>
        </SpanComponent>
      </CenterContainer>
      <NavbarButton>
      <Switch
        onChange={toggleTheme}
        checked={title==='dark'}
        checkedIcon={false}
        uncheckedIcon={false}
        height={10}
        width={40}
        handleDiameter={20}
        offColor={colors.secondary}
        onColor={colors.secondary}
        onHandleColor={colors.accent}
        offHandleColor={colors.highlight}
      ></Switch>
        <Button primary>Login</Button>
      </NavbarButton>
    </NavbarComponent>
  );
};
