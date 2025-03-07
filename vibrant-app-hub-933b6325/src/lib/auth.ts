import api from "./axios";

export interface User {
  id: number;
  name: string;
  email: string;
  created_at: string;
  updated_at: string;
}

export interface LoginResponse {
  access_token: string;
  token_type: string;
  user: User;
}

export const auth = {
  async login(email: string, password: string): Promise<LoginResponse> {
    await api.get("/sanctum/csrf-cookie");

    const response = await api.post<LoginResponse>("/login", {
      email,
      password,
    });
    localStorage.setItem("token", response.data.access_token);
    return response.data;
  },

  async register(
    name: string,
    email: string,
    password: string
  ): Promise<LoginResponse> {
    await api.get("/sanctum/csrf-cookie");

    const response = await api.post<LoginResponse>("/register", {
      name,
      email,
      password,
    });
    localStorage.setItem("token", response.data.access_token);
    return response.data;
  },

  async logout(): Promise<void> {
    await api.post("/logout");
    localStorage.removeItem("token");
  },

  async getUser(): Promise<User> {
    const response = await api.get<User>("/user");
    return response.data;
  },

  getToken(): string | null {
    return localStorage.getItem("token");
  },

  isAuthenticated(): boolean {
    return !!this.getToken();
  },
};
