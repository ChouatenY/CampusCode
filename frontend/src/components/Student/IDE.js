import React from 'react';

const IDE = ({ currentAnswer, setCurrentAnswer, setCurrentResult }) => {
  const handleRunCode = () => {
    // Simulate running code and generating a result
    const result = `Output of the code: ${currentAnswer}`;
    setCurrentResult(result);
  };

  return (
    <div>
      <textarea
        placeholder="Write your code here..."
        value={currentAnswer}
        onChange={(e) => setCurrentAnswer(e.target.value)}
      />
      <button onClick={handleRunCode}>Run Code</button>
    </div>
  );
};

export default IDE;
