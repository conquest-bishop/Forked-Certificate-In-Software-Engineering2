const express = require('express');
const path = require("path");
const dotenv = require("dotenv").config()

// importing database setup 
const connectDB = require("./config/dbconfig")
const port = process.env.PORT || 3000;
const app = express();


app.engine("pug", require("pug").__express);
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"))
// app.set('views', 'C:\\Users\\user\\Documents\\Forked-Certificate-In-Software-Engineering2\\views');

// ...other middleware and route setup

// routes for styles files
app.use(express.static(path.join(__dirname, "public")))




// importing kyc routes
const kycRoute = require('./Conquest-Ahimbisibwe/controllers/kycRoute');


app.use(express.urlencoded({extended: false}));
app.use(express.json());


// calling the db from line 4
connectDB()


// api for routes 
app.use('/api', kycRoute)


app.listen(port, ()=>console.log(`server running at https://localhost:${port}`));
