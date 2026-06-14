# Forge

Forge is a full-stack, AI-powered conversational platform designed to mirror modern chat applications like ChatGPT. Built with a robust MERN (MongoDB, Express, React, Node.js) architecture and integrated with the Gemini API, Forge allows users to start interactive conversation threads, manage history, and experience fluid, real-time response layouts with tailored markdown formatting and custom visual effects.

---


## 🌟 Features

- **Persistent Conversations**: Saves and maintains independent chat threads using custom MongoDB schemas.
- **Thread Control**: Full CRUD capabilities to seamlessly create, configure, or delete specific chat threads.
- **Sidebar & History Navigation**: A structured sidebar displaying historical chat threads chronologically for quick retrieval.
- **Gemini API Integration**: Direct utility abstraction handling communication with the Gemini LLM engine for dynamic replies.
- **Typing Micro-animations**: Real-time visual typing feedback effects that emulate a live-generation interface.
- **Rich Text Optimization**: Custom structural parsing to properly render multi-line and technical assistance responses.
- **Dynamic Interface Blocks**: UI assets including interactive dropdown selectors, global wrappers, and loading spinners.
- **Robust Error Isolation**: Structured try-catch middleware boundaries across endpoints to prevent production crashes.

---

## 🛠️ Tech Stack

### Frontend
- **Library**: React.js (Vite workflow environment)
- **State Management**: React Context API (`MyContext.jsx`)
- **Styling**: Modular Vanilla CSS 

### Backend
- **Runtime Environment**: Node.js
- **Framework**: Express.js
- **Database Engine**: MongoDB (via Object Data Modeling with Mongoose)
- **AI Engine**: Google Gemini API 

---

## 📂 Project Structure

```text
FORGE/
├── backend/
│   ├── models/
│   │   └── Thread.js
│   ├── routes/
│   │   └── chat.js
│   ├── utils/
│   │   └── geminiAi.js
│   ├── .env
│   ├── package-lock.json
│   ├── package.json
│   └── server.js
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   │   └── logo.png
│   │   ├── App.css
│   │   ├── App.jsx
│   │   ├── Chat.css
│   │   ├── Chat.jsx
│   │   ├── ChatWindow.css
│   │   ├── ChatWindow.jsx
│   │   ├── index.css
│   │   ├── main.jsx
│   │   ├── MyContext.jsx
│   │   ├── Sidebar.css
│   │   └── Sidebar.jsx
│   ├── eslint.config.js
│   ├── index.html
│   ├── package-lock.json
│   ├── package.json
│   └── vite.config.js
├── .gitignore
└── README.md
```


## 🚀 Deployment 

### Backend Configuration
1. Navigate to the **Render Dashboard** and choose **New Web Service**.
2. Connect repository containing the backend codebase.
3. Configure the runtime settings:
   - **Runtime**: `Node`
   - **Build Command**: `npm install`
   - **Start Command**: `node server.js`
4. Expand the **Advanced** section to inject the designated Environment Variables:
   - `MONGO_URI`
   - `GEMINI_API_KEY`
   - `PORT`: 

### Frontend Configuration
1. Choose **New Static Site** on the Render Dashboard.
2. Link connected repository matching the client directory root.
3. Configure the build parameters:
   - **Root Directory**: `frontend`
   - **Build Command**: `npm run build`
   - **Publish Directory**: `dist`
4. Implement routing rules if required to prevent 404 errors on browser refreshes by routing all paths back to `index.html`.

---

## 🔮 Future Improvements

- **User Authentication**: Implement JWT-based sessions or OAuth providers (Google, GitHub) to secure individual user profiles, database threads, and history clusters.
- **UI Themes**: Provide native light, dark, and specialized system configurations via custom CSS properties.
- **Voice Chat Input & Output**: Integrate speech-to-text for hands-free voice inputs and implement text-to-speech synthesis for vocalized AI responses.
- **Multimodal Image Uploads**: Enable users to upload images alongside their text prompts to leverage Gemini's vision capabilities for visual analysis and troubleshooting.
