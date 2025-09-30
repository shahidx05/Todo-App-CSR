# Full-Stack To-Do App (SPA & REST API)

A modern **To-Do Application** built with a RESTful API backend using **Node.js, Express, and MongoDB**, and a dynamic frontend using **Vanilla HTML, CSS, and JavaScript**. This project demonstrates a full-stack CRUD application with a clear separation of concerns using a **Client-Side Rendering (CSR)** architecture.

---
### 🔗 **See the original EJS version**
_This project is a modern SPA rebuild of my original server-side rendered To-Do App. You can find the EJS version [here](https://github.com/shahidx05/Todo-App-SSR) to see my progression as a developer._

---
## 🚀 Features

<!-- - **Full CRUD Functionality**: Add, edit, delete, and view tasks.
- **Dynamic UI**: Mark tasks as completed or pending with instant feedback.
- **No Page Reloads**: Filter tasks (All / Completed / Pending) seamlessly.
- **Efficient Management**: Delete all completed tasks with a single click.
- **Responsive Design**: A clean and modern interface for both mobile and desktop.

--- -->

### Backend (API)
- ✅ RESTful API endpoints for all CRUD (Create, Read, Update, Delete) operations.
- ✅ Efficient data filtering on the server-side (All, Completed, Pending).
- ✅ Data persistence using a MongoDB database.

### Frontend (SPA)
- ➕ Add, delete, and edit tasks dynamically.
- 🔄 Mark tasks as complete with instant UI feedback.
- 🔍 Filter tasks without any page reloads.
- 📱 A clean and fully responsive user interface.

---
## 🛠️ Tech Stack

### Backend
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js)
![Express](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb)

### Frontend
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript)
![HTML](https://img.shields.io/badge/HTML-E34F26?style=for-the-badge&logo=html5)
![CSS](https://img.shields.io/badge/CSS-1572B6?style=for-the-badge&logo=css3)

---
## 📸 Preview  
![Tod-Do App SPA Screenshot](/frontend/demo.png)

---
## 📂 Installation & Setup

This is a full-stack project with a separate backend and frontend.
```
/Todo-App-CSR/
├── /backend/
└── /frontend/
```

### **Backend Setup**

1.  **Clone the Repository**
    ```bash
    git clone [https://github.com/shahidx05/Todo-App-CSR](https://github.com/shahidx05/Todo-App-CSR)
    ```
2.  **Navigate to the Backend Directory**
    ```bash
    cd Todo-App-CSR/backend
    ```
3.  **Install Dependencies**
    ```bash
    npm install
    ```
4.  **Set Up Environment Variables**
    Create a `.env` file in the `/backend` folder and add your variables:
    ```
    MONGO_URI=your_mongodb_connection_string
    PORT=5000
    ```
5.  **Run the Server**
    ```bash
    npm start
    ```
    The API will now be running on `http://localhost:5000`.

---
### **Frontend Setup**

The frontend needs the backend server to be running to fetch and manage tasks.

1.  **Navigate to the Frontend Directory**
    ```bash
    cd ../frontend 
    ``` 
    (This command assumes you are in the `/backend` directory)

2.  **Open in Browser**
    Open the `index.html` file in your web browser. For the best experience, use a live server extension (like **Live Server** in VS Code).

    ```
    Your To-Do App is ready to use!
    ```