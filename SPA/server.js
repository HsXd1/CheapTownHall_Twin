const express = require("express");
const path = require("path");

const app = express();

app.get("/{*any}", (req, res, next) => {
    res.sendFile(path.resolve("frontend", "index.html"));
});

app.listen(process.env.PORT || 8000, () => console.log("Server running..."));
