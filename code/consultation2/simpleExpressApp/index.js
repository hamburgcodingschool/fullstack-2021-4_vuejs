const express = require("express");
const aboutRouter = require("./routes/aboutRouter");
const app = express();
const cors = require("cors");

const port = process.env.PORT || 3030;

app.use(cors());

app.use("/about", aboutRouter);

app.get("/", function(req, res) {
    res.json("Hello world");
});

app.listen(port, function() {
    console.log(`Express is running on ${port}`);
});