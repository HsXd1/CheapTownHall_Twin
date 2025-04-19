const express = require("express");
const path = require("path");
const scrapper = require("./frontend/static/js/views/HandshakeScrapper")

const app = express();

app.use("/static", express.static(path.resolve(__dirname, "frontend", "static")));

app.get("/{*any}", (req, res, next) => {
    res.sendFile(path.resolve(__dirname, "frontend", "index.html"));
});

app.listen(process.env.PORT || 8000, () => console.log("Server running..."));
