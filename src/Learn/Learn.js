import React, { useState, useEffect } from 'react';
import LearnPage from '../LearnPage/LearnPage';
import STORE from '../STORE';
import './Learn.css';

const Learn = (props) => {
    const { chapt } = props.match.params;

    const [pages, setPages] = useState([]);
    const [page, setPage] = useState(1);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [props]);

    useEffect(() => {
        const learnPages = STORE.learn_pages.filter(p => p.chapter_number === parseInt(chapt));
        setPages(learnPages);
    }, [chapt]);

    return (
        <>
            {pages.length !== 0 
                ? 
                    <div className='Learn__container'>
                        <LearnPage
                            data={{
                                pages,
                                page,
                                chapt,
                                setPage,
                            }}
                        />
                    </div>
                : 
                    <p className='Learn__loading'>Loading...</p>
            }
        </>
    );
}

export default Learn;