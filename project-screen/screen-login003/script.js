//FUNÇÃO DE VER SENHA
function clickPassword(passwordId, iconId) {
  const password = document.querySelector(`input#${passwordId}`)
  const viewPassword = document.querySelector(`i#${iconId}`)

  if (password.type === "password") {
    password.type = "text";
    viewPassword.classList.remove("fa-eye")
    viewPassword.classList.add("fa-eye-slash")
  } else {
    password.type = "password";
    viewPassword.classList.remove("fa-eye-slash")
    viewPassword.classList.add("fa-eye")
  }
}
//CRIAÇÃO DE CONTA E VERIFICAÇÃO
const userDados = []
const userPassword = []
function isUser(user, list){
  return list.indexOf(user) !== -1
}
function clickCreate() {
  const username = document.querySelector("input#usernametxt")
  const password = document.querySelector("input#create-password")

  if (username.value.trim() === "" && password.value.trim() === "") {
    alert("Preencha todos os campos.")
    return false
  } else if (username.value.trim() === "") {
    alert("Preencha o nome de usuário.")
    return false
  } else if (password.value.trim() === "") {
    alert("Preencha a senha.")
    return false
  } else if (password.value.length < 8) {
    alert("A senha precisa ter no mínimo 8 caracteres.")
    return false
  } else if (isUser(username.value, userDados)) {
    alert("Esse nome de usuário já existe.")
    return false
  } else {
    userDados.push(username.value)
    userPassword.push(password.value)
    alert("Usuário criado com sucesso.")
    username.value = ""
    password.value = ""
    username.focus()
    return true
  }
}

function clickLogin() {
  const username = document.querySelector("input#usernametxt2")
  const password = document.querySelector("input#login-password")
  //VALIDAÇÃO DOS CAMPOS
  if (username.value.trim() === "" && password.value.trim() === "") {
    alert("Preencha todos os campos")
    username.value = ""
    password.value = ""
    username.focus()
    return false
  } else if (username.value.trim() === "") {
    alert("Preencha o nome de usuário. ")
    username.value = ""
    password.value = ""
    username.focus()
    return false
  } else if (password.value.trim() === "" && password.value.trim() < 8) {
    if (password.value.trim() < 8) {
      alert("A senha deve ter pelo menos 8 caracteres.")
      username.value = ""
      password.value = ""
      username.focus()
      return false
    } else{
    alert("Preencha a senha.")
    username.value = ""
    password.value = ""
    username.focus()
    return false
    }
  } else if (!isUser(username.value, userDados)) {
    alert("Essa conta não existe.")
    username.value = ""
    password.value = ""
    username.focus()
    return false
  } else {
    const userIndex = userDados.indexOf(username.value);
    if (userPassword[userIndex] === password.value) {
      alert("Login efetuado com sucesso!")
      username.value = ""
      password.value = ""
      username.focus()
      return false
    } else {
      alert("Senha incorreta.")
      username.value = ""
      password.value = ""
      username.focus()
      return true
    }
  } //FIM DA VALIDAÇÃO
}