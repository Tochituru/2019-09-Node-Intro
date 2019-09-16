const users = {
    users: [
        { name: 'calixta', email: 'calixta@gmail.com' },
        { name: 'calixta', email: 'calixta@gmail.com' },
        { name: 'calixta', email: 'calixta@gmail.com' },
        { name: 'calixta', email: 'calixta@gmail.com' }
    ]
}

const middleWare = (req, res, next) => {
    console.log('Pidiendo usuarios');
    res.json({users});
    next();
}
module.exports = middleWare