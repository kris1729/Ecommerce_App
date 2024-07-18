const express = require("express")

const app = express();

app.use(express.json());

// import route

const product = require("./routes/productRoute");
const middleware = require("./middleware/error");
const users = require("./routes/userRoute");
app.use("/api/v1",product);
app.use("/api/v1",users)
app.use(middleware);


module.exports = app;