import api from '../utils/api';

class AuthService {
  async login(email: string, password: string): Promise<string | null> {
    try {
      const response = await api.post('/api/auth/login', { email, password });
      const token = response.data;
      localStorage.setItem('token', token);
      return token;
    } catch (error) {
      console.error('Erro ao fazer login:', error);
      return null;
    }
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }
}

export default new AuthService();