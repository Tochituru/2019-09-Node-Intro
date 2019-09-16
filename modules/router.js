const express = require('express');
const path =require('path');
const users = require('./users')
const router = express.Router();

const data = {
    data: 'test from router module'
};

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../pages/home.html'))
    //se devuelve/sirve una página web
});


router.get('/products', (req, res) => {
    res.sendFile(path.join(__dirname, '../pages/upslabardie.html'))
    //se devuelve/sirve el vínculo
});

router.get('api/products', (req, res) => {
    res.sendFile(path.join(__dirname, '../pages/upslabardie.html'))
    //mando un mensaje
});


router.get('/api/users', (req, res) => {
    res.json(users)
    //mando un json
});


module.exports = router



