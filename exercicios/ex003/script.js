function calculateIMC() {
  const altura = 1.73
  const peso = 70
  const imc = peso / (altura * altura)
  if (imc >= 18.5 && imc <=24.9) {
    console.log(`O seu imc é ${imc.toFixed(2)}. Você está com peso normal.`)
  } else if (imc >= 25 && imc <= 29.9) {
    console.log(`O seu IMC é ${imc.toFixed(2)}. Você esta com sobrepeso.`)
  } else if (imc >= 30 && imc <= 34.9) {
    console.log(`O seu IMC é ${imc.toFixed(2)}. Você está com obesidade grau 1.`)
  } else if (imc >= 35 && imc <= 39.9) {
    console.log(`O seu IMC é ${imc.toFixed(2)}. Você está com obesidade grau 2.`)
  } else {
    console.log(`O seu IMC é ${imc.toFixed(2)}. Você está com obesidade grau 3.`)
  }
}
calculateIMC()