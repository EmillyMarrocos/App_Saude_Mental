if(localStorage.getItem('token')== null){
  alert('Você precisa está logado para acessar essa página.')
 window.location.href='./assets/html/login.html'}let userLogado = JSON.parse( localStorage.getItem('userLogado'))

let logado = document.querySelector('#logado')
logado.innerHTML = `Olá! ${userLogado.name}`

function goOut(){
  localStorage.removeItem('token')
  localStorage.removeItem('userLogado')
  window.location.href='./assets/html/login.html'
}