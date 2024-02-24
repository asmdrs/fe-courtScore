import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import { motion } from "framer-motion";

interface ToastProps { 
  id:string;
  message:string;
  type: string;
  duration: number;
  onClose:() => void
}

const ToastContainer = styled(motion.div)`
    border: 1px solid #41b467;
    background-color: whitesmoke;
    border-left: none;
    border-radius: 4px;
    position: absolute;
    display: flex;
    width: 300px;
    height: 50px;
    z-index: 3;
    

    .toast-alert{
      background-color: #ad2525;
      margin: 0;
      width: 10px;
      height: 100%;
      border-radius: 4px 0 0 4px;
    }

    .toast-success{
      background-color: #41b467;
      margin: 0;
      width: 10px;
      height: 100%;
      border-radius: 4px 0 0 4px;
    }

    .toast-alert{
      background-color: #FFCB47;
      margin: 0;
      width: 10px;
      height: 100%;
      border-radius: 4px 0 0 4px;
    }

    .toast-content{
      margin-left: 16px;
      display: flex;
      width: 100%;
      flex-direction: row;
      justify-content: space-between;
      padding-top: 8px;
      padding-right: 8px;
    }

    .toast-btn{
      border-radius: 8px;
      border: 1px solid #41b467;
      font-size: 8px;
      justify-self: flex-end;
      max-height: 20px;
    }

    @media (max-width: 450px) { 
    margin: 6px;
  }

`

const Toast: React.FC<ToastProps> = ({ id, message, type, duration, onClose }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      onClose();
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  const handleClose = () => {
    setVisible(false);
    onClose();
  };

  return visible ? (
        <ToastContainer 
        id={id}
        animate={{ x: 20, opacity: [0, 100] }}
        transition={{ ease: "easeOut", duration: 1 }}
        className={`toast-bg-${type}`}>
          <div className={`toast-${type}`}>
          </div>
          <div className="toast-content">
            <span>{message}</span>
            <button className='toast-btn' onClick={handleClose}>X</button>
          </div>
        </ToastContainer>
  ) : null;
};

export default Toast;
