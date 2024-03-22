const Num = document.querySelector('inNumero')

const Adicionar = document.querySelector('btnAdicionar')
const Verificar = document.querySelector('btnVerificar')
const Listar =document.querySelector('outListar')

let numeros = []


const adicionarNum = ()=>{
    
    const  numero = Number(inNumero.value)
    if(numeros===0 || isNaN(numero)){
        alert('preencha corretamente')
        return
    }
    const numeroIgual = numeros.includes(numero)

    if(!numeroIgual){
        numeros.push(numero)
    }
    else{
        alert('numeron repetido')
        inNumero.value = ''
    } numeros.push(numero)



outListar.textContent = `${numeros.join(',')}`
}

btnAdicionar.addEventListener('click', adicionarNum);

const Verificarordem = () =>{
    if(numeros.length ===0 ){
        alert('n tem nº no array')
        return
    }
}




// btnAdicionar.addEventListener('click', ()=>{
//    const Num = Number(inNumero.value)
//     if(Num === 0){
//         alert('Digite um Número Por favor!')
//         numeros.pull()
//     }
    
//     numeros.push(Num)
//     // let lista =''
//     numeros.map((num)=>{
//        num == numeros
//           return alert('digite um numero diferente')
        
//     })
//     console.log(numeros)
//     outListar.textContent = numeros;
// })