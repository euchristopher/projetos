// script.js

// Seleciona os campos de username e password do DOM
const username = document.querySelector("#username")
const password = document.querySelector("#password")
let users = {} // Objeto para armazenar os usuários

// Função para verificar se o usuário já está na lista
function inLista(username, list) {
  return list.indexOf(username) !== -1; // Retorna true se o usuário estiver na lista
}
// Função para adicionar usuário
function addUser() {
  // Adiciona o evento de clique ao botão de login
  document.querySelector(".main-login").addEventListener("click", function (event) {
    if (event.target.classList.contains("btn-login")) { // Verifica se o clique foi no botão de login
      const usernameValue = username.value.trim(); // Pega o valor do input de username
      const passwordValue = password.value.trim(); // Pega o valor do input de password

      // Verifica se os campos estão preenchidos
      if (usernameValue === "" || passwordValue === "") {
        alert("Todos os campos devem estar preenchidos.");
        return false
      } else if (usernameValue === "") {
        alert("Por favor, preencha o nome de usuário.");
        return false;
      } else if (passwordValue === "") {
        alert("Por favor, preencha a senha.");
        return false;
      } else {
        // Verifica se a senha possui pelo menos 8 caracteres
        if (passwordValue.length < 8) {
          alert("A senha precisa ter no mínimo 8 caracteres.");
          return false
        } else if (inLista(usernameValue, Object.keys(users))) { // Verifica se o usuário já está cadastrado
          alert("Usuário já cadastrado.");
          return false;
        } else {
          users[usernameValue] = passwordValue; // Armazena o novo usuário
          alert("Usuário cadastrado com sucesso.");
          username.value = ""; // Limpa o campo de username
          password.value = ""; // Limpa o campo de password
          username.focus(); // Coloca o foco no campo de username
          return true; // Retorna true para permitir o login
        }
      }
    }
  });
}

addUser(); // Chama a função para adicionar o evento ao botão de login
