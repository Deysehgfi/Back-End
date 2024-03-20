const Num = document.querySelector('inNumero')

const Adicionar = document.querySelector('btnAdicionar')
const Verificar = document.querySelector('btnVerificar')
const Listar =document.querySelector('outListar')

let numeros = []


btnAdicionar.addEventListener('click', ()=>{
   const Num = Number(inNumero.value)
    if(Num === 0){
        alert('Digite um Número Por favor!')
        numeros.pull()
    }
    
    numeros.push(Num)
    // let lista =''
    numeros.map((num)=>{
       num == numeros
          return alert('digite um numero diferente')
        
    })
    console.log(numeros)
    outListar.textContent = numeros;
})