//estrutura de dados ARRAY
//|var - - - - - -|
// const array = []
// array [1] =3 
// array[1] = 6

// const numero = 3
// numero = 5 

//criar um array-------------------------
const array = []
const vetor = new Array()

console.log(typeof array) 
console.log(typeof vetor)
//retorna objeto

//referência aos elementos de um array ------------------------------
const produtos = ['Arroz', 'Fwijão', 'Iogurt']
console.log(produtos[0])



//inclusão e exclusão de elementos/itens ------------------------------

//metodos para adcionar---

const estados = ["Alagoas"]
estados.push('Recife') //Push -> adciona um elemento no final de um arrray
console.log(estados)

estados.unshift("Bahia") // Unshift -> adciona um elemento no inicio do array
console.log(estados)

//metodos para excluir---
estados.pop() //Pop -> Excluir um elemento no final do array
console.log(estados)

estados.shift() //Shift -> Excluir um elemento no inicio do array
console.log(estados)


//Verificar o tamanho/quantidade de itens dentro de um array ----------------------------------------------------------------------------------------------------
const numeros = [1,2,3,4,5,6]
console.log(`Tamanho do Array: ${numeros.length}`) 

//Apresentar dados de um array
const cidades = ['Maceió', 'Rio Largo', 'Marechal']
console.log(`${cidades}\t ${cidades.toString()} \t ${cidades.join(' - ')}`) //separar dados do array

