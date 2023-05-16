const express = require('express')
const app = express()
const mongoose = require('mongoose')
const passport = require('passport')
const session = require('express-session')
const MongoStore = require('connect-mongo') 
const methodOverride = require("method-override")
const flash = require('express-flash')
const logger = require('morgan')
const connectDB = require('./config/database')
const cors = require('cors')
const mainRoutes = require("./routes/main")
require('dotenv').config({path: './config/.env'})


// Passport config
require('./config/passport')

//General Middleware
app.use(cors())
app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use('/public', express.static('public'));
app.use(logger('dev'))

// Sessions
app.use(
    session({
        secret: 'keyboard cat',
        resave: false,
        saveUninitialized: false,
        // store: new MongoStore({mongooseConnection: mongoose.connection})
    })
)

// Use forms for put / delete 
app.use(methodOverride("_method")); 

//Passport middleware
app.use(passport.initialize())
app.use(passport.session())

app.use(flash())

// Routes
app.use("/", mainRoutes)






connectDB().then(() => {
    //Server Running
    app.listen(process.env.PORT, () => {
      console.log(
        `Server is running on ${process.env.PORT}, you better catch it!`
      );
    });
  });