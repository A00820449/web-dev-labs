const e = require("express");
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

app.use(express.json());
app.post("/api/reserve", (req,res)=>{
    const name = req.body.name || "";
    const phone = req.body.phone || "";
    const email = req.body.email || "";

    if (reservedTables.length < 5) {
        reservedTables.push({name, phone, email});
        return res.json({response: reservedTables.length});
    }
    else {
        waitlistTables.push({name, phone, email});
        return res.json({response: -1});
    }

});

app.listen(PORT,()=>{
    console.log(`Listening on port:`, PORT);
});