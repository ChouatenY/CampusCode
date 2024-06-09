## 🖥️ Online IDE Exam Platform

This application provides a platform for conducting exams online using an integrated IDE (Integrated Development Environment) for code-based questions. Students can write code in the IDE, view the result/output, and save their responses. The platform is designed to ensure exam integrity and convenience for both students and instructors.

### 🌟 Features

- **Question Management**: Instructors can add, edit, and delete questions for exams.
- **Integrated IDE**: Each question has a dedicated IDE where students can write code.
- **Result Box**: Next to the IDE, there's a result box that displays the output of the code.
- **Auto Save**: Students can save their code and result by clicking on the save button.
- **Full-Screen Exam Mode**: When accessing the exam, the browser enters full-screen mode to minimize distractions.
- **Automatic Session Termination**: If the exam duration elapses or the student closes the browser, the session is terminated automatically.
- **Student Registration**: Students are prompted to provide personal information (name, matricule, major, specialization, session, course code, semester) and consent to exam rules before starting the exam.
- **Admin Portal**: Instructors have access to an admin portal where they can manage questions, view student responses, and analyze exam data.

### 🛠️ Workflow

1. **Admin Frontend**: This part of the application is responsible for managing questions, viewing student responses, and administering exams.
   - Location: `/admin`
   - File Names: 
     - `AdminDashboard.js`: Main dashboard for the admin portal.
     - `QuestionForm.js`: Component for adding/editing questions.
     - `StudentResponses.js`: Component for viewing student responses.
     - `ExamAnalytics.js`: Component for analyzing exam data.

2. **Student Frontend**: This is the interface provided to students for taking exams.
   - Location: `/exam`
   - File Names:
     - `ExamPage.js`: Main page for the exam.
     - `IDE.js`: Component for the integrated IDE.
     - `ResultBox.js`: Component for displaying code output.
     - `StudentInfoForm.js`: Component for collecting student information.
     - `ConsentCheckbox.js`: Component for consent checkbox.

3. **Backend**: This handles the logic of saving questions, student responses, and managing exam sessions.
   - Location: `/backend`
   - File Names: 
     - `server.js`: Main server file.
     - `database.js`: Database integration for storing questions and student responses.
     - `sessionManager.js`: Logic for managing exam sessions and auto termination.

### 🚀 Development Setup

To start development:
1. Clone the repository.
2. Navigate to the respective frontend and backend directories.
3. Install dependencies using `npm install`.
4. Start the development server using `npm start`.
5. Access the application through the provided URL.

### 🤝 Contribution

Contributions are welcome! Please feel free to fork the repository, make changes, and submit pull requests.

### 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Feel free to customize this README according to your project structure and requirements! Let me know if you need further assistance.
