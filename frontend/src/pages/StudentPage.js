// src/pages/StudentPage.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import ExamSession from '../components/Student/ExamSession';

const StudentPage = () => {
  const { examCode } = useParams(); // Extract examCode from URL parameters
  const [exam, setExam] = useState(null);

  useEffect(() => {
    const fetchExam = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/student/exam/${examCode}`);
        setExam(response.data);
      } catch (error) {
        console.error('Error fetching exam:', error);
      }
    };

    fetchExam();
  }, [examCode]);

  return (
    <div>
      {exam ? <ExamSession exam={exam} /> : <p>Loading exam...</p>}
    </div>
  );
};

export default StudentPage;
