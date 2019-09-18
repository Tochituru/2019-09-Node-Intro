const users = [
    { id: 1, name: 'calis1', email: 'calis1@gmail.com' },
    { id: 2, name: 'calis2', email: 'calis2@gmail.com' },
    { id: 3, name: 'calis3', email: 'calis3@gmail.com' }
];

const getUser = (req, res, next) => {
    res.json({ users });
    next();
};
const getUserByid = (req, res, next) => {
    let resUser = users.find((e) => e.id === req.params.id);
    if (resUser) res.json(resUser);
    else res.status(404).send('El usuario no existe');
    next();
};
const postUser = (req, res) => {
    let data = req.body;
    if (data.hasOwnProperty('name') && data.hasOwnProperty('email')) {
        data.id = users.length + 1;
        users.push(data);
        console.log(data);
        res.send(`recibido con la id ${data.id}`);
    } else res.status('400').send('pusiste mal los datos');
}



module.exports = { getUser, getUserByid, postUser };