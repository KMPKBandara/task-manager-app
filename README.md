# 📋 Task Manager Application

A full-stack task management application built with React (Vite), Node.js, Express, and MySQL. Features user authentication, CRUD operations for tasks, and a modern UI with Tailwind CSS.

<img width="1844" height="897" alt="Screenshot 2025-07-10 185748" src="https://github.com/user-attachments/assets/8450951d-0f3e-447b-a598-d18a2b931539" />
<img width="1862" height="881" alt="Screenshot 2025-07-10 185803" src="https://github.com/user-attachments/assets/5d54f1d4-c445-4325-bbd2-aa86e0911b0d" />
*Login & Register interfaces of the Task Manager*

## ✨ Features

- **User Authentication** 🔐
  - Secure registration and login
  - JWT-based authentication
  - Protected routes

- **Task Management** 📝
  - Create, read, update, and delete tasks
  - Mark tasks as complete/incomplete
  - Task filtering (All, Active, Completed)
  - Task descriptions support

- **Modern UI/UX** 🎨
  - Responsive design
  - Clean and professional interface
  - Smooth transitions and animations
  - Tailwind CSS styling

<img width="1083" height="874" alt="Screenshot 2025-07-10 185832" src="https://github.com/user-attachments/assets/4aa91ec1-0b0f-4f5a-be9c-b9c0b45533b9" />
*Main dashboard showing task management interface*

## 🛠️ Technology Stack

### Frontend
- React (Vite)
- Tailwind CSS
- Axios for API calls
- Context API for state management

### Backend
- Node.js
- Express.js
- MySQL (with Sequelize ORM)
- JWT for authentication

## 📦 Installation and Setup

### Prerequisites
- Node.js (v14 or higher)
- MySQL (via XAMPP or standalone)
- npm/yarn package manager

### Database Setup
1. Start MySQL server (via XAMPP or command line)
2. Create a new database:
```sql
CREATE DATABASE taskmanager;
```

### Backend Setup
1. Clone the repository
```bash
git clone https://github.com/yourusername/task-manager.git
cd task-manager
```

2. Navigate to server directory and install dependencies
```bash
cd server
npm install
```

3. Create `.env` file in the server directory
```env
MYSQL_DB=taskmanager
MYSQL_USER=root
MYSQL_PASSWORD=
MYSQL_HOST=localhost
JWT_SECRET=your_jwt_secret_here
PORT=5000
```

4. Start the backend server
```bash
npm run dev
```

### Frontend Setup
1. Open a new terminal and navigate to client directory
```bash
cd ../client
npm install
```

2. Start the frontend development server
```bash
npm run dev
```

The application should now be running at:
- Frontend: `http://localhost:5173`
- Backend: `http://localhost:5000`


## 🌟 Usage

### User Registration/Login
1. Access the application at `http://localhost:5173`
2. Click "Need an account? Register" to create a new account
3. Enter username and password
4. Login with your credentials

### Managing Tasks
- **Create Task:** Use the task form at the top of the dashboard
- **Edit Task:** Click the edit icon on any task
- **Delete Task:** Click the delete icon on any task
- **Complete Task:** Toggle the checkbox next to any task
- **Filter Tasks:** Use the filter bar to view All/Active/Completed tasks

## 🔧 API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - User login

### Tasks
- `GET /api/tasks` - Get all tasks
- `POST /api/tasks` - Create new task
- `PUT /api/tasks/:id` - Update task
- `DELETE /api/tasks/:id` - Delete task

## 🔒 Security Features

- Password hashing using bcrypt
- JWT-based authentication
- Protected API routes
- Input validation and sanitization

## 📱 Responsive Design

The application is fully responsive and works on:
- Desktop computers
- Tablets
- Mobile devices

<img width="567" height="807" alt="image" src="https://github.com/user-attachments/assets/1ecd8354-9114-4814-8360-52c6c4b9f805" />
*Mobile responsive interface*

## ⚙️ Configuration

### Environment Variables

#### Backend (`.env`)
```env
MYSQL_DB=taskmanager
MYSQL_USER=root
MYSQL_PASSWORD=
MYSQL_HOST=localhost
JWT_SECRET=your_jwt_secret_here
PORT=5000
```

## 🚀 Deployment

### Backend
1. Set up your production MySQL database
2. Update environment variables for production
3. Deploy to your preferred hosting service.

### Frontend
1. Build the production version:
```bash
cd client
npm run build
```
2. Deploy the `dist` folder to hosting service (e.g., Vercel, Netlify)

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## 👤 Author

Created by [Pramuditha Bandara]
- GitHub: [@KMPKBandara]([https://github.com/yourusername](https://github.com/KMPKBandara))
- LinkedIn: [Pramuditha Bandara]([https://linkedin.com/in/yourprofile](https://www.linkedin.com/in/pramuditha-bandara-897717251/))

## 🙏 Acknowledgments

- [React Documentation](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Express.js](https://expressjs.com/)
- [Sequelize](https://sequelize.org/)

---
