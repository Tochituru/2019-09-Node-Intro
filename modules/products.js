const products = {
    products: [
        { computer: 'mac', ram: 2000 },
        { computer: 'windows', ram: 1000 }
    ]
}

const middleware = (req, res, next) => {
    console.log('Pidiendo usuarios');
    res.json({ products });
}

module.exports = middleware