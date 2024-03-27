const data = require('./onibus.json')

const onibusPorStatus = (status)=> {
    const onibus = data.onibus.filter((onibus)=> onibus.status === status)
    return onibus.length != 0 ? {onibus}:{message:'onibus nao encontrado'}
}
const Onibustatus = 'em operação'
const situacaoOnibus = onibusPorStatus(Onibustatus)