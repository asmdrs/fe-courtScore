import { render, fireEvent, waitFor  } from '@testing-library/react';
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
  
  it('should render and succesfully login when service is called with correct data', async () => {
    
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

  it('should open toast component when login information is not correct', async () => {
    const spyOnLogin = jest.spyOn(AuthService, 'login');
    spyOnLogin.mockImplementationOnce(() => Promise.resolve(null));
    
    const { getByLabelText, getByText } = render(
      <ThemeProvider theme={light}>
        <MemoryRouter>
          <LoginScreen />
        </MemoryRouter>
      </ThemeProvider>
    );

    fireEvent.change(getByLabelText('Username'), { target: { value: 'wronguser' } });
    fireEvent.change(getByLabelText('Password'), { target: { value: 'wrongpassword' } });
    fireEvent.submit(getByText('Login'));

    await waitFor(() => {
      expect(getByText('Dados incorretos')).toBeInTheDocument();
      expect(AuthService.login).toHaveBeenCalledTimes(1);
      expect(AuthService.login).toHaveBeenCalledWith('wronguser', 'wrongpassword');
    });
  })

  
})
