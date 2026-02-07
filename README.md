# 📊 Smart Sales Intelligence Dashboard

A full-stack machine learning web application that predicts sales based on year, month, product category, and region — built with **React + FastAPI + Machine Learning** and deployed online.

🔗 **Live Demo:** [https://smart-sales-intelligence-dashboard.vercel.app](https://smart-sales-intelligence-dashboard.vercel.app)
🔗 **Backend API:** [https://smart-sales-intelligence-dashboard.onrender.com](https://smart-sales-intelligence-dashboard.onrender.com)

---

## 🚀 Project Overview

I built this project to demonstrate end-to-end data science and full-stack development skills. The application uses a trained ML model to predict future sales and displays results in an modern interactive dashboard.

This project covers:

* Data analysis & preprocessing
* Machine learning model training
* REST API development
* Frontend dashboard UI
* Cloud deployment

---

## 🧠 Tech Stack

### Frontend

* React (Vite)
* Axios
* Recharts
* CSS

### Backend

* FastAPI
* Python
* Scikit-learn
* Pandas
* Joblib

### Deployment

* Frontend: Vercel
* Backend: Render
* GitHub for version control

---

## ✨ Features

* 📈 Sales prediction using ML model
* Interactive dashboard UI
* Real-time API communication
* Chart visualization of predictions
* Responsive design
* Cloud deployment

---

## 📂 Project Structure

```
sales-intelligence-dashboard/
│
├── backend/
│   ├── app.py
│   ├── eda.ipynb
│   ├── sales_prediction_model.pkl
│
├── frontend/
│   └── smart-sales-prediction-dashboard/
│
├── dataset/
│   └── sales.csv
│
└── README.md
```

---

## ⚙️ Installation (Run Locally)

### 1. Clone repository

```
git clone https://github.com/your-username/smart-sales-intelligence-dashboard.git
cd smart-sales-intelligence-dashboard
```

### 2. Backend setup

```
cd backend
pip install -r requirements.txt
uvicorn app:app --reload
```

Backend runs on:

```
http://127.0.0.1:8000
```

---

### 3. Frontend setup

```
cd frontend/smart-sales-prediction-dashboard
npm install
npm run dev
```

Frontend runs on:

```
http://localhost:5173
```

---

## 🔌 API Endpoint

### Predict Sales

```
POST /predict
```

Example request:

```
/predict?year=2018&month=6&category=Furniture&region=West
```

Response:

```json
{
  "predicted_sales": 337.56
}
```

---

## 📊 Machine Learning Model

The model was trained using historical sales data with:

* Feature engineering
* One-hot encoding
* Linear regression model
* Model serialization using Joblib

---

## 🎯 Future Improvements

* Advanced ML models (Random Forest / XGBoost)
* User authentication
* Dashboard analytics
* Historical prediction tracking
* Enhanced UI animations

---

## 👩‍💻 Author

**Swathi M.**

Software Engineer | React & AI Enthusiast

GitHub: [https://github.com/Swathyyyyy](https://github.com/Swathyyyyy)
