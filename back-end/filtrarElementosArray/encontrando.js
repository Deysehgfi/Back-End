//pesquisar e filtrar dados e um array 
const numbers = [1, 2, 3, 4, 5];

//Encontar o primeiro elemento que satisfaz a condição ------------------------------------------
const encontrado = numbers.find((num) => num > 2);
console.log(encontrado);


//cria um novo array com todos elementos que passaram no teste------------------------------------------
const filter = numbers.filter((num) => num %2 ===0 );
console.log(filter);

//Verifica se um array possui um determinado valor, retorna true ou false ---------------------------------------
const includes = numbers.includes(4);
console.log(includes); // o numero 4 esta incluso no array?
//se sim ele retorna verdadeiro se não eleretorna falso

//Todos os elementos do array passam no teste de lógica fa função---------------------------------- 
const every = numbers.every((num) => num%2 === 0);
console.log(every)
//verifica se todos os elementos do array ele retorna verdadeiro 
//se nao ele retorn falso


//Verifica se pelo menos um elemento no array satisfaza condição-----------------------------------------------
const some = numbers.some((num)=> num%2 ===0);
console.log(some)
//se um elemento do array satisfaz a condição se sim ele retorna com verdadeiro(true) se não retorna como falso(false)


