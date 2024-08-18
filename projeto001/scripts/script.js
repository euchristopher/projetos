const dados = {
  nome: Bruno,
  CPF: 12345678901,
  DataN: "01-01-2000",
  Telefone: "(11) 99999-9999",
  Email: "bruno@example.com",
  Senha: "senha123",
}
function criar() {
  const usuario = {
    nome: document.getElementById("nome").value,
    cpf: document.getElementById("cpf").value,
    data: document.getElementById("data").value,
    telefone: document.getElementById("telefone").value,
    email: document.getElementById("email").value,
    senha: document.getElementById("senha").value,
    confirmarSenha: document.getElementById("cSenha").value,
  };

  const erro = {
    erroNome: document.querySelector("span#avisoNome"),
    erroCPF: document.querySelector("span#avisoCPF"),
    erroData: document.querySelector("span#avisoData"),
    erroTel: document.querySelector("span#avisoTelefone"),
    erroEmail: document.querySelector("span#avisoEmail"),
    erroSenha: document.querySelector("span#avisoSenha"),
    erroCsenha: document.querySelector("span#avisoCsenha"),
  };

  let formIsValid = true;

  // Validação do Nome
  if (usuario.nome.length === 0) {
    erro.erroNome.innerHTML = "<strong>Preencha o campo com Nome.</strong>";
    formIsValid = false;
  } else {
    erro.erroNome.innerHTML = "";
  }

  // Validação do CPF
  if (usuario.cpf.length === 0) {
    erro.erroCPF.innerHTML = "<strong>Preencha o campo CPF.</strong>";
    formIsValid = false;
  } else if (!/^\d{11}$/.test(usuario.cpf)) {
    erro.erroCPF.innerHTML = "<strong>CPF inválido.</strong>";
    formIsValid = false;
  } else {
    erro.erroCPF.innerHTML = "";
  }

  // Validação da Data de Nascimento
  if (usuario.data.length === 0) {
    erro.erroData.innerHTML = "<strong>Preencha o campo Data de Nascimento.</strong>";
    formIsValid = false;
  } else {
    const dataAtual = new Date();
    const dataNascimento = new Date(usuario.data);
    let idade = dataAtual.getFullYear() - dataNascimento.getFullYear();
    const mes = dataAtual.getMonth() - dataNascimento.getMonth();

    if (mes < 0 || (mes === 0 && dataAtual.getDate() < dataNascimento.getDate())) {
      idade--;
    } 
    if (idade < 18) {
      erro.erroData.innerHTML = "<strong>Você precisa ter no mínimo 18 anos para criar uma conta.</strong>";
      formIsValid = false;
    } else {
      erro.erroData.innerHTML = "";
    }
  }

  // Validação do Telefone
  if (usuario.telefone.length === 0) {
    erro.erroTel.innerHTML = "<strong>Preencha o campo Telefone.</strong>";
    formIsValid = false;
  } else if (usuario.telefone.length < 10) {
    erro.erroTel.innerHTML = "<strong>O telefone precisa ter 10 dígitos.</strong>";
    formIsValid = false;
  } else {
    erro.erroTel.innerHTML = "";
  }

  // Validação do E-mail
  if (usuario.email.length === 0) {
    erro.erroEmail.innerHTML = "<strong>Preencha o campo E-mail.</strong>";
    formIsValid = false;
  } else {
    erro.erroEmail.innerHTML = "";
  }

  // Validação da Senha
  if (usuario.senha.length === 0) {
    erro.erroSenha.innerHTML = "<strong>Preencha o campo Senha.</strong>";
    formIsValid = false;
  }
  if (usuario.senha.length < 8) {
    erro.erroSenha.innerHTML = "<strong>A senha precisa ter no mínimo 8 caracteres.</strong";
    formIsValid = false;
  } else {
    erro.erroSenha.innerHTML = "";
  }

  // Validação da Confirmação de Senha
  if (usuario.confirmarSenha.length === 0) {
    erro.erroCsenha.innerHTML = "<strong>Preencha o campo Confirmar Senha.</strong>";
    formIsValid = false;
  } else if (usuario.senha !== usuario.confirmarSenha) {
    erro.erroCsenha.innerHTML = "<strong>As senhas não coincidem.</strong>";
    formIsValid = false;
  } else {
    erro.erroCsenha.innerHTML = "";
  }

  // Tudo Válido
  if (formIsValid) {
    const contaCriada = document.getElementById("contaCriada");
    contaCriada.innerHTML = "<strong>Conta criada com êxito.</strong>";
  }
}