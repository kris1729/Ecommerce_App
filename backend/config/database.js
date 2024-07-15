const mongoose = require("mongoose");

const conectDatabase = ()=>{
    mongoose.connect(process.env.DB_URI,{}).then((data)=>{
        console.log(`MogoDB connected with the server ${data.connection.host}`)
    })
}

module.exports = conectDatabase;


