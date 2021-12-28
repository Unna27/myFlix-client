import React from 'react';
import axios from 'axios';
import { useState } from 'react';

import { Form, Button, Container, Row, Col, Card, CardGroup } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './login-view.scss';

export function LoginView() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [validated, setValidated] = useState(false); // to check input validation
  
  const navigate=useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault(); // prevents the form from refreshing
    const form=e.currentTarget; // get handle to current form
    if(form.checkValidity() === false){
      console.log("input validation failed");
      //form.reportValidity();
      e.stopPropagation(); 
    }else{    
      console.log(username, password);
      // send to server for authentication
      axios.post('https://myflix-ur.herokuapp.com/login', {
        username: username,
        password: password
      }).then (response => {
        const data = response.data;
        localStorage.setItem('token', data.token);
        localStorage.setItem('user',  JSON.stringify(data.user));
        window.open('/movies','_self');
      }).catch(error =>{
        console.log("Authentication failed - " + error);
        window.alert("User details not correct");
        window.open('/','_self');
      })
    }
    // set the validated props to true so that the form.control.feedback messages will be displayed  
    setValidated(true);
  };
  
  const handleRegister = (e) => {
    console.log('open registration form');
    navigate("/register");
  }

  let loggedinUser =  window.localStorage.getItem('user');
 
  if(loggedinUser) return window.open('/movies','_self');

  return (
    <Container> 
      <Row className="align-items-center">
        <Col>
          <CardGroup>
            <Card bg="light">
            <Card.Header>Login Page</Card.Header>
              <Card.Body>
                <Form id="myLogin" noValidate validated={validated} onSubmit={handleSubmit}>
                  <Form.Group controlId="formGroupUsername">
                    <Form.Label>Username:</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter Username"
                      onChange={e => setUsername(e.target.value)}
                      minLength="5"
                      required />
                      <Form.Control.Feedback type="invalid">Please enter a valid username - minimum length of 5</Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group controlId="formGroupPassword">
                    <Form.Label>Password:</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Enter Password"
                      autoComplete="off"
                      onChange={e => setPassword(e.target.value)}
                      required
                      />
                      <Form.Control.Feedback type="invalid">Please enter a password</Form.Control.Feedback>
                  </Form.Group>

                  <Row>
                    <Col>
                      <Button className='mt-2'
                        variant="primary"
                        type="submit">
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
