const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();

app.use(cors());
app.use(express.json());

/* API */

app.get("/api/test", (req, res) => {
  res.json({ success: true });
});

/* API 404 */

app.use("/api", (req, res) => {
  res.status(404).json({
    success: false,
    message: "API Not Found",
  });
});

/* FRONTEND */

const buildPath = path.join(__dirname, "dist");

app.use(express.static(buildPath));

/* VALID ROUTES */

const validRoutes = [
  "/",
  "/about",
  "/contact",
  "/story",
  "/blog",
  "/beans",
  "/sustainability",
];

/* HANDLE ROUTES */

app.get("*", (req, res) => {

  if (validRoutes.includes(req.path)) {

    return res.sendFile(
      path.join(buildPath, "index.html")
    );

  }

  return res.status(404).sendFile(
    path.join(buildPath, "index.html")
  );

});

/* START */

app.listen(5000, () => {
  console.log("Server running on port 5000");
});

