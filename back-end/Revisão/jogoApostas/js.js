// const num = [];
// //Entrada de dados
//  const inNumero = document.getElementById('inNumero')

// //saída de dados

// const outErros = document.getElementById('outErros')
// const outChances = document.getElementById('outChances')
// const outDica =document.getElementById('outDica')

// //butões
// const btnApostar = document.getElementById('btnApostar')
// const btnJogar = document.getElementById('btnJogar')


// //gerar numeros aleatórios 
// const sorteado = Math.floor(Math.random()*2)+1


// btnApostar.addEventListener('click' , ()=>{
//     let Num = inNumero.value

//     if(Num=== ''){
//         alert('Digite um número')

//     }
//      if(Num===sorteado){
//         alert('Parabéns!! você ganhou!!')
//     }

//     else{
        
//     }


// })








const erros = []; //variavel para armazenar dados
const numeroSorteado = Math.floor(Math.random()*100)+1;
console.log(numeroSorteado)
const tentativas = 6

//botões---------------
const btnApostar = document.getElementById('btnApostar')
const btnJogar = document.getElementById('btnJogar')

const apostarNumero = () => {
    const inNumero = document.getElementById('inNumero')
    let numero = Number(inNumero.value)
    //vaalidação--------------
    if(numero<= 0|| isNaN(numero)){
        alert('numbero invalido')
        inNumero.focus()
        return
    }

    const outErros = document.getElementById('outErros')
    const outChances = document.getElementById('outChances')
    const outDicas = document.getElementById('outDicas')

    //logica da aplicação

    if(numero=== numeroSorteado){
        alert('Parabéns você acertou!!!')
        btnApostar.disable = true
        outDicas.textContent = `Parabéns! Número sorteado ${numeroSorteado}`

    }else{
        if(erros.indexOf(numero) >= 0){
            alert(`Voê ja apostou o número${numero}... Tente novamente com outro número`)
        }else{
            erros.push(numero)
            let numErros = erros.length
            let numChances = tentativas - numErros //diminuir o num de tentativas a cada chance colocada

            outErros.textContent = `${numErros} (${erros.join(',')})`
            outChances.textContent = numChances
            
            if(numChances == 0){
                btnApostar.disable = true
                outDicas.textContent = `Fim de jogo! Número sorteado ${numero}`
            }else{
                let dica = numero < numeroSorteado ? "Maior": "Menor"
                outDicas.textContent = `Dica: Tente um número ${dica} que ${numeroSorteado}`
            }
        }
    }
    inNumero.value =''
    inNumero.focus()

}
btnApostar.addEventListener('click', apostarNumero)

btnJogar.addEventListener('click', ()=>{
    window.location.reload()
})