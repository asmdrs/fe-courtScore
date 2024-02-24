import { render, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import LoginScreen from './LoginScreen';
import AuthService from '../../services/AuthService';
import { MemoryRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import light from '../../styles/themes/light';

/**
 * @jest-environment jsdom
 */

describe('Login Screen Component', ()=> {
  beforeEach(() => {
    jest.clearAllMocks(); 
  });
  
  it('should renders login form', async () => {
    
    const { getByLabelText, getByText } = render(
      <ThemeProvider theme={light}>
      <MemoryRouter>
        <LoginScreen />
      </MemoryRouter>
      </ThemeProvider>
    );

    jest.spyOn(AuthService, 'login').mockResolvedValue('token')
    
    fireEvent.change(getByLabelText('Username'), { target: { value: 'testuser' } });
    fireEvent.change(getByLabelText('Password'), { target: { value: 'testpassword' } });
    
    fireEvent.submit(getByText('Login'));
    

    await waitFor(() => {
      expect(AuthService.login).toHaveBeenCalledTimes(1);
      expect(AuthService.login).toHaveBeenCalledWith('testuser', 'testpassword');
    });
  })
})
