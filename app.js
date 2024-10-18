"use strict";

// node modules
const cors = require("cors");
const cookieParser = require("cookie-parser");

// custom modules
const login = require("./src/routes/login.route");

// initialize express
const express = require("express");
const app = express();

// EJS setting
app.set("view engine", "ejs");

// setting static director
app.use(express.static(`${__dirname}/public`));

// enable cors and cookie parser
app.use(cors()).use(cookieParser());

// login page
app.use("/login", login);

app.listen(5000, () => {
	console.log(`Server listening on port 5000...`);
});
