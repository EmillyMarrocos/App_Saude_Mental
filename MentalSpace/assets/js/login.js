let btn = document.querySelector('.fa-eye');

btn.addEventListener('click', () => {
  let inputSenha = document.querySelector('#senha');
  
  if (inputSenha.getAttribute('type') === 'password') {
    inputSenha.setAttribute('type', 'text');
  } else {
    inputSenha.setAttribute('type', 'password');
  }
});

function entrar() {
  let usuario = document.querySelector('#usuario'); 
  let email = document.querySelector('#email');
  let senha = document.querySelector('#senha');
  
  let msgError = document.querySelector('#msgError');
  let listaUser = JSON.parse(localStorage.getItem('listaUser')) || [];

  let userValid = null; 


  listaUser.forEach((item) => {
    if (usuario.value === item.userCad && email.value === item.emailCad && senha.value === item.senhaCad) {
      userValid = item; 
    }
  });
  
  if (userValid) {

    window.location.href = './teladeinicio.html';
    
    let mathRandom = Math.random().toString(16).substr(2);
    let token = mathRandom + mathRandom;
    
    localStorage.setItem('token', token);
    localStorage.setItem('nomeLogado', JSON.stringify(userValid));
  } else {

    usuario.style.borderColor = 'red';
    email.style.borderColor = 'red';
    senha.style.borderColor = 'red';
    
    msgError.style.display = 'block';
    msgError.innerHTML = 'Informações incorretas'; 

   
    if (usuario.value === '') {
      usuario.focus();
    } else if (email.value === '') {
      email.focus();
    } else if (senha.value === '') {
      senha.focus();
    } else {
      usuario.focus(); 
    }
  }
}
