const express = require("express");
const app = express();
const errorMiddleware = require("./middleware/error")

app.use(express.json())

// routes import 

const usertRoute = require("./routes/userRoute");


app.use("/api/v1",usertRoute)

//Middleware for Error
app.use(errorMiddleware)


module.exports = app;