const express = require("express");

const app = express();

const PORT = parseInt(process.env.PORT) || 3000;

/**
 * @typedef {{name: string, phone: string, email: string}} Table
 */

/**
 * @type {Table[]}
 */
let reservedTables = [{name: "Bob", phone: "555-1234-567", email: "bob@test.com"}];

/**
 * @type {Table[]}
 */
let waitlistTables = [];

app.use(express.static("public"));

app.get("/",(req,res)=>{
    res.redirect("/home.html");
});

app.get("/api/tables", (req,res)=>{
    res.json(reservedTables);
});

app.get("/api/waitlist", (req,res)=>{
    res.json(waitlistTables);
});

app.get("/api/clear", (req,res)=>{
    reservedTables = [];
    waitlistTables = [];
    res.json({response: "Cleared all tables"})
})

app.listen(PORT,()=>{
    console.log(`Listening on port:`, PORT);
});