import React, { useState } from 'react';
import QuestionForm from './QuestionForm';
import SubmissionList from './SubmissionList';
import axios from 'axios';
import './AdminDashboard.css';

const AdminDashboard = () => {
    const [questions, setQuestions] = useState([]);
    const [title, setTitle] = useState('');
    const [courseTitle, setCourseTitle] = useState('');
    const [duration, setDuration] = useState('1');
    const [examCode, setExamCode] = useState('');
    const [showSubmissions, setShowSubmissions] = useState(false);

    const addQuestion = (question) => {
        setQuestions([...questions, question]);
    };

    const createExam = async () => {
        try {
            const response = await axios.post('http://localhost:5000/admin/create-exam', {
                title,
                courseTitle,
                duration: Number(duration),
                examCode,
                questions,
            });
            console.log(response.data);
        } catch (error) {
            // Remove the error log message
        }
    };

    return (
        <div className="admin-dashboard-page">
            <div className="admin-dashboard">
                <div className="card">
                    <h1>Admin Dashboard</h1>
                    <div className="form-group">
                        <input
                            type="text"
                            placeholder="Exam Title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            placeholder="Course Title"
                            value={courseTitle}
                            onChange={(e) => setCourseTitle(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <select
                            value={duration}
                            onChange={(e) => setDuration(e.target.value)}
                        >
                            <option value="1">1 hour</option>
                            <option value="2.5">1.5 hours</option>
                            <option value="2">2 hours</option>
                            <option value="2.5">2.5 hours</option>
                            <option value="2.5">3 hours</option>
                            <option value="2.5">3.5 hours</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            placeholder="Exam Code"
                            value={examCode}
                            onChange={(e) => setExamCode(e.target.value)}
                        />
                    </div>
                </div>
                <div className="card">
                    <QuestionForm addQuestion={addQuestion} />
                    <div className="questions-list">
                        <h2>Questions</h2>
                        {questions.length > 0 ? (
                            <ul>
                                {questions.map((question, index) => (
                                    <li key={index}>{question}</li>
                                ))}
                            </ul>
                        ) : (
                            <p>No questions added yet.</p>
                        )}
                    </div>
                </div>
                <div className="card">
                    <button className="create-exam-btn" onClick={createExam}>Create Exam</button>
                    <button className="view-submissions-btn" onClick={() => setShowSubmissions(!showSubmissions)}>
                        {showSubmissions ? 'Hide Submissions' : 'View Submissions'}
                    </button>
                    {showSubmissions && <SubmissionList />}
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;
