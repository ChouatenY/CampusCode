import React, { useState } from 'react';

const QuestionForm = ({ addQuestion }) => {
  const [questionText, setQuestionText] = useState('');

  const handleAddQuestion = () => {
    addQuestion({ questionText });
    setQuestionText('');
  };

  return (
    <div>
      <textarea
        placeholder="Question"
        value={questionText}
        onChange={(e) => setQuestionText(e.target.value)}
      />
      <button onClick={handleAddQuestion}>Add Question</button>
    </div>
  );
};

export default QuestionForm;
