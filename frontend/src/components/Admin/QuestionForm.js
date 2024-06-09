import React, { useState } from 'react';
import './QuestionForm.css';  // Ensure to create and use this CSS file

const QuestionForm = ({ addQuestion }) => {
    const [question, setQuestion] = useState('');

    const handleAddQuestion = () => {
        if (question.trim()) {
            addQuestion(question);
            setQuestion('');
        }
    };

    return (
        <div className="form-group">
            <textarea
                placeholder="Enter question here..."
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
            />
            <button className="add-question-btn" onClick={handleAddQuestion}>Add Question</button>
        </div>
    );
};

export default QuestionForm;
