import React, { useState, useEffect } from 'react';
import DialoguePage from '../DialoguePage/DialoguePage';
import STORE from '../STORE';
import './Story.css';

const Story = (props) => {
    const { chapt } = props.match.params;

    const [storyTitle, setStoryTitle] = useState('');
    const [dialogue, setDialogue] = useState([]);
    const [page, setPage] = useState(1);
    const [response, setResponse] = useState();    

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [props]);

    useEffect(() => {
        const dialogue = STORE.dialogue.find(d => d.chapter_number === parseInt(chapt));
        setStoryTitle(dialogue.story_title);
        setDialogue(dialogue.pages);
    }, [chapt]);

    return (
        <div className='Story__container'>
            {dialogue.length !== 0
                ? 
                    <>
                        <h2 className='Story__h2'>{storyTitle}</h2>
                        <DialoguePage 
                            data={{
                                response,
                                page,
                                setPage,
                                setResponse,
                                dialogue,
                                chapt,
                            }}
                        />
                    </>
                :
                    <>
                        <p className='Story__loading'>Loading...</p>
                    </>
            }
        </div>
    );
}

export default Story;