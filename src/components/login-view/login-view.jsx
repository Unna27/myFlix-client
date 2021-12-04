import React from 'react';
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
//import './login-view.scss';

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
            <Form>
            <Form.Group controlId="formUsername">
              <Form.Label>Username:</Form.Label>
              <Form.Control type="text" placeholder="Enter Username" onChange={e => setUsername(e.target.value)} />
            </Form.Group>
      
            <Form.Group controlId="formPassword">
              <Form.Label>Password:</Form.Label>
              <Form.Control type="password" placeholder="Enter Password" onChange={e => setPassword(e.target.value)} />
            </Form.Group>
            
            <Button variant="primary" type="submit" onClick={handleSubmit}>
              Submit
            </Button>
            <Button variant="primary" type="button" onClick={handleRegister}>
              Register
            </Button>
          </Form>
    );
}