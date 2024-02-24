import { motion } from "framer-motion";
import styled from "styled-components";

export const LoginContainer = styled(motion.div)`

      @media (min-width: 450px) {
          background-color: ${props => props.theme.colors.primary};
          display: flex;
          flex-direction: column;
          width: 400px;
          margin: auto;
          margin-top: 20px;
          border-radius: 4px;
          padding: 24px;


          .login-container__title{
            font-size: 24px;
            font-weight: 600;
            margin-bottom: 16px;
            text-align: center;
          }

      }
`
export const FormContainer = styled.form`

      @media (min-width: 450px) {
        display: flex;
        flex-direction: column;
        height: 100%;
        width: 100%;
      }

`