// const IDBus = document.getElementById('IDBus')
// const bntBuscar = document.getElementById('btnBuscar')



// const listTudo = () => {
//         IDBus = Number(IDBus.value)
//         console.log(HorarioLinha(IDBus))
// }

// bntBuscar.addEventListener('click',() =>{
//     console.log(HorarioLinha)
// })

const data = require('./onibus.json') //import os dados do json
// import data from './onibus.json'
// console.log(data)

console.log(HorarioLinha(data))
console.log(OnibusLinha(data))


function HorarioLinha(data){
    return data.linhas[1].horarios
    // return data["linhas"][1]["horarios"]
}

function OnibusLinha(data){
        const filtrar = data.onibus.filter((num) => { 
            return num })
        }


