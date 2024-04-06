const userDataContainer = document.querySelector('.user-data-container');
const userData = document.querySelector('.user-data');
const registrationForm = document.getElementById('registration-form');

function displayUserData(data) {
    userData.innerHTML = '';
    const fullName = document.createElement('h3');
    fullName.textContent = `Nombre Completo: ${data.fullname}`;
    userData.appendChild(fullName);

    const email = document.createElement('p');
    email.textContent = `Correo: ${data.email}`;
    userData.appendChild(email);

    const phone = document.createElement('p');
    phone.textContent = `Numero de Celular: ${data.phone}`;
    userData.appendChild(phone);

    const ticketType = document.createElement('p');
    ticketType.textContent = `Tipo de Entrada: ${data.ticketType}`;
    userData.appendChild(ticketType);

    const thankYou = document.createElement('p');
    thankYou.textContent = 'Gracias por su compra que lo disfrute!';
    userData.appendChild(thankYou);
}

registrationForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const fullname = document.getElementById('fullname').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const ticketType = document.getElementById('ticket-type').value;

    // Perform form validation here

    displayUserData({
        fullname,
        email,
        phone,
        ticketType
    });
});