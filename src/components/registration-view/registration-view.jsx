import { useState } from "react";
import React from 'react';
import './registration-view.scss';

export function RegistrationView(props) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [birthdate, setBirthDate] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault(); // prevents the form from refreshing
        console.log('registered');
        console.log(username, password, email, birthdate);
        // send to server for registering
        props.setRegister(true);
    }

    return (
        <form class="container">
            <label>
                Username:
                <input type="text" placeholder="Enter Username" value={username} onChange={e => setUsername(e.target.value)} />
            </label>
            <label>
                Password:
                <input type="password" placeholder="Enter Password" value={password} onChange={e => setPassword(e.target.value)} />
            </label>
            <label>
                E-mail:
                <input type="email" value={email} placeholder="Enter E-mail Id" onChange={e => setEmail(e.target.value)} />
            </label>
            <label>
                Date of Birth:
                <input type="date" value={birthdate} placeholder="Enter Date of Birth" onChange={e => setBirthDate(e.target.value)} />
            </label>
            <button type="submit" onClick={handleSubmit}>Submit</button>
        </form>
    );
}