require('dotenv').config()
const express = require("express");
const app = express();

const port = process.env.PORT || 3000;

app.get("/", function(req, res) {
    res.json({
        "status": "ok",
        "message": "It's all good 😎",
        "info": {
            name: process.env.NAME,
            age: process.env.AGE,
            city: process.env.CITY,
        }
    });
});

app.listen(port, function() {
    console.log(`It's running on port ${port}`);
    console.log(process.env);
})