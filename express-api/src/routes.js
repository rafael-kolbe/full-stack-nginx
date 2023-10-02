const express = require("express");
require("dotenv").config();

const app = express();

app.use(express.json());

app.get("/api/v1/", (_, res) => {
    res.json({ message: `Hello express! From PORT: ${process.env.PORT}` });
});

module.exports = {
    app,
};
