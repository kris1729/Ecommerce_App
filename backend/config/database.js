const mongoose = require("mongoose");

const conectDatabase = ()=>{
    mongoose.connect(process.env.DB_URI,{}).then((data)=>{
        console.log(`MogoDB connected with the server ${data.connection.host}`)
    }).catch((err)=>{
    
        console.log(`DB connection error ${err}`)
    })
}

module.exports = conectDatabase;


// const mongoose = require("mongoose");


//     const connectDB = async () => {
//         try {
//             await mongoose.connect(process.env.DB_URI, {
               
//             });
//             console.log(`Database is connected`);
//         } catch (err) {
//             console.error('Error connecting to the database:', err);
//             process.exit(1);
//         }
//     };


// module.exports = connectDB;