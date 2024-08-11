const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN, // cors is a middelware for enabling CORS (Cross-Origin Resource Sharing).
    credentials: true,
  })
);

app.use(express.json({ limit: "16kb" })); // for parsing body data

app.use(express.urlencoded({ extended: true, limit: "16kb" })); // This middleware parses incoming requests with URL-encoded payloads

app.use(express.static("public")); //  This middleware serves static files like images, CSS, JavaScript, or HTML from the specified directory.

app.use(cookieParser()); // This middleware parses cookies attached to the client’s request object

module.exports = app;
