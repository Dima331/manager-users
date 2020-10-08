import { createContext } from 'react';

function plug() { };

export const AuthContext = createContext({
    token: null,
    userLog: null,
    login: plug,
    logout: plug,
    isAuthenticated: false
  });