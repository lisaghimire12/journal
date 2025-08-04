import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import axios from "axios"; 

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.post("/generate-reminder", async (req, res) => {
  try {
    const { topic } = req.body;
    console.log("Received topic", topic);

    const response = await axios.post(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        model: "deepseek/deepseek-chat:free", 
        messages: [
          {
            role: "system",
            content: "You are a helpful assistant that gives positive reminders.",
          },
          {
            role: "user",
            content: `Give me a short positive reminder about ${topic}`,
          },
        ],
        max_tokens: 50,
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`, 
          "Content-Type": "application/json",
          "HTTP-Referer": "http://localhost:3000",
          "X-Title": "ReactReminderApp",
        },
      }
    );

    const reminder = response.data.choices[0].message.content;
    console.log("Generated reminder", reminder);
    res.json({ reminder });
  }  catch (error) {
  console.error("OpenRouter error:");
  if (error.response) {
    console.error("Status:", error.response.status);
    console.error("Data:", error.response.data);
  } else if (error.request) {
    console.error("No response received:", error.request);
  } else {
    console.error("Error message:", error.message);
  }
  console.error("Full error:", error); // ← ADD THIS
  res.status(500).json({ error: "Something went wrong" });
}
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
