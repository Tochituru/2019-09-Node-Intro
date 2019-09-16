const express = require('express');
const path =require('path');
const router = express.Router();

const data = {
    data: 'test from router module'
};

let users = [
    { user: 'admin', pass: 'password1' },
    { user: 'editor', pass: 'password2' },
    { user: 'reader', pass: 'password3' },
];

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../pages/home.html'))
    //se vuelve una página web
});


router.get('/products', (req, res) => {
    res.sendFile(path.join(__dirname, '../pages/upslabardie.html'))
    //se vuelve el vínculo
});

router.get('api/products', (req, res) => {
    res.sendFile(path.join(__dirname, '../pages/upslabardie.html'))
    //mando un mensaje
});


router.get('/users', (req, res) => {
    res.json(users)
    //mando un json
});


module.exports = router



