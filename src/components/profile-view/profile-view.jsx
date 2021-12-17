import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Form, Button, Container, Row, Col, Card, CardGroup } from 'react-bootstrap';
import Home from '../../routes/Home';

import './profile-view.scss';

const ProfileView = () => {
  const user = JSON.parse(window.localStorage.getItem('user'));
  if(!user) return <Home />
  
  const token = window.localStorage.getItem('token');

  // added a custom hook useFormInputs to set all user fields and handle on Change event
  //const username = useFormInputs(user.username);
  //const password = useFormInputs(user.password);
  const bDate = new Date(user.birthdate).toLocaleDateString('en-CA');
  console.log(bDate);
  const email = useFormInputs(user.email);
  const birthdate = useFormInputs(bDate);
  const [isDisabled, setIsDisabled] = useState(true);
  const [validated, setValidated] = useState(false); // to check input validation
  console.log(user);

  const handleClick = () => {
    setIsDisabled(!isDisabled)
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form=e.currentTarget; // get handle to current form
    if(form.checkValidity() === false) {
      e.stopPropagation(); 
    }else {
      const url=`https://myflix-ur.herokuapp.com/users/${user.username}`;
      console.log(token);
      // send to server for updating 
      axios.put(url, {
      email: email.value,
      birthdate: birthdate.value
    },  {
        headers: { Authorization: `Bearer ${token}`}
      }).then (response => {
      const data = response.data;
      console.log(data);
      //set user state with updated value
      window.localStorage.clear();
      window.alert('Please login to continue');
      window.open('/','_self');
    }).catch(error =>{
      console.log("Update failed - " + error);
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
              <Card.Header>My Profile View</Card.Header>
              <Card.Body>
                <Form id="myDetails" noValidate validated={validated} onSubmit={handleSubmit} >
                   <Form.Group>
                    <Form.Label>E-mail:</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Enter E-mail Id"
                      {...email}
                      disabled={isDisabled}
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
                      disabled={isDisabled}
                    />
                  </Form.Group>

                  <Button className={isDisabled ? '' : 'hidden'}  type="button" onClick={handleClick}> Edit </Button>

                  <Button className={isDisabled ? 'hidden' : ''} variant="primary" type="submit">Submit</Button>
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

export default ProfileView;
