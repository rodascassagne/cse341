const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const userRoutes = require("./routes/contacts");

const app = express();
const port = process.env.PORT || 9000;

// middleware
app.use(express.json());
app.use('/api', userRoutes);
//route
app.get("/", (req, res) => {
    res.send("Welcome To My API");
});

// mongodb conection
mongoose
.connect(process.env.MONGODB_URI)
.then(() => console.log("Conected to mongodb atlas"))
.catch((error) => console.error(error));

app.listen(port, () => console.log("server listening on port", port));