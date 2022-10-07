// immport third-party node.js module Connect
const connect = require('connect');

//instantiate app-server
const app = connect();

//custom middleware
function helloWorld(req, res, next)
{
    res.setHeader('Content-Type', 'text/plain');
    res.end('hello world')
}

function byeWorld(req, res, next)
{
    res.setHeader('Content-Type','text/plain');
    res.end('Good bye World')
}

//add middleware to connect application
app.use('/', helloWorld);
app.use('/hello', helloWorld);
app.use('/bye', byeWorld);


// run app
app.listen(3000);

console.log('Server running at http://localhost:3000');