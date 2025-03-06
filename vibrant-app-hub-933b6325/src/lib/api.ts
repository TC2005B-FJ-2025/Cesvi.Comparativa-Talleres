
import { toast } from 'sonner';

// Base URL for API - would point to Laravel backend
const API_BASE_URL = 'http://localhost:8000/api';

// Helper for making API requests
const fetchApi = async (
  endpoint: string,
  options: RequestInit = {}
): Promise<any> => {
  const url = `${API_BASE_URL}${endpoint}`;
  
  // Default headers
  const headers = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    ...options.headers,
  };
  
  // Include auth token if available
  const token = localStorage.getItem('auth_token');
  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }
  
  try {
    const response = await fetch(url, {
      ...options,
      headers,
    });
    
    // Parse response
    const data = await response.json();
    
    // Handle unsuccessful responses
    if (!response.ok) {
      throw new Error(data.message || 'Something went wrong');
    }
    
    return data;
  } catch (error) {
    // Handle errors
    console.error('API Error:', error);
    toast.error(error instanceof Error ? error.message : 'Network error');
    throw error;
  }
};

// Auth functions
export const authApi = {
  login: async (email: string, password: string) => {
    const data = await fetchApi('/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
    });
    
    // Save token to localStorage
    if (data.token) {
      localStorage.setItem('auth_token', data.token);
    }
    
    return data;
  },
  
  register: async (name: string, email: string, password: string) => {
    const data = await fetchApi('/register', {
      method: 'POST',
      body: JSON.stringify({ name, email, password }),
    });
    
    // Save token to localStorage if provided
    if (data.token) {
      localStorage.setItem('auth_token', data.token);
    }
    
    return data;
  },
  
  logout: async () => {
    await fetchApi('/logout', { method: 'POST' });
    localStorage.removeItem('auth_token');
  },
  
  getUser: async () => {
    return fetchApi('/user');
  },
};

// User API functions
export const userApi = {
  getUsers: async () => {
    return fetchApi('/users');
  },
  
  getUser: async (id: number) => {
    return fetchApi(`/users/${id}`);
  },
  
  createUser: async (userData: any) => {
    return fetchApi('/users', {
      method: 'POST',
      body: JSON.stringify(userData),
    });
  },
  
  updateUser: async (id: number, userData: any) => {
    return fetchApi(`/users/${id}`, {
      method: 'PUT',
      body: JSON.stringify(userData),
    });
  },
  
  deleteUser: async (id: number) => {
    return fetchApi(`/users/${id}`, {
      method: 'DELETE',
    });
  },
};

// Example of additional API modules you could add for your Laravel backend
export const dataApi = {
  getDashboardStats: async () => {
    return fetchApi('/dashboard/stats');
  },
  
  getChartData: async (period: string = 'month') => {
    return fetchApi(`/analytics/chart?period=${period}`);
  },
  
  getRecentActivity: async () => {
    return fetchApi('/activities/recent');
  },
};

export default {
  auth: authApi,
  users: userApi,
  data: dataApi,
};
