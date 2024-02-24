import { motion } from "framer-motion";
import styled from "styled-components";

const TextInputComponent = styled(motion.input)`
  border-radius: 8px;
  border: 1px solid #404e4d;
  margin: 4px;
  padding: 8px;
  &::placehodler {
    color: #404e4d;
  }
`;

const NumberInputComponent = styled(TextInputComponent)`
  max-width: 16px;
`;

interface InputProps {
  text?: boolean;
  password?: boolean;
  id: string;
  name: string;
  placeholder: string;
  children?: React.ReactNode;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string; 
}

const Input: React.FC<InputProps> = ({
  text,
  password,
  id,
  name,
  children,
  placeholder,
  onChange,
  value
}) => {
  const TextInput = text ? TextInputComponent : NumberInputComponent;

  return (
    <TextInput
      type={text && password ? 'password' : 'text'}
      id={id}
      name={name}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
      whileFocus={{
        border: "2px solid #41b467 !important",
        background:
          "linear-gradient(180deg, rgba(65,180,103,0.5) 0%, rgba(65,180,103,0) 30%)",
      }}
    >
      {children}
    </TextInput>
  );
};

export default Input;
