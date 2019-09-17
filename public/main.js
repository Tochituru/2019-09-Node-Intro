const printProducts = (data) => {
    const container = document.getElementById('productsList');
    data.forEach(e => {
        container.innerHTML += productItem(e);
    });
}


const validateForm = () => {
    const nameField = document.getElementById('product-name');
    const typeField = document.getElementById('product-type');
    if (nameField !== '' && nameField.length > 3 && nameField.length < 8) isValid = true; else isValid = false;
    if (typeField !== '' && typeField.length > 3 && typeField.length < 8) isValid = true; else isValid = false;
    isValid ? createProduct({ name: nameField, type: typeField }) : null;
};
const createProduct = (payload) => { };


const productItem = (item) => `
    <li class="item-style" id="pepito">
    <p>${item.computer} </p>
    <span>${item.ram} </span>
    </li>
`;

const initialize = () => {
    fetch('/api/products')
        .then(res => res.json())
        .then(res => printProducts(res.products));
};


