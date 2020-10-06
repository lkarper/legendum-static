import React, { useState, useEffect, useContext, useCallback } from 'react';
import UserContext from './contexts/UserContext';
import Header from './Header/Header';
import Main from './Main/Main';
import STORE from './STORE';
import './App.css';

const useForceUpdate = () => {
    const [value, setValue] = useState(0); 
    return () => setValue(value + 1); 
}

const App = (props) => {
    const context = useContext(UserContext);
    const {
        setUser,
        user,
        setNotes,
        setProgress,
        setError,
        setExercises,
    } = context;

    const { exercises } = STORE;

    const forceUpdate = useForceUpdate();

    const getNotesPromise = useCallback(() => {
        return new Promise((res, rej) => {
            try {
                const userId = user.id;
                const notesByUser = STORE.notes.filter(n => n.user_id === userId);
                res(notesByUser);
            } catch(error) {
                rej(error);
            }
        });
    }, [user]);

    const getProgressPromise = useCallback(() => {
        return new Promise ((res, rej) => {
            try {
                const userId = user.id;
                const userProgress = STORE.progress.filter(p => p.user_id === userId);
                res(userProgress);
            } catch(error) {
                rej(error);
            }
        });
    }, [user]);

    useEffect(() => {
        setUser({
            id: 1,
            user_name: 'marcus1',
            display_name: 'Marcus',
        });
    }, [props, setUser]);

    useEffect(() => {
        setExercises(exercises);
    }, [props, exercises, setExercises])

    useEffect(() => {
        if (Object.keys(user).length !== 0) {
            Promise.all([getNotesPromise(), getProgressPromise()])
            .then(values => {
                const notes = values[0];
                const progress = values[1];
                setNotes(notes);
                setProgress(progress);
            })
            .catch(error => {
                setError(error.message);
            });
        }
    }, [user, setNotes, setProgress, setError, getNotesPromise, getProgressPromise]);

    return (
        <div className="App">
            <Header forceUpdate={forceUpdate} />
            <Main forceUpdate={forceUpdate} />
        </div>
    );
}

export default App;
