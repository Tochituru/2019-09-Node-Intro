const express = require('express');
const path = require('path');
const products = require('../api/products');
const users = require('../api/users')
const router = express.Router();

const data = {
    data: 'test from router module'
};

//Pages routes//

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../pages/home.html'))
    //se devuelve/sirve una página web
});
router.get('/products', (req, res) => {
    res.sendFile(path.join(__dirname, '../pages/upslabardie.html'))
    //se devuelve/sirve el vínculo
});


//Api routes//
router.get('/api/products', products)
router.get('/api/users', users);
/*(req, res) => res.json(users)*/



module.exports = router



