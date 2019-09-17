const users = [
        { id: 1, name: 'calis1', email: 'calis1@gmail.com' },
        { id: 2, name: 'calis2', email: 'calis2@gmail.com' },
        { id: 3, name: 'calis3', email: 'calis3@gmail.com' },
        { id: 4, name: 'calis4', email: 'calis4@gmail.com' }
    ];

const middleWare = (req, res, next) => {
    console.log('Pidiendo usuarios');
    res.json({users});
    next();
}
module.exports = middleWare