const express = require("express");
const mockData = require("./mockData.json");

const app = express();
const port = 3000;

app.use(express.json());

app.get("/", function(req, res) {

    console.log(req);

    res.json(mockData);
});

app.get("/book", function(req, res) {
    const getPos = req.query.position;
    const book = mockData[getPos];

    if (book) {
        res.json(book);
    } else {
        res.json("Book not found");
    }
});

app.get("/delete", function(req, res) {
    const getPos = req.query.position;
    mockData[getPos] = undefined;

    
    res.json("Book deleted");
});

app.post("/newbook", function(req, res) {
    console.log("THERE WAS A POST REQUEST FOR NEW BOOK");
    console.log(req.body);
    
    mockData.push(req.body);

    res.json("Thanks");
});

app.listen(port, function() {
    console.log(`Running on port ${port}`);
});