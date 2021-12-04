import React from 'react';
import { useState } from 'react';
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
        <form class="container">
            <label>
                Username:
                <input type="text" placeholder="Enter Username" value={username} onChange={e => setUsername(e.target.value)} />
            </label>
            <label>
                Password:
                <input type="password" placeholder="Enter Password" value={password} onChange={e => setPassword(e.target.value)} />
            </label>
            <button type="submit" onClick={handleSubmit}>Submit</button>
            <button type="button" onClick={handleRegister}>Register</button>
        </form>
    );
}