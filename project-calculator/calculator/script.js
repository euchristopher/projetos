// Armazena o número atualmente sendo digitado ou exibido na tela
let currentInput = "0";
// Armazena o número anterior ou o resultado da operação
let previousInput = "";
// Armazena o operador selecionado (+, -, x, ÷)
let operator = null;
// Seleciona a tela da calculadora
const screen = document.querySelector(".screen");
// Função para lidar com o clique em um botão
function handleButtonClick(value) {
    if (value === "C") {
        // Se o botão "C" for clicado, limpa a calculadora
        currentInput = "0";
        previousInput = "";
        operator = null;
    } else if (value === "=") {
        // Se o botão "=" for clicado, realiza a operação e exibe o resultado
        if (operator !== null) {
            currentInput = operate(previousInput, currentInput, operator);
            previousInput = "";
            operator = null;
        }
    } else if (["+", "-", "x", "÷"].includes(value)) {
        // Se um operador for clicado, realiza a operação com o número anterior
        // e armazena o novo operador
        if (operator !== null) {
            currentInput = operate(previousInput, currentInput, operator);
        }
        previousInput = currentInput;
        operator = value;
        currentInput = "0";
    } else {
        // Se um número for clicado, adiciona-o ao input atual
        if (currentInput === "0") {
            currentInput = value;
        } else {
            currentInput += value;
        }
    }
    updateScreen(); // Atualiza a tela com o valor atual
}

// Função para realizar a operação matemática com base no operador
function operate(num1, num2, operator) {
    num1 = parseFloat(num1); // Converte o primeiro número para float
    num2 = parseFloat(num2); // Converte o segundo número para float
    switch (operator) {
        case "+":
            return num1 + num2; // Realiza a adição
        case "-":
            return num1 - num2; // Realiza a subtração
        case "x":
            return num1 * num2; // Realiza a multiplicação
        case "÷":
            return num2 !== 0 ? num1 / num2 : "Error"; // Realiza a divisão, evita divisão por zero
        default:
            return 0; // Retorna 0 para operadores desconhecidos
    }
}

// Função para atualizar a tela da calculadora com o valor atual
function updateScreen() {
    screen.textContent = currentInput;
}

// Adiciona um ouvinte de eventos aos botões da calculadora
document.querySelector(".buttons").addEventListener("click", function(event) {
    // Verifica se o elemento clicado é um botão
    if (event.target.classList.contains("btn")) {
        // Lida com o clique do botão
        handleButtonClick(event.target.dataset.value);
    }
});
