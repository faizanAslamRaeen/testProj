const app = require("./app");
const dotenv = require("dotenv");
const db = require("./config/db");
const express = require('express')
 
dotenv.config({path:"backend/.env"});
const PORT = process.env.PORT || 5000;
db();
// app.use(express.json())

const server =  app.listen(PORT,()=>{
    console.log(`server is working on port : ${PORT}`)
})


//unhandlePromiseRejection 
process.on("unhandledRejection",(err)=>{
    console.log(`Error:${err.message}`);
    console.log(`Shutting down the server due to unhandled Promise Rejection`);
    server.close(()=>{
        process.exit(1)
    })
})