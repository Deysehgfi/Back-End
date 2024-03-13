//LEt e Const
// -> LET : 
// -> CONST : é usada para definir variáveis cujo valor n pode ser alterado após o valor inicial ser atribuido


let filme ='Senhor dos aneis'

//1° Global
{
    //2° Função
    let filme2 ='Star Wars'

    if(true){
        //3° Bloco
        let filme3 = 'Barbie'
        console.log(filme)
        console.log(filme2)
        console.log(filme3)
    }
    console.log(filme)
    console.log (filme2)//variavel filme2 só funciona dentro desse bloco de código
    console.log(filme3) //variavel filme3 foi criada dentro do bloco 3° (if) só funcionando dentro dele

}

console.log(filme)
console.log(filme2)
console.log(filme3)