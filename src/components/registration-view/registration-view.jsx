import React from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types';
import './registration-view.scss';

const RegistrationView = props => {
    // added a custom hook useFormInputs to set all user fields and handle on Change event
    const username = useFormInputs('User1');
    const password = useFormInputs('');
    const email = useFormInputs('user1@gmail.com');
    const birthdate = useFormInputs('');

    const handleSubmit = (e) => {
        e.preventDefault(); // prevents the form from refreshing
        console.log('registered');
        console.log(username.value, password.value, email.value, birthdate.value);
        // send to server for registering
        props.setRegister(true);
    }

    return (
        <form class="container">
            <label>
                Username:
                <input type="text" placeholder="Enter Username" {...username}  />
            </label>
            <label>
                Password:
                <input type="password" placeholder="Enter Password" {...password} />
            </label>
            <label>
                E-mail:
                <input type="email" placeholder="Enter E-mail Id" {...email} />
            </label>
            <label>
                Date of Birth:
                <input type="date" placeholder="Enter Date of Birth" {...birthdate} />
            </label>
            <button type="submit" onClick={handleSubmit}>Submit</button>
        </form>
    );
}

function useFormInputs(initialValue){
    const [value, setValue] = useState(initialValue);
    const handleChange = e =>{
        setValue(e.target.value);
    }

    return {
        value,
        onChange: handleChange
    };
}

// define the property types of the prop acquired
RegistrationView.propTypes = {
    setRegister: PropTypes.string.isRequired
}

export default RegistrationView;
