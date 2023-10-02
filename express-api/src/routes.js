const express = require("express");

const app = express();

app.use(express.json());

app.get("/api/v1/", (_, res) => {
    res.json({ message: "Hello express!" });
});

module.exports = {
    app,
};
