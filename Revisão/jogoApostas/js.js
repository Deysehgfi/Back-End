const num = [1,100];
//Entrada de dados
 const inNumero = document.getElementById('inNumero')

//saída de dados

const outErros = document.getElementById('outErros')
const outChances = document.getElementById('outChances')
const outDica =document.getElementById('outDica')

//butões
const btnApostar = document.getElementById('btnApostar')
const btnJogar = document.getElementById('btnJogar')


//gerar numeros aleatórios 
const sorteado = Math.floor(Math.random()*2)+1


btnApostar.addEventListener('click' , ()=>{
    let Num = inNumero.value

    if(Num=== ''){
        alert('Digite um número')

    }
     if(Num===sorteado){
        alert('Parabéns!! você ganhou!!')
    }

    else{
        
    }


})
