function campo() {
  // Coleta os valores dos campos nome e velocidade
  const userInput = document.querySelector(".nome");
  const velInput = document.querySelector(".vel");

  const user = userInput.value;
  const velocidade = Number(velInput.value);

  // Verifica se os dois campos estão vazios
  if (user === "" && velocidade === 0) {
    alert("Preencha os CAMPOS.");
    userInput.focus(); // Foca no campo de nome
    return false;
  } else if (user === "") {
    alert("Preencha o campo NOME.");
    userInput.focus(); // Foca no campo de nome
    return false;
  } else if (velocidade === 0) {
    alert("Preencha o campo VELOCIDADE.");
    velInput.focus(); // Foca no campo de velocidade
    return false;
  } else {
    return true;
  }
}

function multa() {
  const velInput = document.querySelector(".vel");
  const velocidade = Number(velInput.value);
  const res = document.querySelector(".res");

  if (velocidade <= 60) {
    res.innerHTML = "Tudo ok.";
  } else if (velocidade > 60 && velocidade <= 80) {
    res.innerHTML = "Multado.";
  } else if (velocidade > 80) {
    res.innerHTML = "Ponto na carteira e multado";
  }
}

// Adiciona um ouvinte de evento no botão para que o clique acione as funções
document.querySelector(".btn").addEventListener("click", function() {
  // Primeiro verifica se os campos estão corretos
  if (campo()) {
    // Se estiverem corretos, chama a função multa
    multa();
  }
});
