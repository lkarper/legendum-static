import React, { useContext } from 'react';
import { Link } from 'react-router-dom'
import UserContext from '../contexts/UserContext';

const NextStory = (props) => {
    const context = useContext(UserContext);

    const exercises = [...context.exercises].sort((a, b) => a.chapter_number - b.chapter_number);

    const lastChapter = context.exercises.length ? [...context.exercises].sort((a, b) => b.chapter_number - a.chapter_number)[0].chapter_number : undefined;

    let nextChapter;

    exercises.forEach(exercise => {
        if (!nextChapter) {
            if (context.progress.length && context.progress.filter(p => p.chapter_number === exercise.chapter_number).length === 0) {
                nextChapter = exercise.chapter_number;
            }
        }
    });

    if (nextChapter) {
        return <Link className='Landing__link' to={`/game/story/${nextChapter}`}>Pick up where you left off (chapter {nextChapter})</Link>;
    } else if (context.progress.length === 0) {
        return <Link className='Landing__link' to={`/game/story/1`}>Start at Chapter 1</Link>;
    }
    
    return <Link className='Landing__link' to={`/game/story/${lastChapter}`}>Visit the last chapter again</Link>;
}

export default NextStory;