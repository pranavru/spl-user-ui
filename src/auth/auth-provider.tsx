import React, { useCallback } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { AUTH_TOKEN_KEY, USER_KEY, REMEMBER_ME_KEY } from './constants';
import { fetchData } from '../components/common/api-config';

interface User {
  _id: string;
  name: string;
  email: string;
  role: string;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string, rememberMe: boolean) => Promise<void>;
  logout: () => void;
  isLoading: boolean;
  error: string | null;
  isInitialized: boolean;
}

export const AuthContext = React.createContext<AuthContextType | null>(null);

export const useAuth = () => {
  const context = React.useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = React.useState<User | null>(null);
  const [isLoading, setIsLoading] = React.useState(true); // Start with loading true for initial auth check
  const [error, setError] = React.useState<string | null>(null);
  const [isInitialized, setIsInitialized] = React.useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const validateToken = useCallback(async () => {
    const token = localStorage.getItem(AUTH_TOKEN_KEY);
    const rememberMe = localStorage.getItem(REMEMBER_ME_KEY) === 'true';

    if (!token || !rememberMe) {
      setIsLoading(false);
      setIsInitialized(true);
      return;
    }

    try {
      const response = await fetchData('/users/me');
      
      setUser(response.data);
      
      if (location.pathname === '/login') {
        navigate('/zones');
      }
    } catch (err) {
      localStorage.removeItem(AUTH_TOKEN_KEY);
      localStorage.removeItem(USER_KEY);
    } finally {
      setIsLoading(false);
      setIsInitialized(true);
    }
  }, [navigate, location]);

  // Validate token and auto-login on mount
  React.useEffect(() => {
    validateToken();
  }, [validateToken]);

  const login = async (email: string, password: string, rememberMe: boolean) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetchData('/auth/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
      });

      const { token, user } = response;

      localStorage.setItem(AUTH_TOKEN_KEY, token);
      localStorage.setItem(USER_KEY, JSON.stringify(user));
      localStorage.setItem(REMEMBER_ME_KEY, rememberMe.toString());
      
      setUser(user);
      navigate('/zones');
    } catch (err: any) {
      setError(err.message || 'Failed to login');
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    localStorage.removeItem(AUTH_TOKEN_KEY);
    localStorage.removeItem(USER_KEY);
    setUser(null);
    navigate('/login');
  };

  if (!isInitialized) {
    return null; // Or a loading spinner
  }

  return (
    <AuthContext.Provider value={{ user, login, logout, isLoading, error, isInitialized }}>
      {children}
    </AuthContext.Provider>
  );
};
