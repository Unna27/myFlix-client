import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import PropTypes from 'prop-types';
import { Form, Button, Container, Row, Col, Card, CardGroup } from 'react-bootstrap';
import './registration-view.scss';

const RegistrationView = props => {
    // added a custom hook useFormInputs to set all user fields and handle on Change event
    const username = useFormInputs('User1');
    const password = useFormInputs('');
    const email = useFormInputs('user1@gmail.com');
    const birthdate = useFormInputs('');
    const [validated, setValidated] = useState(false);

    const handleSubmit = (e) => {
      e.preventDefault();
      const form=e.currentTarget; // get handle to current form
      if(form.checkValidity() === false) {
            e.stopPropagation(); 
      }else {
        console.log(username.value + password.value + email + birthdate);
        // send to server for registering
        axios.post('https://myflix-ur.herokuapp.com/users', {
        username: username.value,
        password: password.value,
        email: email.value,
        birthdate: birthdate.value
      }).then (response => {
        const data = response.data;
        console.log(data);
       // props.setRegister(true);
        //window.open('/movies', '_self'); // the second argument '_self' is necessary so that the page will open in the current tab
      }).catch(error =>{
        console.log("Registration failed - " + error);
      })
    } 
    setValidated(true);
    };

    return (
        <Container>
          <Row className="align-items-center">
            <Col>
              <CardGroup>
                <Card bg="light">
                  <Card.Header>Registration Form</Card.Header>
                  <Card.Body>
                    <Form id="myRegistration" noValidate validated={validated} onSubmit={handleSubmit}>
                      <Form.Group>
                        <Form.Label>Username: </Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter Username (minimum length: 5)"
                          {...username}
                          minLength="5"
                          required
                        />
                        <Form.Control.Feedback type="invalid">Please enter a username - minimum length should be 5</Form.Control.Feedback>
                      </Form.Group>

                      <Form.Group>
                        <Form.Label>Password:</Form.Label>
                        <Form.Control
                          type="password"
                          placeholder="Enter Password"
                          {...password}
                          required
                        />
                       <Form.Control.Feedback type="invalid">Please enter a valid password</Form.Control.Feedback>
                      </Form.Group>

                      <Form.Group>
                        <Form.Label>E-mail:</Form.Label>
                        <Form.Control
                          type="email"
                          placeholder="Enter E-mail Id"
                          {...email}
                          required
                        />
                        <Form.Control.Feedback type="invalid">Please enter a valid Email</Form.Control.Feedback>
                      </Form.Group>

                      <Form.Group>
                        <Form.Label>Date of Birth:</Form.Label>
                        <Form.Control
                          type="date"
                          placeholder="Enter Date of Birth"
                          {...birthdate}
                        />
                      </Form.Group>

                      <Button variant="primary" type="submit">Submit</Button>
                    </Form>
                  </Card.Body>
                </Card>
              </CardGroup>
            </Col>
          </Row>
        </Container>

    );
}

function useFormInputs(initialValue) {
    const [value, setValue] = useState(initialValue);
    const handleChange = e => {
        setValue(e.target.value);
    }

    return {
        value,
        onChange: handleChange
    };
}

export default RegistrationView;
