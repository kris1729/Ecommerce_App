const app = require("./app")

const dotenv = require("dotenv")
const connectDatabase = require("./config/database")

// handling uncaughtException ---> console.log(youtube)


process.on("uncaughtException",(err)=>{
    console.log(`Error: ${err.message}`);
    console.log("Sutting down the server due to uncaughtException");
    process.exit(1);
})




// config
dotenv.config({ path: "backend/config/config.env" });

connectDatabase();


const server = app.listen(process.env.PORT, () => {
    console.log(`server is working on http://localhost:${process.env.PORT}`)
})


//  handling unhandledRejection
process.on("unhandledRejection", (err) => {
    console.log(`Error: ${err.message}`);
    console.log(`Shutting down the server due to Unhandled Promise Rejection`);

    server.close(() => {
        process.exit(1);
    });
});