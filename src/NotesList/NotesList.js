import React, { useContext, useState, useEffect } from 'react';
import UserContext from '../contexts/UserContext';
import Note from '../Note/Note';
import NotesListFiltersForm from '../NotesListFiltersForm/NotesListFiltersForm';
import './NotesList.css';

const NotesList = (props) => {
    const context = useContext(UserContext);

    const [chapterFilter, setChapterFilter] = useState('all');
    const [notesToShow, setNotesToShow] = useState(context.notes);
    const [sortType, setSortType] = useState('rec');

    useEffect(() => {
        const notes = [...context.notes];

        if (sortType === 'old') {
            notes.sort((a, b) => new Date(a.date_modified) - new Date(b.date_modified));
        } else {
            notes.sort((a, b) => new Date(b.date_modified) - new Date(a.date_modified));
        }

        if (chapterFilter === 'all') {
            setNotesToShow(notes);
        } else {
            const notesFiltered = notes.filter(note => note.chapter_number === parseInt(props.chapt));
            setNotesToShow(notesFiltered);
        }
    }, [chapterFilter, sortType, context.notes, props.chapt])

    return (
        <div className={`NotesList__container-${props.suffix}`}>
            <h3 className={`NotesList__h3-${props.suffix}`}>Saved Notes:</h3>
            <NotesListFiltersForm 
                suffix={props.suffix}
                sortType={sortType}
                chapterFilter={chapterFilter}
                setSortType={setSortType}
                setChapterFilter={setChapterFilter}
            />
            {notesToShow.length !== 0 
                ?
                    <ol className='NotesList__ol'>
                        {notesToShow.map(note => <Note key={note.id} note={note} />)}
                    </ol>
                : 
                    <p>No notes saved yet.</p>
            }
        </div>
    );
}

export default NotesList;