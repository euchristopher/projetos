let lista = document.querySelector("div.lista")
let nota = document.querySelector("div.nota")
function inlista(l) {
  if (l.indexOf(nota) !== -1) {
    return true
  } else {
    return false
  }
}


function add() {
  if (!inLista(lista, nota)) {
    lista.push(nota)
  } else {
    alert(`Invalido!`)
  }
}

document.querySelector(".btn").addEventListener("click", function(){
  if (inLista()) {
    add()
  }
})