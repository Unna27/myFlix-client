import React from 'react';
import { useState } from 'react';
import { Form, Button, Container, Row, Col, Card, CardGroup } from 'react-bootstrap';
import './login-view.scss';

export function LoginView(props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); // prevents the form from refreshing
    console.log(username, password);
    // send to server for authentication

    props.onLoggedIn(username); // sets the user State var to the current logged in username
  }

  const handleRegister = (e) => {
    console.log('open registration form');
    props.setRegister(false); // sets the isRegistered State var to false
  }

  return (
    <Container> 
      <Row className="align-items-center">
        <Col>
          <CardGroup>
            <Card bg="light">
            <Card.Header>Login Page</Card.Header>
              <Card.Body>
                <Form>
                  <Form.Group controlId="formGroupUsername">
                    <Form.Label>Username:</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter Username"
                      onChange={e => setUsername(e.target.value)}
                      required />
                  </Form.Group>

                  <Form.Group controlId="formGroupPassword">
                    <Form.Label>Password:</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Enter Password"
                      onChange={e => setPassword(e.target.value)}
                      required />
                  </Form.Group>

                  <Row>
                    <Col>
                      <Button className='mt-2'
                        variant="primary"
                        type="submit"
                        onClick={handleSubmit}>
                        Submit
                      </Button>
                    </Col>

                    <Col>
                      <Button className='mt-2'
                        variant="primary"
                        type="button"
                        onClick={handleRegister}>
                        Register
                      </Button>                    
                    </Col>
                  </Row>

                </Form>
              </Card.Body>
            </Card>
          </CardGroup>
        </Col>
      </Row>
    </Container>

  );
}