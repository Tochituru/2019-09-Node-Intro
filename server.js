const express = require('express');
const server = express();
const port = 3000;

const data = {
    data: 'test'
};

// let users = {
//     { user: 'admin', pass: 'password1' },
// { user: 'editor', pass: 'password2' },
// { user: 'reader', pass: 'password3' }
// };

server.get('/', (req, res) => {
    //res.send(ejemplo uno{'data': 'sarasa'}
    res.send(data)
});

server.listen(port, () => console.log(`Example app listening on port ${port}`));