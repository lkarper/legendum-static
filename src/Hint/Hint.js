import React, { useState, useContext } from 'react';
import { withRouter } from 'react-router-dom';
import { v4 as uuid } from 'uuid';
import UserContext from '../contexts/UserContext';
import SaveHint from '../SaveHint/SaveHint';
import './Hint.css';

const Hint = (props) => {
    const context = useContext(UserContext);

    const { hint } = props;
    
    const [showAdd, toggleShowAdd] = useState(false);
    const [noteAdded, setNoteAdded] = useState(false);
   
    const handleSaveHint = (event, customNote) => {
        event.preventDefault();
        const exercise = context.exercises.find(e => e.chapter_number === parseInt(props.match.params.chapt));
        const note = {
            id: uuid(),
            hint_id: hint.id,
            custom_note: customNote,
            date_modified: new Date().toJSON(),
            user_id: context.user.id,
            chapter_number: exercise.chapter_number,
            exercise_title: exercise.exercise_title,
            exercise_translation: exercise.exercise_translation,
        }; 
        context.addNote(note);
        setNoteAdded(true);
    }

    return (
        <li>
            <p className='Hint__hint-text'>{hint.hint}</p>
            {Object.keys(context.user).length !== 0 
                ? 
                    <div className='Hint__add-hint-container'>
                        <button
                            className='Hint__toggle-show-add button' 
                            onClick={() => toggleShowAdd(!showAdd)}
                            disabled={noteAdded}    
                        >
                            {showAdd ? 'Nevermind' : 'Add Hint to Journal'}
                        </button>
                        {(showAdd && !noteAdded) && <SaveHint onSubmitHint={handleSaveHint} />}
                        {noteAdded && <p>Note saved successfully!</p>}
                    </div> 
                : ''
            }
        </li>
    );

}

export default withRouter(Hint);