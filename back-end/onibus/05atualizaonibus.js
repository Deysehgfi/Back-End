const data = require('./onibus.json')

const infoOnibus = (idOnibus) => {
    const encontrarOnibus = data.onibus.filter((onibus) =>{
        onibus.id === idOnibus})

        return encontrarOnibus != 0 ? {encontrarOnibus}: {message: 'nao encontrado'}

}

const onibusID = 'A101'
const onibusInfo = infoOnibus(onibusID)
console.log(onibusInfo)