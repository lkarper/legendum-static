import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import RegistrationForm from '../RegistrationForm/RegistrationForm';
import { v4 as uuid } from 'uuid';
import STORE from '../STORE';
import './Register.css';

const Register = (props) => {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [reenterPassword, setReenterPassword] = useState('');
    const [displayName, setDisplayName] = useState('');
    const [userNameError, setUserNameError] = useState(null);
    const [passwordErrorMessage, setPasswordErrorMessage] = useState([]);
    const [reenterPasswordError, setReenterPasswordError] = useState(null);
    const [displayNameError, setDisplayNameError] = useState(null);
    const [passwordError, setPasswordError] = useState({
        tooShort: true,
        tooLong: false,
        endSpaces: false,
        upperCase: true,
        lowerCase: true,
        number: true,
        specialChar: true,
    });
    const [apiError, setApiError] = useState(null);

    const checkUserNameTaken = (user_name) => {
        const userNameTaken = !!STORE.users.find(u => u.user_name === user_name)
        return userNameTaken;
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const userNameTaken = checkUserNameTaken(userName);
        if (userNameTaken) {
            setApiError('Username already taken');
            window.scrollTo(0, document.querySelector('.Register__alert-div').offsetTop - document.querySelector('.Header__header').offsetHeight);
        } else {
            STORE.users.push({
                id: uuid(),
                user_name: userName,
                password,
                display_name: displayName
            });
            setUserName('');
            setPassword('');
            setDisplayName('');
            setApiError(null);
            props.history.push('/login');
        }
    }

    return (
        <section className='Register__section'>
            <h2>Register</h2>
            <RegistrationForm 
                propsObject={{
                    userName,
                    password,
                    reenterPassword,
                    displayName,
                    userNameError,
                    passwordErrorMessage,
                    reenterPasswordError,
                    displayNameError,
                    passwordError,
                    setUserName,
                    setPassword,
                    setReenterPassword,
                    setDisplayName,
                    setUserNameError,
                    setPasswordErrorMessage,
                    setReenterPasswordError,
                    setDisplayNameError,
                    setPasswordError,
                    handleSubmit,
                }}
            />
            <div 
                role="alert"
                className="Register__alert-div"
            >
                {apiError 
                    ?
                        <>
                            <h2>Error</h2>
                            <p>New user could not be created: {apiError}</p>
                            {apiError === 'Username already taken'
                                ? 
                                    <p>The username '{userName}' is already linked to a registered account. If that account belongs to you, <Link to='/login'>click here</Link> to login.</p>
                                : 
                                    ''
                            }
                        </> 
                    : 
                        ''
                }
            </div> 
        </section>
    );
}

export default Register;