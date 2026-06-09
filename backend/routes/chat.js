import express from "express";
import Thread from "../models/Thread.js";
import { ValidateRewardResponse } from "@google/genai";
import getGeminiAPIResponse from "../utils/geminiAi.js";

const router = express.Router();

router.post("/test", async (req, res) => {
  try {
    const thread = new Thread({
      threadId: "123xdfsyz",
      title: "Testing new Thread2"
    })

    const response = await thread.save();
    return res.status(200).json({ message: "Success" });

  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "failed to save in DB" });
  }
})

router.get("/thread", async (req, res) => {
  try {
    const threads = await Thread.find({}).sort({ updatedAt: -1 });
    return res.json(threads);

  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "failed to fetch threads" });
  }
})

router.get("/thread/:threadId", async (req, res) => {
  const { threadId } = req.params;
  try {
    const thread = await Thread.findOne({ threadId });

    if (!thread) {
      return res.status(404).json({ error: "Thread not found" });
    }

    return res.json(thread.messages);

  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "failed to fetch threads" });
  }
})

router.delete("/thread/:threadId", async (req, res) => {
  const { threadId } = req.params;
  try {
    const deletedThread = await Thread.findOneAndDelete({ threadId });

    if (!deletedThread) {
      return res.status(404).json({ error: "Thread not found" });
    }

    return res.status(200).json({ success: "Thread deleted successfully" });

  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "failed to fetch threads" });
  }
})

router.post("/chat", async (req, res) => {
  const { threadId, message } = req.body;

  if (!threadId || !message) {
    return res.status(400).json({ error: "missing required fields" });
  }
  try {
    let thread = await Thread.findOne({ threadId });

    if (!thread) {
      thread = new Thread({
        threadId,
        title: message,
        messages: [{ role: "user", content: message }]
      })
    } else {
      thread.messages.push({ role: "user", content: message })
    }

    await thread.save();

    let assistantReply = await getGeminiAPIResponse(message);

    if (!assistantReply) {
      assistantReply = "Sorry, I am unable to process that request right now.";
    }

    const cleanReply = typeof assistantReply === 'object' ? (assistantReply.text || JSON.stringify(assistantReply)) : assistantReply;

    thread.messages.push({ 
      role: "assistant", 
      content: cleanReply 
    });

    thread.updatedAt = new Date();

    await thread.save();
    return res.json({ reply: cleanReply });

  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "Something went wrong!" });
  }
})

export default router;