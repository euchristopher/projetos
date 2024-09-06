const form = document.getElementById('form');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  
  const weight = parseFloat(document.getElementById('weight').value);
  const height = parseFloat(document.getElementById('height').value);
  
  if (isNaN(weight) || isNaN(height)) {
    alert("Por favor, insira valores válidos para peso e altura.");
    return;
  }

  const bmi = (weight / (height * height)).toFixed(2);
  const value = document.getElementById('value');
  const descriptionElement = document.getElementById('description');

  let description = "";

  if (bmi < 18.5) {
    description = "Abaixo do peso";
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    description = "Peso normal";
  } else if (bmi >= 25 && bmi <= 29.9) {
    description = "Sobrepeso";
  } else if (bmi >= 30 && bmi <= 34.9) {
    description = "Obesidade grau 1";
  } else if (bmi >= 35 && bmi <= 39.9) {
    description = "Obesidade grau 2";
  } else {
    description = "Obesidade grau 3";
  }
  // Atribuir o valor do IMC ao elemento
  value.textContent = bmi;
  value.textContent = bmi.replace(".", ",");
  // Atribuir a descrição baseada no valor do IMC
  descriptionElement.textContent = description;

  // Mostrar a seção de informações
  document.getElementById('infos').classList.remove('hidden');
});
