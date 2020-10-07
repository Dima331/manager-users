import React, { useContext } from 'react'
import { NavLink, useHistory } from 'react-router-dom'
import { AuthContext } from '../context/Auth.context'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';


export const Navigation = ({isAuthenticated, userLogin}) => {
    const auth = useContext(AuthContext)

    return (
        <Navbar bg="light" expand="lg">
            <Container>
                {!isAuthenticated &&
                <Nav className="mr-auto">
                    <Nav.Link href="/">Registration</Nav.Link>
                    <Nav.Link href="/auth">Auth</Nav.Link>
                    
                </Nav>
                }
                {isAuthenticated && 
                <Nav className="mr-auto">
                    {userLogin}
                    <NavLink to='/auth' onClick={() => auth.logout()}>Выход</NavLink>
                 </Nav>
                }
            </Container>
        </Navbar>
    )
}