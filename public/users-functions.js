let userData;

const initialize = async () => {
    usersData = await getUsers();
    printUsers(usersData.users);
};

//consumir usuarios
//crear usuarios

const getUsers = () => fetch('/api/users').then(res => res.json());

const usersView = ({ id, name, email }) =>
    `<tr>
    <td>${id}</td>
    <td>${name}</td>
    <td>${email}</td>
    </tr>
    `;

const printUsers = (data) => {
    const container = document.getElementById('usersTable');
    container.innerHTML = '';
    data.forEach((e) => (container.innerHTML += usersView(e)));
};

const createUser = () => {
    event.preventDefault();
    const formName = document.getElementById('name');
    const formEmail = document.getElementById('email');
    const payload = {
        name: formName.value,
        email: formEmail.value,
    };
    fetch('/api/users/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    })
        .then((res) => res.json())
        .then(() => {
            formName.value = '';
            formEmail.value = '';
            initialize();
        })
        .catch(error => {
        console.log('ups');
        
        })
};