import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../context/Auth.context';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';


export const Navigation = ({isAuthenticated, userLogin}) => {
    const auth = useContext(AuthContext);

    return (
        <Navbar bg="primary" expand="lg">
            <Container>
                {!isAuthenticated &&
                <Nav className="mr-auto">
                    <Nav.Link href="/"><Button variant="success">Registration</Button></Nav.Link>
                    <Nav.Link href="/auth"><Button variant="light">Auth</Button></Nav.Link>
                </Nav>
                }
                {isAuthenticated && 
                <Nav className="mr-auto">
                    <h3 style={{ marginRight: '20px', color: '#fff'}}>{userLogin}</h3>
                    <NavLink to='/auth' onClick={() => auth.logout()}><Button variant="danger">Выход</Button></NavLink>
                 </Nav>
                }
            </Container>
        </Navbar>
    )
}