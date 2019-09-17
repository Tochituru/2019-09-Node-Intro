const express = require('express');
const path = require('path');
const products = require('../api/products');
const users = require('../api/users')
const router = express.Router();


const usersEjemplo = [
    { id: 1, name: 'calis1', email: 'calis1@gmail.com' },
    { id: 2, name: 'calis2', email: 'calis2@gmail.com' },
    { id: 3, name: 'calis3', email: 'calis3@gmail.com' },
    { id: 4, name: 'calis4', email: 'calis4@gmail.com' }
];

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
    let resUser = usersEjemplo.find((e) => e.id === req.params.id);
    if (resUser) res.json(resUser);
    else res.status(404).send('El usuario no existe');
});

//Api routes post//

router.post('/api/users', (req, res)=> {
    let data = req.body;
    if (data.hasOwnProperty('name') && data.hasOwnProperty('email')){
    data.id = usersEjemplo.length+1;
    usersEjemplo.push(data);
    console.log(data);
    res.send(`recibido con la id ${data.id}`); 
    console.log(usersEjemplo);} else res.status('400').send('pusiste mal los datos');
    
});

//Not found Handler//
router.use((req, res) => res.status(404).send('Le pifiaste al servidor'))



module.exports = router



