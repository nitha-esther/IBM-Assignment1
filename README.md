Node.js + Express.js Backend Project

This project is a simple backend application developed using **Node.js** and **Express.js** as part of an **IBM / KT (Knowledge Transfer) assignment**.  
It demonstrates the fundamentals of **RESTful API development**, including CRUD operations, request handling, and server setup using in-memory data storage.
## 📌 Project Overview

The objective of this project is to understand how a backend server works, how APIs are created using Express.js, and how HTTP methods such as GET, POST, PUT, and DELETE are used to perform operations on data.

This project does not use a database. Instead, it stores data temporarily in memory, which is acceptable for training and KT tasks.

---

## 📌 Tech Stack

- Node.js
- Express.js
- REST API
- JavaScript
- In-memory data storage
- CORS

---

## 📌 Features

- Express server setup
- RESTful API design
- CRUD operations:
  - Create
  - Read
  - Update
  - Delete
- JSON-based request and response handling
- CORS enabled for cross-origin requests
- Lightweight and beginner-friendly backend
- Ready to be pushed to GitHub

---

## 📌 Project Structure

node-express-backend/
│
├── server.js # Main server file
├── package.json # Project configuration and dependencies
├── package-lock.json
├── .gitignore # Ignored files (node_modules)
├── README.md # Project documentation

---

## 📌 API Endpoints

### 1️⃣ Health Check API
- **Method:** GET  
- **Endpoint:** `/`  
- **Description:**  
  Verifies whether the backend server is running successfully.

---

### 2️⃣ Create User
- **Method:** POST  
- **Endpoint:** `/users`  
- **Description:**  
  Adds a new user to the in-memory data store.

- **Request Body (JSON):**
```json
{
  "name": "Nitha",
  "department": "CSE",
  "email": "nitha@gmail.com"
}
