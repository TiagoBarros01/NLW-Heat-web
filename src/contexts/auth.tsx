import React, { createContext, useContext, useEffect, useState } from 'react';
import { IUser } from '../@types/User';
import { api } from '../services/api';

interface IAuthContextData {
  user: IUser | null;
  signInUrl: string;
}

interface IAuthResponse {
  token: string;
  user: IUser;
}

export const AuthContext = createContext<IAuthContextData>(
  {} as IAuthContextData
);

export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<IUser | null>(null);

  const signInUrl = `https://github.com/login/oauth/authorize?scope=user&client_id=edcb8c77ba41a6ce5910`;

  const signIn = async (githubCode: string) => {
    const response = await api.post<IAuthResponse>('authenticate', {
      code: githubCode,
    });

    const { token, user } = response.data;

    localStorage.setItem('@DoWhile:authToken', token);

    setUser(user);
  };

  useEffect(() => {
    (async () => {
      const token = localStorage.getItem('@DoWhile:authToken');

      if (!token) {
        console.log("You're not logged in");

        return;
      }

      api.defaults.headers.common.authorization = `Bearer ${token}`;

      const { data } = await api.get<IUser>('profile');

      setUser(data);
    })();
  }, []);

  useEffect(() => {
    const URL = window.location.href;
    const hasGithubCode = URL.includes('?code=');

    if (!hasGithubCode) {
      return;
    }

    const [urlWithoutCode, githubCode] = URL.split('?code=');

    window.history.pushState({}, '', urlWithoutCode);

    signIn(githubCode);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        signInUrl,
        user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const ctx = useContext(AuthContext);

  if (!ctx) {
    throw new Error('Something wrong with auth context');
  }

  return ctx;
};
