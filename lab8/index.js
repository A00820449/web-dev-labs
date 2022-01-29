const express = require("express");

const app = express();

const PORT = parseInt(process.env.PORT) || 3000;

app.use(express.static("public"));

app.get("/",(req,res)=>{
    res.redirect("/home.html");
});

app.listen(PORT,()=>{
    console.log(`Listening on port ${PORT}`);
});