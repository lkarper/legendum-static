import React from 'react';
import { Link } from 'react-router-dom';
import './Landing.css';

const Landing = (props) => {
    return (
        <>
            <div className='Landing__image-container'>
                <div className="Landing__speech-bubble-container">
                    <div className="Landing__speech-bubble">
                        <p className='Landing__speech-text'>Welcome!</p>
                    </div>
                    <div aria-hidden='true' className='Landing__arrow-container'>
                        <div className='Landing__arrow left'></div>
                        <div className='Landing__arrow center'></div>
                        <div className='Landing__arrow right'></div>
                    </div>
                </div>
                <img
                    className='Landing__greeting-image' 
                    src='/images/enni.png'
                    alt='A friendly-looking, three-headed dog.'
                />
            </div>
            <section
                className='Landing__section'
            >
                <header>
                    <h2>What is Legendum?</h2>
                </header>
                <p>Legendum is a Latin learning app that uses stories, images, and short quizzes to teach Latin!</p>
                <p>This is a demo version of Legendum designed to get initial feedback from users. This means that the site is not yet hooked up to a back-end server.  You will be able to sample all of Legendum's features, but your progress will not be saved and your notes will disappear if you refresh the site. Upon page load, you will be automatically signed into a dummy account. If you log out, simply refresh the page and you will be logged back in automatically.</p>
                <p>This demo version of Legendum contains two chapter.  The goal is to release new chapters regularly in the future.</p>
                <p>After you test the app, please fill out this <a className="Landing__feedback-link" href="https://forms.gle/VrAvhA4pQ4SxARf89" target="_blank" rel="noopener noreferrer">form</a>!</p>
                <p>Thank you! Thank you! Thank you!</p>
            </section>
            <section
                className='Landing__section'
            >
                <header>
                    <h2>How does Legendum Work?</h2>
                </header>
                <p>Legendum was designed with two goals in mind: keep the learner engaged and build the learner's confidence.</p>
                <section
                    className='Landing__section'
                >
                    <header>
                        <h3>Engagement Through Stories and Images</h3>
                    </header>
                    <p>Legendum is designed like a game and users learn Latin by completing chapters in a story. The story is full of fun characters, charming images, and the occasional bit of witty banter.</p>
                    <p>Each chapter begins with a story in English that sets the scene.</p>
                    <p><Link to='/game/story/1'>Click here</Link> to get started with Chapter 1!</p>
                </section>
                <section
                    className='Landing__section'
                >
                    <header>
                        <h3>Build your Confidence with Comprehensible Input</h3>
                    </header>
                    <p>After the user reads through the story, the chapter's Latin lesson begins. Lessons are designed on the principles of Comprehensible Input. In short, proponents of this theory of language learning argue that the best way to learn a language is to be exposed to it without the filter of another language.</p>
                    <p>Legendum uses short sentences, repetition, and images to help students understand the Latin that they are reading without having to translate it in their heads!</p>
                    <p>There are, however, hints, explanations, and tips throughout the lesson that a user can toggle on and off. This means that users can avoid the stress of "not knowing" what's going on. Stress is a major impediment to language learning, so Legendum aims to make learning Latin as stress-free as possible!</p>
                    <p>Registered users can save the grammatical tidbits that are presented and can even add personal notes.</p>
                    <p>Too exicted about Latin to start with an English story? Jump right in and <Link to ='/game/exercises/1/learn'>starting learning with Exercise One</Link></p>  
                </section>
                <section
                    className='Landing__section'
                >
                    <header>
                        <h3>Test yourself with short quizzes</h3>
                    </header>
                    <p>Each lesson is followed by a short quiz that helps users gauge their comprehension and retention.</p>
                    <p>These quizzes are low-stress undertakings. If an incorrect answer is given, the user is presented with a short hint or explanation on why the answer is incorrect. Users can simply try again if they get the question wrong and overall "grades" are not kept. Registered users have access to their notes throughout.</p>
                    <p>Already know some Latin and want to test yourself out right away? <Link to='/game/exercises/1/do'>Try the first quiz!</Link></p>
                </section>
                <section
                    className='Landing__section'
                >
                    <header>
                        <h3>Keep Track of your Progress</h3>
                    </header>
                    <p>Registered users can track their progress through lessons and stories, see how many times they've completed each chapter, and access and edit their notes on the <Link to='/dashboard'>dashboard</Link>.</p>
                </section>
            </section>
        </>
    );
}

export default Landing;