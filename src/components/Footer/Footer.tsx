import { motion } from "framer-motion";
import styled from "styled-components";
import { BiTennisBall } from "react-icons/bi";
import "../Navbar/Navbar.css";
import "./Footer.css";
import Input from "../Input";
import Button from "../button";
import { breakpoints } from "../../constants/devices";

const FooterComponent = styled(motion.footer)`
  width: 100vw;
  background: #404e4d;
  color: #f3f5f7;
  padding: 16px;
  display: flex;
  justify-content: space-between;
  @media (max-width: ${breakpoints.md}) {
    flex-direction: column;
    gap: 16px;
  }
`;

export const Footer = () => {
  return (
    <FooterComponent>
      <div className="footer-icon">
        <div className="footer-icon__container">
          <BiTennisBall className="footer-icon__icon"></BiTennisBall>
          <h3 className="footer-icon__text">CourtScore</h3>
        </div>
        <p className="footer-icon__subtitle">
          Tournament management for small groups
        </p>
      </div>
      <div className="footer-list">
        <h4 className="footer-list__title">Features</h4>
        <ul className="footer-list__list">
          <li className="footer-list__list__item">Game log</li>
          <li className="footer-list__list__item">Tournament log</li>
          <li className="footer-list__list__item">Group rank</li>
          <li className="footer-list__list__item">Player Stats</li>
        </ul>
      </div>
      <div className="footer-list">
        <h4 className="footer-list__title">Helpful Links</h4>
        <ul className="footer-list__list">
          <li className="footer-list__list__item">Game log</li>
          <li className="footer-list__list__item">Tournament log</li>
          <li className="footer-list__list__item">Group rank</li>
          <li className="footer-list__list__item">Player Stats</li>
        </ul>
      </div>

      <div className="footer-register">
        <h4>Subscribe to the newsletter</h4>
        <Input
          text
          id="footer-newsletter-input"
          name="footer-newsletter-input"
          placeholder="Your best e-mail"
        ></Input>
        <Button> Register</Button>
      </div>
    </FooterComponent>
  );
};
