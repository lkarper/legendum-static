import React from 'react';
import NextStory from '../NextStory/NextStory';
import NotesList from '../NotesList/NotesList';
import ProgressReport from '../ProgressReport/ProgressReport';
import './Dashboard.css';

const Dashboard = () => {
    return (
        <section className='Dashboard__outer-section'>
            <h2>Dashboard</h2>
            <NextStory />
            <ProgressReport />
            <NotesList suffix='dashboard' />
        </section>
    );
}

export default Dashboard;