import express from "express";
import Thread from "../models/Thread.js";

const router = express.Router();

//test
router.post("/test", async(req,res) =>{
  try{
    const thread = new Thread({
      threadId: "123xdfsyz",
      title: "Testing new Thread2"
    })

    const response = await thread.save();
    res.status(200).json({ message: "Success" });

  }catch(err){
    console.log(err);
    res.status(500).json({error: "failed to save in DB"});

  }
})

// GET ALL THREADS
router.get("/thread",async(req, res)=>{
  try{
    const threads = await Thread.find({}).sort({updatedAt: -1});
    // DESCENDING ORDER OF UPDATED AT
    res.json(threads);


  }catch(err){
    console.log(err);
    res.status(500).json({error: "failed to fetch threads"});
  }
})

// SEND INFO OF A PARTICULAR THREAD
router.get("/thread/:threadId", async (req, res)=>{
  const {threadId} = req.params;
  try{
    const thread = await Thread.findOne({threadId});

    if(!threadId){
      res.status(404).json({error: "Thread not found"});
    }

    res.json(thread.messages);

  }catch(err){
    console.log(err);
    res.status(500).json({error: "failed to fetch threads"});
  }
})

// DELETE ROUTE
router.delete("/thread/:threadId", async(req, res)=>{
  const {threadId} = req.params;
  try{
    const deletedThread = await Thread.findOneAndDelete({threadId});

    if(!deletedThread){
      res.status(404).json({error: "Thread not found"});
    }

    res.status(200).json({success: "Thread deleted successfully"});


    

  }catch(err){
    console.log(err);
    res.status(500).json({error: "failed to fetch threads"});
  }
  
})


export default router;