import React, { useState, useEffect } from 'react';
import DoPage from '../DoPage/DoPage';
import STORE from '../STORE';
import './Do.css';

const Do = (props) => {
    const { chapt } = props.match.params;

    const [pages, setPages] = useState([]);
    const [page, setPage] = useState(1);
    const [savedUserInput, setSavedUserInput] = useState({});

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [chapt]);

    useEffect(() => {
        const doPages = STORE.do_pages.filter(p => p.chapter_number === parseInt(chapt));
        setPages(doPages);
    }, [chapt]);

    return (
        <div className='Do__container'>
            {pages.length 
                ? 
                    <DoPage
                        data={{
                            chapt,
                            savedUserInput,
                            pages,
                            page,
                            setPage,
                            setSavedUserInput,
                        }}
                    />
                : 
                    <p className='Do__loading'>Loading...</p>
            }
        </div>
    );
}

export default Do;