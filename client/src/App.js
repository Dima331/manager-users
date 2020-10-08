import React from 'react';
import { useRouters } from './routs';
import { BrowserRouter } from "react-router-dom"
import { AuthContext } from './context/Auth.context';
import { useAuth } from './hooks/auth.hook';
import { Loader } from './components/Loader';
import { Navigation } from './components/Navigation';
import Container from 'react-bootstrap/Container';

function App() {
  const { token, login, logout, userLog, ready, userId } = useAuth();
  const isAuthenticated = !!token;
  const routes = useRouters(isAuthenticated);
  
  if (!ready) {
    return <Loader />
  }

  return (
    <AuthContext.Provider value={{
      token, login, logout, userLog, userId, isAuthenticated
    }}>
      <BrowserRouter>
        <Navigation 
          isAuthenticated = {isAuthenticated} 
          userLogin = {userLog}/>
        <Container>
          {routes}
        </Container>
      </BrowserRouter>
    </AuthContext.Provider>
  )
}

export default App;
