const express = require('express');
const fs = require('fs');

const app = express();

app.get("/", (req, res) => {
    fs.readFile('./data.json', (err, data) => {
        res.render("index.ejs", {
            news: JSON.parse(data.toString())
        });
    });
});

app.listen(8000, () => {
    console.log('[SERVER] is running on port 8000');
});