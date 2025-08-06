# 🎶 EchoVerse – Where the Audio Meets Intelligence

![Python](https://img.shields.io/badge/Python-3.10-blue)
![React](https://img.shields.io/badge/Frontend-React-lightblue)
![TensorFlow](https://img.shields.io/badge/DeepLearning-TensorFlow-orange)
![Firebase](https://img.shields.io/badge/Backend-Firebase-yellow)
![MongoDB](https://img.shields.io/badge/Database-MongoDB-brightgreen)
![License](https://img.shields.io/badge/License-MIT-lightgrey)

---

> **EchoVerse** is a deep learning-powered web application that classifies **Carnatic ragas** from user input—either by recording live audio or typing a song.  
> Built and tested end-to-end as part of a mini project, it delivers intelligent raga detection with a user-friendly interface.  
> 🧠 *"Where the Audio Meets Intelligence"*

---

## 🌟 Features

- 🎙️ Record live audio and detect the raga in real-time  
- 🔤 Enter song name to identify the raga  
- 🎼 View raga information and get similar song recommendations  
- 🔐 User authentication with Firebase  
- ☁️ Audio storage in Firebase and results saved in MongoDB  
- 💡 Deep learning model integration using Python (TensorFlow)  

---

## 🧠 Tech Stack

| Component        | Technology                         |
|------------------|-------------------------------------|
| Frontend         | React, Tailwind CSS                 |
| Backend          | Node.js or Python (Flask/FastAPI)   |
| ML Model         | Python, TensorFlow, librosa         |
| Authentication   | Firebase Auth                       |
| Storage          | Firebase Storage                    |
| Database         | MongoDB Atlas                       |
| Hosting/Infra    | Firebase, Render / Railway (API)    |

---

## 🚀 Demo Preview

🎥 You can also check out the [📺 Demo Video on Google Drive](https://drive.google.com/file/d/1jaP41IMY0hifIRQnjzRWlR7rRCXgkRfx/view?usp=sharing)

---

## 📁 Project Structure

```
echoverse-app/
├── frontend/        # React UI
├── backend/         # FastAPI or Flask API
├── ml-model/        # Deep learning model scripts
├── data/            # Static data like raga info
└── README.md
```

---

## ⚙️ Installation & Setup Guide

### 🔹 1. Prerequisites

Make sure you have the following installed:

- Node.js and npm
- Python 3.10+
- MongoDB Atlas account (free tier)
- Firebase account and project

---

### 🔹 2. Clone the Repository

```bash
git clone https://github.com/yourusername/echoverse-app.git
cd echoverse-app
```

---

### 🔹 3. Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

> Runs the frontend at [http://localhost:5173](http://localhost:5173)

---

### 🔹 4. Backend Setup

```bash
cd backend
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
pip install -r requirements.txt
uvicorn app:app --reload
```

> Runs the backend at [http://localhost:8001](http://localhost:8001)

---

### 🔹 5. Firebase Configuration

1. Create a Firebase project at https://console.firebase.google.com  
2. Enable **Authentication** (Email/Password or Google)  
3. Enable **Firebase Storage**  
4. Create a Web App and copy config into `.env` in `frontend/`:

```env
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_project_id.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project_id.appspot.com
VITE_FIREBASE_APP_ID=your_app_id
```

---

### 🔹 6. MongoDB Atlas Configuration

1. Go to https://www.mongodb.com/cloud/atlas  
2. Create a free cluster, DB, and collection (e.g., `recordings`)  
3. Whitelist your IP  
4. Add Mongo URI in `.env` in `backend/`:

```env
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/echoverse
```

---

## 📚 Dataset

- 10 Carnatic ragas  
- 30+ audio clips per raga  
- Labeled `.csv` and `.wav` files inside `/ml-model/dataset`

---

## 🛡️ License

This project is licensed under the **MIT License** – see the [LICENSE](LICENSE) file for details.

---

## 🙌 Acknowledgements

- TensorFlow, librosa for ML & audio processing  
- Firebase and MongoDB Atlas for infrastructure  
- Inspired by the art of Carnatic music 🎶

---

## 🤝 Contributing

Contributions are welcome!  
Feel free to open an issue, fork the repo, and submit a pull request.

---


