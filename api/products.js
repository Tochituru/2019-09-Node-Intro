const products = [
    { computer: 'mac', ram: 2000 },
    { computer: 'windows', ram: 1000 }
]

const handler = (req, res, next) => {
    console.log('Pidiendo usuarios');
    res.json({ products });
    next();
}

module.exports = handler