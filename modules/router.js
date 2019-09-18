const express = require('express');
const path = require('path');
const products = require('../api/products');
const users = require('../api/users');
const router = express.Router();

//Pages routes//

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../pages/home.html'))
    //se devuelve/sirve una página web
});
router.get('/form', (req, res) => {
    res.sendFile(path.join(__dirname, '../pages/form.html'))
});
router.get('/products', (req, res) => {
    res.sendFile(path.join(__dirname, '../pages/upslabardie.html'))
    //se devuelve/sirve el vínculo
});


//Api routes//
router.get('/api/products', products)
router.get('/api/users', users.getUser);
router.get('/api/users/:id', users.getUserById);

//Api routes post//

router.post('/api/users', users.postUser);

//Not found Handler//
router.use((req, res) => res.status(404).send('Le pifiaste al servidor'))



module.exports = router



