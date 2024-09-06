const username = document.querySelector("input#username");
const user = [];
function login() {
  if (username.value.trim() === "" || isUser(username.value, user)) {
    if (username.value.trim() === "") {
      alert("Por favor, preencha o nome de usuário.");
    } else {
      alert("Esse nome de usuário já foi adicionado.");
    }
    return false;
  } else {
    // Adiciona o nome de usuário ao array `user`
    user.push(username.value);
    alert("Nome de usuário adicionado com sucesso,")
  }
}
function isUser(l, user) {
  return user.indexOf(l) !== -1;
}

//<TODO>SEGUNDA OPÇÃO</TODO>
/* 
const username = document.querySelector("input#username");
const user = [];

function login() {
  if (username.value.trim() === "") {
    alert("Por favor, preencha o nome de usuário.");
    return false;
  }
  
  if (isUser(username.value, user)) {
    alert("Esse nome de usuário já foi adicionado.");
    return false;
  } else {
    // Adiciona o nome de usuário ao array `user`
    user.push(username.value);
    alert("Nome de usuário adicionado com sucesso.");
    return true;
  }
}

function isUser(l, user) {
  return user.indexOf(l) !== -1;
}
 */

//<TODO>TERCEIRA OPÇÃO</TODO>
/* 
const username = document.querySelector("input#username");
const user = [];

function login() {
  if (username.value.trim() === "" || isUser()) {
    if (username.value.trim() === "") {
      alert("Por favor, preencha o nome de usuário.");
    } else {
      alert("Esse nome de usuário já foi adicionado.");
    }
    return false;
  } else {
    // Adiciona o nome de usuário ao array `user`
    user.push(username.value);
    alert("Nome de usuário adicionado com sucesso.");
    return true;
  }
}

function isUser() {
  return user.indexOf(username.value) !== -1;
} */