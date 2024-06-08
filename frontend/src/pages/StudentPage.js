import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ExamSession from '../components/Student/ExamSession';

const StudentPage = () => {
  const [exam, setExam] = useState(null);

  useEffect(() => {
    // Fetch exam details here
    const fetchExam = async () => {
      try {
        const response = await axios.get('http://localhost:5000/student/exam');
        setExam(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchExam();
  }, []);

  return (
    <div>
      {exam ? <ExamSession exam={exam} /> : <p>Loading...</p>}
    </div>
  );
};

export default StudentPage;
