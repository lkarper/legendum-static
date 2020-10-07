import React, { useState, useContext } from 'react';
import UserContext from '../contexts/UserContext';
import LoginForm from '../LoginForm/LoginForm';
import STORE from '../STORE';

const LoginPage = (props) => {
    const { 
        forceUpdate,
        location,
        history,
    } = props;

    const context = useContext(UserContext);

    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

    const getNotesPromise = () => {
        return new Promise((res, rej) => {
            try {
                const userId = context.user.id;
                const notesByUser = STORE.notes.filter(n => n.user_id === userId);
                res(notesByUser);
            } catch(error) {
                rej(error);
            }
        });
    }

    const getProgressPromise = () => {
        return new Promise ((res, rej) => {
            try {
                const userId = context.user.id;
                const userProgress = STORE.progress.filter(p => p.user_id === userId);
                res(userProgress);
            } catch(error) {
                rej(error);
            }
        });
    }

    const onLoginSuccess = () => {
        const destination = (location.state || {}).from || '/dashboard';
        Promise.all([getNotesPromise(), getProgressPromise()])
            .then(values => {
                const notes = values[0];
                const progress = values[1];
                context.setNotes(notes);
                context.setProgress(progress);
                forceUpdate();
                history.push(destination);
            })
            .catch(error => {
                context.setError(error.message);
            });
    }

    const handleLogin = (event) => {
        event.preventDefault();
        setError(null);
        const user = STORE.users.find(u => u.user_name === userName && u.password === password);
        if (!user) {
            setError('Username or password incorrect. Check your connection and input and try again');
        } else {
            context.setUser({
                id: user.id,
                user_name: user.user_name,
                display_name: user.display_name,
            });
            setUserName('');
            setPassword('');
            onLoginSuccess();
        }
    }
 
    return (
        <LoginForm 
            userName={userName}
            password={password}
            setUserName={setUserName}
            setPassword={setPassword}
            handleLogin={handleLogin}
            error={error}
        />
    );
}

export default LoginPage;