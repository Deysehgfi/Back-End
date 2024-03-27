const data = require('./onibus.json')

const contarOnibusDisponiveisPorLinha = (idlinha) => {
    const onibusDaLinha = data.onibus.filter((onibus) => onibus.linha === idlinha)
    return onibusDaLinha.length != 0 ? {onibusDaLinha} : {menssge: 'Não tem onibus para essa linha'}

    
}
const is = 2
const onibusDisponivel = contarOnibusDisponiveisPorLinha(id)
console.log(onibusDisponivel)
