//USANDO FOR
/*let numero = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
for (let i = 0; i < numero.length; i++) {
  console.log(`o vetor na posição ${i} tem o numero ${numero[i]}`)
}*/

/*let numero = []
for (let i = 0; i <= 10; i++) {
  numero.push(i)
}
console.log(numero)*/

/*let numero = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let resultado = ""; // String vazia para armazenar o resultado

for (let i = 0; i < numero.length; i++) {
  resultado += numero[i] + " "; // Adiciona cada número seguido de um espaço
}

console.log(resultado.trim()); // Exibe os números organizados e remove o espaço extra no final*/

/*let numero = []; // Array vazio
let tamanho = 10; // Define o tamanho do array

for (let i = 1; i <= tamanho; i++) {
  numero.push(i); // Preenche o array com números de 1 até o valor de 'tamanho'
}

console.log(numero.join(", ")); // Exibe os números organizados em uma linha, separados por vírgula*/

/*let numero = [];
let tamanho = 10;

for (let i = 1; i <= tamanho; i++) {
  numero.push(i); // Preenche o array com números de 1 até o valor de 'tamanho'
}

for (let i = 0; i < numero.length; i++) {
  console.log(`Vetor ${i + 0}: ${numero[i]}`); // Exibe o índice (vetor) e o valor correspondente
}*/

/*let numero = [];
let tamanho = 10;

for (let i = 1; i <= tamanho; i++) {
  numero.push(i); // Preenche o array com números de 1 até o valor de 'tamanho'
}

for (let index in numero) {
  console.log(`Vetor ${Number(index) + 0}: ${numero[index]}`); // Exibe o índice (vetor) e o valor correspondente
}*/

//USANDO FOR IN
/*let nomes = ["Alice", "Bob", "Carlos", "Diana", "Eva"];

for (let index in nomes) {
  console.log(`Nome ${Number(index) + 1}: ${nomes[index]}`);
}*/

/*let pessoa = {
  nome: "João",
  idade: 25,
  cidade: "São Paulo"
};

for (let propriedade in pessoa) {
  console.log(`${propriedade}: ${pessoa[propriedade]}`);
}*/

/*let numero = [5, 10, 15, 20, 25];
let soma = 0;

for (let index in numero) {
  soma += numero[index];
}
console.log(`A soma dos números é: ${soma}`);*/

/*let notas = [8, 7.5, 9, 6, 8.5];
let somaNotas = 0;
for (let index in notas) {
  somaNotas += notas[index];
}
let media = somaNotas / notas.length;
console.log(`A média das notas é: ${media.toFixed(2)}`);*/

/*let palavras = ["JavaScript", "HTML", "CSS", "React"];
let totalCaracteres = 0;
for (let index in palavras) {
  totalCaracteres += palavras[index].length;
}
console.log(`Total de caracteres: ${totalCaracteres}`);*/

/*let frutas = ["maçã", "banana", "laranja", "uva"]

for (let index in frutas)
  frutas[index] = frutas[index].toUpperCase()

console.log(`As frutas sao: ${frutas}`)*/