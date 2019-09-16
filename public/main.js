const printProducts = (data) => {
    console.log(data);
    
    const container = document.getElementById('productsList');
    data.forEach(e => {
        container.innerHTML += productItem(e); 
    });
}

const productItem = (item) => `
    <li class="item-style" id="pepito">
    <p>${item.computer} </p>
    <span>${item.ram} </span>
    </li>
`;

const initialize = () => { 
    fetch('/api/products')
        .then(res => res.json())
        .then(res => printProducts (res.products));
        };
