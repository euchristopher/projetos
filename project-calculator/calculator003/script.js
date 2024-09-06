let buffer = "0"; // Armazenador de Números
let runningTotal = 0; // Armazenamento total
let previousOperator = null; // Armazenamento de operador
const screen = document.querySelector(".screen"); // Tela

function buttonClick(value) {
  if (isNaN(value)) {
    handleSymbol(value);
  } else {
    handleNumber(value);
  }
  screen.innerText = buffer;
}

function handleSymbol(symbol) {
  switch(symbol) {
    case "C":
      buffer = "0";
      runningTotal = 0;
      previousOperator = null;
    break;
    case "←":
      if (buffer.length === 1) {
        buffer = "0";
      } else {
        buffer = buffer.substring(0, buffer.length - 1);
      }
    break;
    case "=":
      if (previousOperator === null) {
        return;
      }
      flushOperation(parseFloat(buffer));
      previousOperator = null;
      buffer = runningTotal.toString();
      runningTotal = 0;
    break;
    case "±":
      buffer = (parseFloat(buffer) * -1).toString(); // Inverte o sinal do número
    break;
    case "%":
      buffer = (parseFloat(buffer) / 100).toString(); // Calcula a porcentagem
    break;
    default:
      handleMath(symbol);
    break;
  }
}

function handleNumber(numberString) {
  if (buffer === "0") {
    buffer = numberString;
  } else {
    buffer += numberString;
  }
}

function flushOperation(floatBuffer) {
  if (previousOperator === "+") {
    runningTotal += floatBuffer; // Realiza a adição
  } else if (previousOperator === "-") {
    runningTotal -= floatBuffer; // Realiza a subtração
  } else if (previousOperator === "x") {
    runningTotal *= floatBuffer;
  } else if (previousOperator === "÷") {
    if (floatBuffer === 0) {
      alert("Não é possível dividir por zero!");
      return;
    }
    runningTotal /= floatBuffer;
  }
}

function handleMath(symbol) {
  const floatBuffer = parseFloat(buffer);
  if (buffer === "0") {
    return;
  }
  if (runningTotal === 0) {
    runningTotal = floatBuffer;
  } else {
    flushOperation(floatBuffer);
  }
  previousOperator = symbol;
  buffer = "0";
}

function init() {
  document.querySelector(".calc-buttons").addEventListener("click", function(event) {
    if (event.target.tagName === "BUTTON") {
      buttonClick(event.target.innerText);
    }
  });
}

init();
