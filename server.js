const express = require('express');
const morgan = require('morgan')
const port = 3000;
const indexRouter = require("./routes/index")

const app = express();

app.set("view engine", "ejs");

app.use(morgan("dev"));
app.use(express.static("public"));
app.use(express.urlencoded({
    extended: false
}));

app.use("/", indexRouter);

app.listen(port, function() {
    console.log("Express is listening. I love you 3000!")
});