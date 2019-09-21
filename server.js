const express = require('express');
const bodyParser = require('body-parser')
const cors = require('cors');
const logger = require('morgan');
const router = require('./modules/router')
const server = express();
const port = 5000;

server.use(bodyParser.urlencoded({
    extended: true
})
);
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

server.use(bodyParser.json());
server.use(logger('dev'));
server.use('/statics', express.static('public'));
server.use(router);
//server.use(cors);
//Error [ERR_HTTP_HEADERS_SENT]: Cannot set headers after they are sent to the client

server.listen(port, () => console.log(`Example app listening on port ${port}`));