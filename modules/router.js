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
router.get('/form', (req, res) => {
    res.sendFile(path.join(__dirname, '../pages/form.html'))
    //se devuelve/sirve el vínculo
});
router.get('/products', (req, res) => {
    res.sendFile(path.join(__dirname, '../pages/upslabardie.html'))
    //se devuelve/sirve el vínculo
});


//Api routes//
router.get('/api/products', products)
router.get('/api/users', users);
router.get('/api/users/:id', (req, res) => {
    let resUser = users.find((e) => e.id === req.params.id);
    if (resUser) res.send(resUser);
    else res.status(404).send('El usuario no existe');
});

/*(req, res) => res.json(users)*/

//Not found Handler//
router.use((req, res) => res.status(404).send('Le pifiaste al servidor'))



module.exports = router



