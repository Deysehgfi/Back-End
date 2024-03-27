// const IDBus = document.getElementById('IDBus')
// const bntBuscar = document.getElementById('btnBuscar')



// const listTudo = () => {
//         IDBus = Number(IDBus.value)
//         console.log(HorarioLinha(IDBus))
// }

// bntBuscar.addEventListener('click',() =>{
//     console.log(HorarioLinha)
// })
//--------------------------------------------------------------------------------------------

// const data = require('./onibus.json') //import os dados do json
// // import data from './onibus.json'
// // console.log(data)

// console.log(HorarioLinha(idLinha))
// console.log(OnibusLinha(data))


// function HorarioLinha(data){
//     return data.linhas[1].horarios
//     // return data["linhas"][1]["horarios"]
// }

// // function OnibusLinha(data){
// //         const filtrar = data.onibus.filter((num) => { 
// //             return num })
// //         }

//-----------------------------------------------------------------------
const data = require('./onibus.json')
//crie um função que aceite o id da linha como entrada e retorne os horários de partida e chegada para essa linha.
const horarioPorLinha = (idLinha) =>{
    const linha = data.linhas.find((linha)=> linha.id === idLinha)
    console.log(linha)
    // console.log(linha)
    if(linha){
       const horarios = linha.horarios.map((horario)=>{
        return `Saída: ${horario.saida}, chegada: ${horario.chegada}`
       })
       return horarios.join('\n')
       
    }
    else{
       return {menssage: "Não foi encontrada um linha"}
    }
}

const id = 1
const horarioDasLInhas = horarioPorLinha(id)
console.log(horarioDasLInhas)