const express = require("express");
const morgan = require("morgan");
const session = require("express-session");
const passport = require("passport");
const port = process.env.PORT || 3000;
const indexRouter = require("./routes/index");
const userRouter = require("./routes/users");
const journalRouter = require("./routes/journals");
const skillsRouter = require("./routes/skills");

require("dotenv").config();
require("./config/database");
require("./config/passport");

const app = express();

require("./config/database");

app.set("view engine", "ejs");

app.use(morgan("dev"));
app.use(express.static("public"));
app.use(
    express.urlencoded({
        extended: false,
    })
);

app.use(
    session({
        secret: "CodaWins",
        resave: false,
        saveUninitialized: true,
    })
);

app.use(passport.initialize());
app.use(passport.session());

app.use("/", indexRouter);
app.use("/journals", journalRouter);
app.use("/user", userRouter);
app.use("/skills", skillsRouter);

app.listen(port, function() {
    console.log("Express is listening. I love you 3000!");
});