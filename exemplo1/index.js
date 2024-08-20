const num = document.querySelector("input#inum");
const lista = document.querySelector("select#ilista");
const res = document.querySelector("div#res");
const valores = [];
function isNumber(n) {
  if (Number(n) >= 1 && Number(n) <= 100) {
    return true;
  } else {
    return false;
  }
}
function inLista(n, l) {
  if (l.indexOf(Number(n)) != -1) {
    return true;
  } else {
    return false;
  }
}
function adicionar() {
  if (isNumber(num.value) && !inLista(num.value, valores)) {
    valores.push(Number(num.value));
    const item = document.createElement("option")
    item.text = `Valor ${num.value} foi adicionado.`
    lista.appendChild(item)
    res.innerHTML = ""
  } else {
    alert("Invalido");
  }
  num.value = ""
  num.focus()
}
function finalizar() {
  if (valores.length == 0) {
    alert("Digite pelo menos 1 número antes de finalizar.")
  } else {
    let total = valores.length
    let maior = valores[0]
    let menor = valores[0]
    let soma = 0
    let media = 0
    for(let pos in valores) {
      soma += valores[pos]
      if(valores[pos] > maior)
        maior = valores[pos]
      
      if(valores[pos] < menor) 
        menor = valores[pos]
      }
      media = soma / total
      res.innerHTML = ""
      res.innerHTML += `<p><br>Ao todo temos ${total} números registrados.</p>`
      res.innerHTML += `<p><br>O maior numero e ${maior}.</p>`
      res.innerHTML += `<p><br>O menor numero e ${menor}.</p>`
      res.innerHTML += `<p><br>Somando todos os valores o total e ${soma}</p>`
      res.innerHTML += `<p><br>A media dos valores e ${media}</p>`
    }
}