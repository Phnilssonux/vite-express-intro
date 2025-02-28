const express = require("express");
const app = express();

app.get("/api", (req,res) => {
    res.json({cars: [Mercedes, Volvo, Saab]}) 
})

app.listen(8080, () => {
    console.log("Server is running on port 8080");
})