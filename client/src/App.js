import React from 'react';
import { useRouters } from './routs';
import { BrowserRouter } from "react-router-dom"
import Container from 'react-bootstrap/Container';
import { AuthContext } from './context/Auth.context';
import { useAuth } from './hooks/auth.hook';
import { Loader } from './components/Loader';

function App() {
  const { token, login, logout, userId, ready } = useAuth()
  const isAuthenticated = !!token
  const routes = useRouters(isAuthenticated)

  if (!ready) {
    return <Loader />
  }

  return (
    <AuthContext.Provider value={{
      token, login, logout, userId, isAuthenticated
    }}>
      <BrowserRouter>
        <Container>
          {routes}
        </Container>
      </BrowserRouter>
    </AuthContext.Provider>
  )
}

export default App;
