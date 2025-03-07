# AI Integration API

## Overview
This is a simple AI-powered API built with Express.js that integrates with the **Flux.1 API** (based on OpenAI) to generate text responses. It provides an endpoint to receive user input and return AI-generated responses.

## Features
- Uses **Express.js** for the backend.
- Supports **CORS** for cross-origin requests.
- Accepts user input via JSON request.
- Connects to **Flux.1 API** to generate AI responses.
- Provides a simple home route.

## Technologies Used
- **Node.js**
- **Express.js**
- **CORS**
- **OpenAI API (Flux.1 API)**
- **dotenv** (for environment variables)

## Installation & Setup

### 1. Clone the Repository
```sh
git clone https://github.com/raneemmagdy/AI-integration-task.git
cd AI-integration-task
```

### 2. Install Dependencies
```sh
npm install
```

### 3. Set Up Environment Variables
Create a `.env` file in the project root and add the following variables:
```env
PORT=5000
FLUX_API_KEY=your_openai_api_key_here
BASE_URL=your_openai_base_url_here
```

### 4. Run the Server
```sh
npm run start
```
The server will start at: `http://localhost:5000`

## API Endpoints

### **1. Generate AI Response**
- **URL:** `/api/generate`
- **Method:** `POST`
- **Request Body:**
  ```json
  {
    "text": "Your input text here"
  }
  ```
- **Response:**
  ```json
  {
    "response": "Generated AI response here"
  }
  ```

### **2. Home Route**
- **URL:** `/`
- **Method:** `GET`
- **Response:**
  ```json
  {
    "message": "Welcome To Ai Api"
  }
  ```

## Deployment
This API is deployed on **Vercel** and can be accessed at:
🔗 **[AI Integration Task](https://ai-integration-task.vercel.app/)**



