const nome = document.getElementById('inNome')
const idade = document.getElementById('inIdade')

const btnAdicionar = document.getElementById('btnAcionar')
const btnListar = document.getElementById('btnListar')

const outLista = document.getElementById('outListar')


const adiconarCrianca = () => {
    const nome = inModelo.value;
    const idade = Number(inIdade.value)

    if(nome ==='' || idade<=0 || isNaN(idade)){
        alert('informe os dados corretamentes')
        
    }
}


