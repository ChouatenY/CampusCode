import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SubmissionList = () => {
  const [submissions, setSubmissions] = useState([]);

  useEffect(() => {
    const fetchSubmissions = async () => {
      try {
        const response = await axios.get('http://localhost:5000/admin/submissions');
        setSubmissions(response.data);
      } catch (error) {
        console.error('Error fetching submissions:', error);
      }
    };
    fetchSubmissions();
  }, []);

  return (
    <div>
      <h2>Student Submissions</h2>
      <ul>
        {submissions.map((submission, index) => (
          <li key={index}>
            <h3>{submission.studentName} ({submission.studentID})</h3>
            {submission.answers.map((answer, idx) => (
              <div key={idx}>
                <p><strong>Question:</strong> {answer.questionId}</p>
                <p><strong>Code:</strong> {answer.code}</p>
                <p><strong>Result:</strong> {answer.result}</p>
              </div>
            ))}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SubmissionList;
