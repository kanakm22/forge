import { GoogleGenAI } from '@google/genai';
import 'dotenv/config';
import dotenv from 'dotenv';
import express from "express";
import cors from "cors";
import mongoose from 'mongoose';
import chatRoutes from "./routes/chat.js"

const app = express();
const PORT = 8080;

app.use(express.json());
app.use(cors());
app.use("/api", chatRoutes);

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
  connectDB();
})

const connectDB = async () =>{
  try{
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("DB CONNECTED");

  }catch(err){
    console.log("Failed to connect with DB",err);
  }
}

// app.post("/test", async (req, res) => {
//   const API_KEY = `${process.env.GEMINI_API_KEY}`;
//   const url = `https://generativelanguage.googleapis.com/v1beta/chat/completions?key=${API_KEY}`;

//   const options = {
//     method: "POST",
//     headers: {
//       "Authorization": `Bearer ${API_KEY}`,
//       "Content-Type": "application/json"
//     },
//     body: JSON.stringify({
//       model: "gemini-2.5-flash",
//       messages: [{
//         role: "user",
//         content: req.body.message
//       }]
//     })

//   }
//   try {
//     const response = await fetch(url,options);
//     const data = await response.json();
//     // console.log(data.choices[0].message.content);
//     res.send(data.choices[0].message.content);
//   } catch(err) {
//     console.log(err);

//   }
// })


// const ai = new GoogleGenAI();

// async function run() {
//   const response = await ai.models.generateContent({
//     model: 'gemini-2.5-flash',
//     contents: 'Explain quantum computing in one sentence.',
//   });

//   console.log(response.text);
// }

// run();

