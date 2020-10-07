import React, { useState, useEffect, useContext } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


export const RegistrationPage = () => {
    const [form, setForm] = useState({
        email: '', login: '', password: ''
    })

    const changeHandler = event => {
        setForm({ ...form, [event.target.name]: event.target.value })
    }

    return (
        <Row className="justify-content-md-center">
            <Col xs lg="6" className=" mt-5">
                <h1>Registration</h1>
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                            required
                            type="email"
                            name="email"
                            placeholder="Enter email"
                            value={form.email}
                            onChange={changeHandler}
                        />
                        <Form.Text className="text-muted" >  We'll never share your email with anyone else.</Form.Text>
                    </Form.Group>
                    <Form.Group controlId="formBasicLogin">
                        <Form.Label>Login</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            name="login"
                            placeholder="Enter login"
                            value={form.login}
                            onChange={changeHandler}
                        />
                        <Form.Text
                            className="text-muted"
                        >
                            We'll never share your email with anyone else.</Form.Text>
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            required
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={form.password}
                            onChange={changeHandler} />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit</Button>
                </Form>
            </Col>
        </Row>
    )
}