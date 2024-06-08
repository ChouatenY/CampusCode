import React, { useState } from 'react';
import QuestionForm from './QuestionForm';
import SubmissionList from './SubmissionList';
import axios from 'axios';

const AdminDashboard = () => {
    const [questions, setQuestions] = useState([]);
    const [title, setTitle] = useState('');
    const [duration, setDuration] = useState(0);

    const addQuestion = (question) => {
        setQuestions([...questions, question]);
    };

    const createExam = async () => {
        try {
            const response = await axios.post('http://localhost:5000/admin/create-exam', {
                title,
                duration,
                questions,
            });
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <h1>Admin Dashboard</h1>
            <input
                type="text"
                placeholder="Exam Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <input
                type="number"
                placeholder="Duration (minutes)"
                value={duration}
                onChange={(e) => setDuration(Number(e.target.value))}
            />
            <QuestionForm addQuestion={addQuestion} />
            <button onClick={createExam}>Create Exam</button>
            <SubmissionList /> {/* Display the list of student submissions */}
        </div>
    );
};

export default AdminDashboard;
