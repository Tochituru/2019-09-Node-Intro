const listItem = document.createElement('li');
let list = document.getElementById('list');
listItem.innerHTML = 'sarasa';
list.appendChild(listItem);


fetch('http://localhost:3000/api/products')
    .then(res => res.json())
    .then(res => {
        console.log(res);
    });

