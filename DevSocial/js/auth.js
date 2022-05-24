let nome = document.getElementById('name');
let phone = document.getElementById('phone');
let cpf = document.getElementById('cpf');
let email = document.getElementById('email');
let pw = document.getElementById('pw');
let cpw = document.getElementById('cpw');
let registerForm = document.getElementById('registerForm');
phone.setCustomValidity('teste');
cpf.setCustomValidity('teste');
email.setCustomValidity('teste');
pw.setCustomValidity('teste');
nome.setCustomValidity('Este Campo é Obrigatorio');


function register() {
    if(!registerForm.reportValidity()){
        console.log(registerForm.checkValidity());
        if(!nome.checkValidity()){
            nome.style.backgroundColor = 'rgba(255, 3, 46, 0.7)';
            nome.style.color = 'white';
        }
        nome.checkValidity();
        return;
    }
    
    
    if (pw.value == cpw.value) {
        
    } else {
        alert('error');
    }
    let users =JSON.parse(localStorage.getItem('Users'))||[]; 
    users.push({
        name: nome.value,
        phone: phone.value,
        cpf: cpf.value,
        email: email.value,
        password: pw.value
    });
    
    localStorage.setItem('Users',JSON.stringify(users));
    
}

function login(){
    let loginEmail = document.getElementById('loginEmail');
    let loginPassword = document.getElementById('loginPassword');
    
    let users = JSON.parse(window.localStorage.getItem('Users'));
    if(users){
        if(users.email==loginEmail.value&&users.password==loginPassword.value){
            alert('login realizado');
            location.href = 'index.html';
        }else{
            console.log(users.email);
            alert('credenciais invalidas');
        }   
    }else{
        alert('ERRO');
    }
    
}
cpw.addEventListener('keyup', (event) => {
    
    if (cpw.value != pw.value) {
        cpw.style.backgroundColor = 'rgba(255, 3, 46, 0.7)';
        cpw.style.color = 'white';
        //cpw.style.opacity = '70%';
    } else {
        cpw.style.backgroundColor = 'rgba(102, 255, 107, 0.7)';
        cpw.style.color='black';
        //cpw.style.opacity = '70%';

    }
});

nome.addEventListener('keyup', (event) => {
    if(nome.value==''){
        nome.style.backgroundColor = 'rgba(255, 3, 46, 0.7)';
            nome.style.color = 'white'
    }
});

