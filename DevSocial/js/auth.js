let nome = document.getElementById('name');
let phone = document.getElementById('phone');
let cpf = document.getElementById('cpf');
let email = document.getElementById('email');
let pw = document.getElementById('pw');
let cpw = document.getElementById('cpw');




function register() {
    let user = {
        name: nome.value,
        phone: phone.value,
        cpf: cpf.value,
        email: email.value,
        password: pw.value
    }
    if (pw.value == cpw.value) {
        alert('pw = cpw');

        let novoUsuario = user;

        window.localStorage.setItem('Users', JSON.stringify(novoUsuario));
    } else {
        console.log(cpw.value);
        console.log(pw.value);
        alert('error');
    }

}

function login(){
    let loginEmail = document.getElementById('loginEmail');
    let loginPassword = document.getElementById('loginPassword');

    window.localStorage.getItem('Users');

}
cpw.addEventListener('onkeydown', (event) => {
    event.preventDefault();
    if (cpw.value != pw.value) {
        cpw.style.backgroundColor = red;
    } else {
        cpw.style.backgroundColor = green;
    }
});

