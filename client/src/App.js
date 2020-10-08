import React from 'react';
import { useRouters } from './routs';
import { BrowserRouter } from "react-router-dom"
import Container from 'react-bootstrap/Container';
import { AuthContext } from './context/Auth.context';
import { useAuth } from './hooks/auth.hook';
import { Loader } from './components/Loader';
import { Navigation } from './components/Navigation';

function App() {
  const { token, login, logout, userLog, ready, userId } = useAuth()
  const isAuthenticated = !!token
  const routes = useRouters(isAuthenticated)
  
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
