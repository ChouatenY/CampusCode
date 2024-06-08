import React from 'react';

const ResultBox = ({ currentResult }) => {
  return (
    <div>
      <h4>Result</h4>
      <pre>{currentResult}</pre>
    </div>
  );
};

export default ResultBox;
