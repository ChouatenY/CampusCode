const ExamSession = ({ exam }) => {
    const [answers, setAnswers] = useState([]);
    const [currentAnswer, setCurrentAnswer] = useState('');
    const [currentResult, setCurrentResult] = useState('');
  
    const handleSaveAnswer = async (questionId) => {
      const newAnswer = {
        questionId,
        code: currentAnswer,
        result: currentResult
      };
  
      setAnswers([...answers, newAnswer]);
  
      // Optionally send the answer to the server for real-time saving
      try {
        await axios.post('http://localhost:5000/student/save-answer', newAnswer);
      } catch (error) {
        console.error('Error saving answer:', error);
      }
  
      // Clear current answer and result
      setCurrentAnswer('');
      setCurrentResult('');
    };
  
    const handleSubmitExam = async () => {
      const submission = {
        studentName: 'Student Name', // Get this dynamically
        studentID: 'Student ID',     // Get this dynamically
        answers,
      };
  
      try {
        await axios.post('http://localhost:5000/student/submit', submission);
        alert('Exam submitted successfully!');
      } catch (error) {
        console.error('Error submitting exam:', error);
      }
    };
  
    return (
      <div>
        <h1>{exam.title}</h1>
        <h2>Duration: {exam.duration} minutes</h2>
        {exam.questions.map((question, index) => (
          <div key={index}>
            <h3>{question.questionText}</h3>
            <IDE
              currentAnswer={currentAnswer}
              setCurrentAnswer={setCurrentAnswer}
              setCurrentResult={setCurrentResult}
            />
            <ResultBox currentResult={currentResult} />
            <button onClick={() => handleSaveAnswer(question._id)}>Save Answer</button>
          </div>
        ))}
        <button onClick={handleSubmitExam}>Submit Exam</button>
      </div>
    );
  };
  
  export default ExamSession;
  