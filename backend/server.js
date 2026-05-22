// const express = require("express");
// const cors = require("cors");

// const app = express();

// app.use(cors());
// app.use(express.json());

// app.get("/", (req, res) => {
//   res.send("Backend is running 🚀");
// });

// app.get("/api/test", (req, res) => {
//   res.json({ success: true, message: "API working" });
// });

// app.use("/api", (req, res) => {
//   res.status(404).json({ success: false, message: "API Not Found" });
// });

// const PORT = process.env.PORT || 10000;

// app.listen(PORT, () => {
//   console.log("Server running on port " + PORT);
// });

const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

/* =========================
   ROOT ROUTE
========================= */
app.get("/", (req, res) => {
  res.send("Backend is running 🚀");
});

/* =========================
   API ROUTES
========================= */
app.get("/api/test", (req, res) => {
  res.json({
    success: true,
    message: "API working 🚀",
  });
});

/* =========================
   API 404 HANDLER
========================= */
app.use("/api", (req, res) => {
  res.status(404).json({
    success: false,
    message: "API Not Found",
  });
});

/* =========================
   CUSTOM 404 PAGE (FRONTEND STYLE)
========================= */
app.use((req, res) => {
  res.status(404).send(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>404 - Page Not Found</title>
      <style>
        body {
          margin: 0;
          height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          background: linear-gradient(135deg, #0f0f0f, #1a1a1a);
          font-family: Arial, sans-serif;
          color: white;
        }

        h1 {
          font-size: 100px;
          margin: 0;
          color: #ff6b00;
        }

        p {
          font-size: 22px;
          color: #cccccc;
        }

        a {
          margin-top: 20px;
          padding: 12px 25px;
          background: #ff6b00;
          color: white;
          text-decoration: none;
          border-radius: 6px;
          font-weight: bold;
        }

        a:hover {
          background: #ff8800;
        }
      </style>
    </head>
    <body>
      <h1>404</h1>
      <p>Oops! Page Not Found 😢</p>
      <a href="/">Go Back Home</a>
    </body>
    </html>
  `);
});

/* =========================
   START SERVER
========================= */
const PORT = process.env.PORT || 10000;

app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});