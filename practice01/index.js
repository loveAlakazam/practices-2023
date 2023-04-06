"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var helmet_1 = require("helmet");
var hpp = require("hpp");
var dotenv = require("dotenv");
var morgan = require("morgan");
var cors = require("cors");
var cookieParser = require("cookie-parser");
var passport = require("passport");
var expressSession = require("express-session");
dotenv.config();
var app = express();
var prod = process.env.NODE_ENV === 'production';
app.set('port', prod ? process.env.PORT : 3000);
if (prod) {
    app.use(hpp());
    app.use((0, helmet_1.default)());
    app.use(morgan('combined'));
    app.use(cors({
        origin: /nodebird\.com$/,
        credentials: true,
    }));
}
else {
    app.use(morgan('dev'));
    app.use(cors({
        origin: true,
        credentials: true,
    }));
}
app.use('/', express.static('uploads'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(expressSession({
    resave: false,
    saveUninitialized: false,
    secret: process.env.COOKIE_SECRET,
    cookie: {
        httpOnly: true,
        secure: false,
        domain: prod ? '.nodebird.com' : undefined,
    },
    name: 'ek',
}));
app.use(passport.initialize());
app.use(passport.session());
app.get('/', function (req, res, next) {
    res.send('start server');
});
app.listen(app.get('port'), function () {
    console.log("server is run at ".concat(app.get('port')));
});
