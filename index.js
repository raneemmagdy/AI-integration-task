import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import { OpenAI } from "openai"; 
const app = express();
const PORT = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());
const api = new OpenAI({
  apiKey: process.env.FLUX_API_KEY, 
  baseURL:process.env.BASE_URL, 
});
app.post("/api/generate", async (req, res) => {
  const { text } = req.body;

  if (!text) {
    return res.status(400).json({ error: "Text is required" });
  }

  try {
    const completion = await api.chat.completions.create({
      model: "mistralai/Mistral-7B-Instruct-v0.2",
      messages: [
        { role: "system", content: "You are a helpful AI assistant." },
        { role: "user", content: text },
      ],
      temperature: 0.7,
      max_tokens: 256,
    });

    
    const response = completion.choices[0].message.content;

    res.status(200).json({ response });
  } catch (error) {
    console.error("Flux.1 API Error:", error.response?.data || error.message);
    res.status(500).json({ error: "Failed to fetch AI response" });
  }
});
app.get('/',(req,res,next)=>{
    res.status(200).json({message:'Welcome To Ai Api'})
})
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
