import { AUTH_TOKEN_KEY } from "../../auth/constants";

const LOCAL_BASE_URL = 'http://localhost:3001/api';
const PROD_BASE_URL = 'https://api.example.com';
const STAGING_BASE_URL = 'https://staging-api.example.com';

const getBaseUrl = () => {
  if (import.meta.env.DEV && import.meta.env.MODE === 'staging') {
    return STAGING_BASE_URL;
  } else if (import.meta.env.PROD) {
    return PROD_BASE_URL;
  }

  return LOCAL_BASE_URL;
}

export const BASE_URL = getBaseUrl();

export const fetchData = async (path: string, options?: RequestInit) => {
  try {
    const response = await fetch(`${BASE_URL}${path}`, {
      method: 'GET', 
      headers: { 
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem(AUTH_TOKEN_KEY)}`,
      },
      ...options
    });
    
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    
    return data;

  } catch (error) {
    
    console.error('Error fetching data:', error);
    
    throw error;
  }
};