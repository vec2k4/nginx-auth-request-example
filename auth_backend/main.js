const express = require('express')
const bodyParser = require('body-parser');
const app = express()
const port = 3000

app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());

let isLoggedIn = false;

app.get('/', (req, res) => {
    // const isLoggedIn = req.header('X-Juddling');
    console.log(`Request is ${(isLoggedIn ? "ok" : "denied")}`);
    res.sendStatus(isLoggedIn ? 200 : 403);
});

app.post('/', (req, res) => {
    // see: https://codeshack.io/basic-login-system-nodejs-express-mysql/
    console.log(`Login attempt: ${req.body.username}  ${req.body.password}  ${req.body.code}`);
    isLoggedIn = req.body.username === 'test' && req.body.password === 'secret' && req.body.code === '1234';
    res.redirect('/');
    res.end();
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`)
});
