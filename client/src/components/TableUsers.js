import React, { useContext } from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';

export const TableUsers = () => {

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
                        <tr>
                            <td><Form.Check type="checkbox" /></td>
                            <td>1</td>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>@mdo</td>
                            <td>@mdo</td>
                        </tr>
                        <tr>
                            <td><Form.Check type="checkbox" /></td>
                            <td>2</td>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                            <td>@mdo</td>
                            <td>@mdo</td>
                        </tr>
                        <tr>
                            <td><Form.Check type="checkbox" /></td>
                            <td>3</td>
                            <td colSpan="2">Larry the Bird</td>
                            <td>@twitter</td>
                            <td>@mdo</td>
                            <td>@mdo</td>
                        </tr>
                    </tbody>
                </Table>
            </Col>
        </Row>
    )
}