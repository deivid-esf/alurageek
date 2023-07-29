const formulario = document.querySelector("[data-login-formulario]")

function validaEmailFormato(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

 function validaSenha(senha) {
  return senha.length >= 6; 
 }

 function validaLogin(e){
  e.preventDefault();
   const mensagemErro = document.querySelector("[data-login-erro]")
   const email = document.querySelector("[data-login-email]").value;
   const senha = document.querySelector("[data-login-senha]").value;
   
   if (validaEmailFormato(email) && validaSenha(senha)) {
     mensagemErro.textContent = '';
     window.location.href = '../../../index.html'
  } else{
    mensagemErro.textContent = "Por favor, revise os campos!";
  }

 }

 formulario.addEventListener('submit', validaLogin)