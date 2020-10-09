import React, { useState, useContext } from 'react';
import { AuthContext } from '../context/Auth.context';
import { useHttp } from '../hooks/http.hook';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Alert from 'react-bootstrap/Alert';
import Card from 'react-bootstrap/Card';

export const RegistrationPage = () => {
  const auth = useContext(AuthContext);
  const { request, error } = useHttp();
  const [form, setForm] = useState({
    email: '', login: '', password: ''
  });

  const changeHandler = event => {
    setForm({ ...form, [event.target.name]: event.target.value });
  }

  const registerHandler = async (e) => {
    e.preventDefault();
    try {
      const data = await request('/api/auth/register', 'POST', { ...form });
      console.log(error)
      if (data) {
        auth.login(data.token, data.userLog, data.userId);
      }
    } catch (e) { }
  }

  return (
    <Row className="justify-content-md-center">
      <Col xs lg="6" className=" mt-5">
        <Card>
          <Card.Body>
            <h1>Registration</h1>
            <Form onSubmit={registerHandler}>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  required
                  type="email"
                  name="email"
                  placeholder="Enter email"
                  value={form.email}
                  onChange={changeHandler} />
              </Form.Group>
              <Form.Group controlId="formBasicLogin">
                <Form.Label>Login</Form.Label>
                <Form.Control
                  required
                  minLength="1"
                  maxLength="20"
                  type="text"
                  name="login"
                  placeholder="Enter login"
                  value={form.login}
                  onChange={changeHandler} />
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  required
                  minLength="1"
                  maxLength="20"
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={form.password}
                  onChange={changeHandler} />
              </Form.Group>
              {error && <Alert variant='danger'>{error}</Alert>}
              <Button
                variant="primary"
                type='submit'>
                Submit</Button>
            </Form>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  )
}