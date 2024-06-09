🖥️ Online IDE Exam Platform
This application provides a platform for conducting exams online using an integrated IDE (Integrated Development Environment) for code-based questions. Students can write code in the IDE, view the result/output, and save their responses. The platform is designed to ensure exam integrity and convenience for both students and instructors.

🌟 Features
Question Management: Instructors can add, edit, and delete questions for exams.
Integrated IDE: Each question has a dedicated IDE where students can write code.
Result Box: Next to the IDE, there's a result box that displays the output of the code.
Auto Save: Students can save their code and result by clicking on the save button.
Full-Screen Exam Mode: When accessing the exam, the browser enters full-screen mode to minimize distractions.
Automatic Session Termination: If the exam duration elapses or the student closes the browser, the session is terminated automatically.
Student Registration: Students are prompted to provide personal information (name, matricule, major, specialization, session, course code, semester) and consent to exam rules before starting the exam.
Admin Portal: Instructors have access to an admin portal where they can manage questions, view student responses, and analyze exam data.
🛠️ Workflow
Admin Frontend: This part of the application is responsible for managing questions, viewing student responses, and administering exams.

Location: /admin
File Names:
AdminDashboard.js: Main dashboard for the admin portal.
QuestionForm.js: Component for adding/editing questions.
StudentResponses.js: Component for viewing student responses.
ExamAnalytics.js: Component for analyzing exam data.
Student Frontend: This is the interface provided to students for taking exams.

Location: /exam
File Names:
ExamPage.js: Main page for the exam.
IDE.js: Component for the integrated IDE.
ResultBox.js: Component for displaying code output.
StudentInfoForm.js: Component for collecting student information.
ConsentCheckbox.js: Component for consent checkbox.
Backend: This handles the logic of saving questions, student responses, and managing exam sessions.

Location: /backend
File Names:
server.js: Main server file.
database.js: Database integration for storing questions and student responses.
sessionManager.js: Logic for managing exam sessions and auto termination.
🚀 Development Setup
To start development:

Clone the repository.
Navigate to the respective frontend and backend directories.
Install dependencies using npm install.
Start the development server using npm start.
Access the application through the provided URL.
🤝 Contribution
Contributions are welcome! Please feel free to fork the repository, make changes, and submit pull requests.

📄 License
This project is licensed under the MIT License - see the LICENSE file for details.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
