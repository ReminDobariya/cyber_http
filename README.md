# Simple Web Service using Node.js and Express 🚀

This is a simple HTTP-based web service built using **Node.js** and **Express**. The service provides basic API endpoints and is deployed on **Render**.

## 📌 Features  
- A simple REST API with JSON responses.  
- An endpoint to fetch user data.  
- Lightweight and easy to deploy.  


## 🛠️ Installation  

1. **Clone the repository**  
   ```bash
   git clone <your-repo-url>
   cd my-web-service
   ```

2. **Install dependencies**  
   ```bash
   npm install
   ```

3. **Run the server locally**  
   ```bash
   node server.js
   ```
   The service will run on **http://localhost:3000**.


## 📡 API Endpoints  

| Method | Endpoint      | Description |
|--------|-------------|-------------|
| GET    | `/`         | Welcome message |
| GET    | `/api/user` | Fetch sample user data |


## 🚀 Deployment on Render  

### **1. Push Code to GitHub**  
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin <your-repo-url>
git push -u origin main
```

### **2. Deploy on Render**
1. Go to [Render](https://render.com) and sign in.
2. Click **New Web Service** and connect your **GitHub repository**.
3. Set the **Start Command**:  
   ```bash
   node server.js
   ```
4. Click **Deploy**.

