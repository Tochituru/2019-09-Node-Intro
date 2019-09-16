const listItem = document.createElement('li');
let list = document.getElementById('list');
listItem.innerHTML = 'sarasa';
list.appendChild(listItem);

const printProducts = (data) => {
    
}

const initialize = () => { 
    fetch('/api/products')
        .then(res => res.json())
        .then(res => printProducts (res));
        };
