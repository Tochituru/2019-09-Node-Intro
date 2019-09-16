const express = require('express');
const logger = require('morgan');
const router = require('./modules/router')
const server = express();
const port = 3000;

/*
const data = {
    data: 'test'
};

let users = [
    { user: 'admin', pass: 'password1' },
    { user: 'editor', pass: 'password2' },
    { user: 'reader', pass: 'password3' },
];

server.get('/', (req, res) => {
    //res.send(ejemplo uno{'data': 'sarasa'}
    res.send(data)
});

*/

server.use('/statics', express.static('public'));
server.use(logger('dev'));
server.use(router);

server.listen(port, () => console.log(`Example app listening on port ${port}`));