const express = require("express");
const cors = require("cors");

const app = express();

/* Middleware */
app.use(cors());
app.use(express.json());

/* =========================
   API ROUTES
========================= */

// Test route
app.get("/api/test", (req, res) => {
  res.json({ success: true, message: "API is working 🚀" });
});

/* =========================
   404 HANDLER FOR API
========================= */

app.use("/api", (req, res) => {
  res.status(404).json({
    success: false,
    message: "API Not Found",
  });
});

/* =========================
   ROOT ROUTE
========================= */

app.get("/", (req, res) => {
  res.send("Backend is running successfully 🚀");
});

/* =========================
   START SERVER
========================= */

const PORT = process.env.PORT || 10000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});