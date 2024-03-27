const data = require('./onibus.json')

const listarParadasPorLinha = (idLinha) => {
    const linha = data.linhas.find((linha)=> linha.id === idLinha)
    console.log(linha)
    if(linha){
        const ParadasOrdenadas = linha.paradas.sort((a,b)=>{a.ordem - b.ordem})
        return {ParadasOrdenadas}
    }
    else{
        return {message: 'Paradas não encontradas para linha solicitada'}
    }
}

const id = 1 
const ParadasPorLinha = listarParadasPorLinha(id)
console.log(ParadasPorLinha)
