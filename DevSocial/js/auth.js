    let name = document.getElementById('name');
    let phone = document.getElementById('phone');
    let cpf = document.getElementById('cpf');
    let email = document.getElementById('email');
    let pw = document.getElementById('pw');
    let cpw = document.getElementById('cpw');
  
  
  function User(name, phone, cpf, email, password) {
    this.name = name;
    this.phone = phone;
    this.cpf = cpf;
    this.email=email;
    this.password = password;
  }

function register(){

    if(pw.value==cpw.value){
        alert('pw = cpw');
        let novoUsuario = new User(name,phone,cpf,email,pw);
        
        window.localStorage.setItem('Users',JSON.stringify(novoUsuario));
    }else{
        console.log(cpw.value);
        console.log(pw.value);
        alert('error');
        
    }
    
}
        cpw.addEventListener('onkeydown', (event)=>{
            event.preventDefault();
            if(cpw.value!=pw.value){
                alert('error');
                cpw.style.backgroundColor=red;
            }else{
                cpw.style.backgroundColor=green;
            }
        })