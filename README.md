# 🏢 Apartment Rental & Buying Web Application

A full-stack web application that allows users to list, search, rent, or buy apartments with map-based location viewing and direct email booking with property owners.

---

## 📌 Features

- 🔐 User Authentication (Sign up / Login)
- 🏠 Apartment listings for both **Rent** and **Buy**
- 🔍 Search and filter properties by price and category
- 🖼 Image uploads for property listings
- 🗺 Map-based property location view
- 📧 Email-based booking and contact with property owners
- 💻 Responsive and user-friendly interface

---

## 🛠 Tech Stack

### Frontend
- React  
- SCSS  
- HTML  

### Backend
- Node.js  
- Express.js  

### Database
- MongoDB  
- Prisma ORM  
## Auth 
- jsonwebtoken
---

## ⚙️ Project Overview

- The frontend is built with **React** and **SASS** to provide a responsive and interactive UI.
- The backend is developed using **Node.js** and **Express** to handle authentication, APIs, and business logic.
- **Prisma ORM** is used with **MongoDB** for efficient database management.
- Users can search for apartments, view them on a map, upload images, and contact owners via email.

---

## 🚀 Getting Started

### Prerequisites
- Node.js
- MongoDB
- npm 

---

### Installation

1. Clone the repository
```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
Install backend dependencies
```
2. Install backend dependencies
```bash

cd backend
npm install
```
3. Install frontend dependencies
```bash
cd ../frontend
npm install
```
4. Environment Variables

Create a `.env` file in `/backend`:

```
MONGO_URI="mongodb+srv://<username>:<password>@<cluster>.mongodb.net/<database>?retryWrites=true&w=majority"
JWT_SECRET_KEY=your_jwt_secret
CLIENT_URL=http://localhost:5173
```

### Running the application

Backend 
```bash
cd backend
npm run dev
```
Frontend
```bash
cd frontend
npm run dev
```
