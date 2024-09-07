const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors"); // Import cors
const { GoogleGenerativeAI } = require("@google/generative-ai");
require("dotenv").config();

const app = express();

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);

app.use(cors()); // Add this line to enable CORS
app.use(bodyParser.json());
app.use(express.static("public"));

app.post("/chat", async (req, res) => {
  try {
    const userMessage = req.body.message;
    const modelParams = {
      model: "gemini-1.5-flash",
      temperature: 0.3,
      stop: ["\n"],
    };
    const model = genAI.getGenerativeModel(modelParams);
    const result = await model.generateContent([userMessage]);

    res.json({ reply: result.response.text() });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).send("An error occurred");
  }
});

app.listen(3000, () => {
  console.log("Server started on http://localhost:3000");
});
