import { useState } from "react";
import AuthService from "../../services/AuthService";
import Input from "../Input"
import { FormContainer, LoginContainer } from "./styles"
import Button from "../button";
import { useNavigate } from "react-router-dom";


export const LoginScreen: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const token = await AuthService.login(username, password);
    if (token) {
      navigate("/dashboard")
    } else {
      //TO-DO SnackBar
      alert("Dados incorretos");
    }
  };

  return(
      <LoginContainer>
        <h2 className="login-container__title">Formulário de Login</h2>
        <FormContainer onSubmit={handleSubmit}>
          <label htmlFor="login-screen-username-input">Username</label>
          <Input text id="login-screen-username-input" 
          name="username" placeholder="username"
          onChange={e => setUsername(e.target.value)}>
          </Input>
          <label htmlFor="login-screen-password-input">Password</label>
          <Input text id="login-screen-password-input" 
          name="password" placeholder="password"
          onChange={e => setPassword(e.target.value)}>
          </Input>
          <Button type="submit">Login</Button>
        </FormContainer>
      </LoginContainer>
    
  )
}

export default LoginScreen