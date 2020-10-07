import React from 'react';
import './PasswordChecklist.css';

const PasswordChecklist = (props) => {
    const { passwordError } = props;
    const { 
        tooShort,
        tooLong,
        endSpaces,
        upperCase,
        lowerCase,
        number,
        specialChar,
    } = passwordError;

    const checkMark = <span className='PasswordChecklist__check'>&#10004;</span>;
    const xMark = <span className='PasswordChecklist__x'>&#10006;</span>;

    return (
        <div>
            <p>Password must:</p>
            <ul>
                <li>Be at least 8 characters in length {tooShort ? xMark : checkMark}</li>
                <li>Be no more than 72 characters in length {tooLong ? xMark : checkMark}</li>
                <li>Not begin or end with a space {endSpaces ? xMark : checkMark}</li>
                <li>Contain at least one lowercase letter {lowerCase ? xMark : checkMark}</li>
                <li>Contain at least one uppercase letter {upperCase ? xMark : checkMark}</li>
                <li>Contain at least one number {number ? xMark : checkMark}</li>
                <li>Contain at least one special character (e.g. !, @, #, $, etc.) {specialChar ? xMark : checkMark}</li>
            </ul>
        </div>
    );
}

export default PasswordChecklist;