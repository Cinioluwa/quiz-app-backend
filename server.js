const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Sample Quiz Questions
const questions = [
  {
    id: 1,
    question: "What is the capital of France?",
    options: ["Berlin", "Madrid", "Paris", "Rome"],
    answer: "Paris",
  },
  {
    id: 2,
    question: "Which programming language is used for web development?",
    options: ["Python", "JavaScript", "C++", "Java"],
    answer: "JavaScript",
  },
];

// Routes
// Get all questions
app.get("/api/questions", (req, res) => {
  res.json(questions);
});

// Submit answers
app.post("/api/submit", (req, res) => {
  const { answers } = req.body; // Example: { answers: ["Paris", "JavaScript"] }
  let score = 0;

  // Check answers
  questions.forEach((q, idx) => {
    if (answers[idx] === q.answer) score++;
  });

  res.json({ score, total: questions.length });
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
