const express = require("express")

const app = express();

app.use(express.json());

// import route

const product = require("./routes/productRoute");
const middleware = require("./middleware/error");

app.use("/api/v1",product);
app.use(middleware);


module.exports = app;