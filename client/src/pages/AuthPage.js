import React, { useState, useContext } from 'react';
import { AuthContext } from '../context/Auth.context';
import { useHttp } from '../hooks/http.hook';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Alert from 'react-bootstrap/Alert';
import Card from 'react-bootstrap/Card';

export const AuthPage = () => {
  const auth = useContext(AuthContext);
  const { request, error } = useHttp();
  const [form, setForm] = useState({
    login: '', password: ''
  });

  const changeHandler = event => {
    setForm({ ...form, [event.target.name]: event.target.value });
  }

  const loginHandler = async (e) => {
    e.preventDefault();
    try {
      const data = await request('/api/auth/login', 'POST', { ...form });
      if (data) {
        auth.login(data.token, data.userLog, data.userId);
      }
    } catch (e) { }
  }

  return (
    <Row className='justify-content-md-center'>
      <Col xs lg='6' className=' mt-5'>
        <Card>
          <Card.Body>
            <h1>Authorization</h1>
            <Form onSubmit={loginHandler}>
              <Form.Group controlId='formBasicLogin'>
                <Form.Label>Login</Form.Label>
                <Form.Control
                  required
                  type='text'
                  name='login'
                  placeholder='Enter login'
                  value={form.login}
                  onChange={changeHandler}
                />
              </Form.Group>
              <Form.Group controlId='formBasicPassword'>
                <Form.Label>Password</Form.Label>
                <Form.Control
                  required
                  type='password'
                  name='password'
                  placeholder='Password'
                  value={form.password}
                  onChange={changeHandler} />
              </Form.Group>
              {error && <Alert variant='danger'>{error}</Alert>}
              <Button
                variant='primary'
                type='submit'>
                Login</Button>
            </Form>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  )
}