// third party modules
import express from "express";
import cookieParser from "cookie-parser";
import logger from 'morgan';
import session from "express-session";

// ES modules fix for __dirname
import path, {dirname} from 'path';
import {fileURLToPath} from 'url';
const __dirname = dirname(fileURLToPath(import.meta.url));
//instantiate app-server
const app = express();

//setup view engine 
app.set('views', path.join(__dirname,'/views'));
app.set('views engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../public')));
app.use(session({
    secret: 'Mysecret',
    saveUninitialized: false,
    resave: false
}));
//custom middleware
function helloWorld(req, res, next)
{
    res.setHeader('Content-Type', 'text/plain');
    res.end('hello world');
}

function byeWorld(req, res, next)
{
    res.setHeader('Content-Type','text/plain');
    res.end('Good bye World');
}

//add middleware to connect application
app.use('/', helloWorld);
app.use('/hello', helloWorld);
app.use('/bye', byeWorld);


// run app
app.listen(3000);

console.log('Server running at http://localhost:3000');