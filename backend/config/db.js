const mongoose = require("mongoose");

    const db = ()=>{
mongoose.connect(process.env.DB_URI,{useNewUrlParser:true, useUnifiedTopology:true})
.then((res)=>{
    console.log(`====== DATABASE IS CONNECTED =======${res.connection.host}`)
})
    };

    module.exports = db;