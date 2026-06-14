import 'dotenv/config';
import express from "express";
import cors from "cors";
import mongoose from 'mongoose';
import chatRoutes from "./routes/chat.js"

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(cors({
    origin: [
        'http://localhost:5173', 
        'https://forge-sy7r.onrender.com' 
    ],
    credentials: true
}));
app.use("/api", chatRoutes);

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("DB CONNECTED");
    
    app.listen(PORT, () => {
      console.log(`Server running safely on port ${PORT}`);
    });

  } catch(err) {
    console.log("Failed to connect with DB", err);
    process.exit(1); // Exit the process if core infrastructure fails to load
  }
}

connectDB();