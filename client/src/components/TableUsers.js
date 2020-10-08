import React, { useContext } from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';

export const TableUsers = ({ users, pick }) => {

    return (
        <Row className="justify-content-md-center">
            <Col xs lg="10" className=" mt-5">
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th ><Button
                                    variant="primary"
                                >Select all</Button>
                                <Button
                                    variant="primary"
                                >Remove all</Button></th>
                            <th>id</th>
                            <th>Login</th>
                            <th>Email</th>
                            <th>Data registration</th>
                            <th>Data last login</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users && users.map(user => {
                            return (
                                <tr key={user.id}>
                                    <td><Form.Check 
                                            type="checkbox" 
                                            name={user.id}
                                            onClick={(e) => pick(e)}
                                        /></td>
                                    <td>{user.id}</td>
                                    <td>{user.login}</td>
                                    <td>{user.email}</td>
                                    <td>{user.date_registration}</td>
                                    <td>{user.date_last_login}</td>
                                    <td>{!!+user.status ? 'not block': 'block' }</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </Table>
            </Col>
        </Row>
    )
}