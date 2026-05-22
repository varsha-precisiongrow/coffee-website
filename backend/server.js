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
const path = require("path");

const app = express();

/* =========================
   MIDDLEWARE
========================= */

app.use(cors());
app.use(express.json());

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
   dist FOLDER
========================= */

// FIXED FOR RENDER
app.use(express.static(path.join(__dirname, "../dist")));

/* =========================
   VALID FRONTEND ROUTES
========================= */

const validRoutes = [
  "/",
  "/about",
  "/sustainability",
  "/story",
  "/beans",
  "/contact",
  "/health",
  "/blog",
];

/* =========================
   FRONTEND ROUTES
========================= */

app.get("*", (req, res) => {
  const reqPath = req.path;

  // VALID ROUTES
  if (
    reqPath.startsWith("/blog/") ||
    validRoutes.includes(reqPath)
  ) {
    return res.sendFile(
      path.join(__dirname, "../dist", "index.html")
    );
  }

  // REAL 404 PAGE
  return res.status(404).send(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>404 - Page Not Found</title>

      <style>
        body{
          margin:0;
          height:100vh;
          display:flex;
          justify-content:center;
          align-items:center;
          flex-direction:column;
          background:#111;
          color:white;
          font-family:Arial;
        }

        h1{
          font-size:100px;
          color:#ff6b00;
          margin:0;
        }

        p{
          font-size:20px;
          color:#ccc;
        }

        a{
          margin-top:20px;
          padding:12px 24px;
          background:#ff6b00;
          color:white;
          text-decoration:none;
          border-radius:8px;
        }
      </style>
    </head>

    <body>

      <h1>404</h1>

      <p>Oops! Page Not Found 😢</p>

      <a href="/">Back To Home</a>

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

// const express = require("express");
// const cors = require("cors");

// const app = express();

// /* =========================
//    MIDDLEWARE
// ========================= */
// app.use(cors());
// app.use(express.json());

// /* =========================
//    ROOT ROUTE
// ========================= */
// app.get("/", (req, res) => {
//   res.send("Backend is running 🚀");
// });

// /* =========================
//    API ROUTES
// ========================= */
// app.get("/api/test", (req, res) => {
//   res.json({
//     success: true,
//     message: "API working 🚀",
//   });
// });

// /* =========================
//    API 404 HANDLER
// ========================= */
// app.use("/api", (req, res) => {
//   res.status(404).json({
//     success: false,
//     message: "API Not Found",
//   });
// });

// /* =========================
//    FRONTEND / BACKEND 404 PAGE
// ========================= */
// app.use((req, res) => {
//   res.status(404).send(`
//     <!DOCTYPE html>
//     <html>
//     <head>
//       <title>404 - Page Not Found</title>
//       <style>
//         body {
//           margin: 0;
//           height: 100vh;
//           display: flex;
//           justify-content: center;
//           align-items: center;
//           flex-direction: column;
//           background: linear-gradient(135deg, #0f0f0f, #1a1a1a);
//           font-family: Arial, sans-serif;
//           color: white;
//           text-align: center;
//         }

//         h1 {
//           font-size: 120px;
//           margin: 0;
//           color: #ff6b00;
//         }

//         p {
//           font-size: 20px;
//           color: #ccc;
//         }

//         button {
//           margin-top: 20px;
//           padding: 12px 25px;
//           border: none;
//           background: #ff6b00;
//           color: white;
//           font-size: 16px;
//           border-radius: 8px;
//           cursor: pointer;
//           transition: 0.3s;
//         }

//         button:hover {
//           background: #ff8800;
//         }
//       </style>
//     </head>
//     <body>

//       <h1>404</h1>
//       <p>Oops! Page Not Found 😢</p>

//       <button onclick="window.location.href='/'">
//         Go Back Home
//       </button>

//     </body>
//     </html>
//   `);
// });

// /* =========================
//    START SERVER
// ========================= */
// const PORT = process.env.PORT || 10000;

// app.listen(PORT, () => {
//   console.log("Server running on port " + PORT);
// });