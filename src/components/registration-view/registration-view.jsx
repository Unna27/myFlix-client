import React from 'react';
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

    const handleSubmit = (e) => {
          e.preventDefault();
        console.log('registered');
        console.log(username.value, password.value, email.value, birthdate.value);
        // send to server for registering
        props.setRegister(true);
    }

    return (
        <Container>
            <Row>
                <Col>
                    <CardGroup>
                        <Card bg="light">
                        <Card.Header>Registration Form </Card.Header>
                            <Card.Body>
                                  <Form>
                                    <Form.Group>
                                        <Form.Label>Username: </Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Enter Username (minimum length: 5)"
                                            {...username}
                                            minLength="5"
                                            required
                                        />
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Label>Password:</Form.Label>
                                        <Form.Control
                                            type="password"
                                            placeholder="Enter Password"
                                            {...password}
                                            required
                                        />
                                    </Form.Group>

                                    <Form.Group>
                                        <Form.Label>E-mail:</Form.Label>
                                        <Form.Control
                                            type="email"
                                            placeholder="Enter E-mail Id"
                                            {...email}
                                            required
                                        />
                                    </Form.Group>

                                    <Form.Group>
                                        <Form.Label>Date of Birth:</Form.Label>
                                        <Form.Control
                                            type="date"
                                            placeholder="Enter Date of Birth"
                                            {...birthdate}
                                        />
                                    </Form.Group>

                                    <Button variant="primary" type="submit" onClick={handleSubmit}>Submit</Button>
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

// define the property types of the prop acquired
RegistrationView.propTypes = {
    setRegister: PropTypes.func.isRequired
}

export default RegistrationView;
