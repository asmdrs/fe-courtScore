import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const PrimaryButton = styled(motion.button)`
  margin: 1em;
  padding: 8px 16px;
  border-radius: 8px;
  color: #e7ecef;
  background: #41b467;
  border: none;
  cursor: pointer;
`;

const SecondaryButton = styled(PrimaryButton)`
  color: #41b467;
  background: #e7ecef;
  border: 2px solid #41b467;
`;

interface ButtonProps {
  primary?: boolean;
  onClick?: () => void;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ primary, onClick, children }) => {
  const ButtonComponent = primary ? PrimaryButton : SecondaryButton;

  return (
    <ButtonComponent whileHover={{ scale: 1.1 }} onClick={onClick}>
      {children}
    </ButtonComponent>
  );
};

export default Button;

//https://coolors.co/41b467-ffcb47-404e4d-e7ecef-1be7ff
