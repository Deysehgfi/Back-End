// const Adicionar = document.getElementById('btnAdicionar') //não precisa de . nem #
// const Urgencia = document.getElementById('btnUrgencia')
// const Atender = document.getElementById('btnAtender')
// const inpaciente = document.querySelector('inPaciente') // se usar o querySelector precisa de #
// const FilaEspera = []

// btnAdicionar.addEventListener('click',()=>{
//     // paciente = Text(inPaciente).text

//    FilaEspera.unshift(inPaciente)
//    document.getElementById("outLista").innerHTML = `${FilaEspera}`

// })



const pacientes = []
//Refêrencia para a entrada de dados
const inPaciente = document.getElementById('inPaciente')

//Saída de dados

const outAtendimento = document.getElementById('outAtendimento')
const outLista = document.getElementById('outLista')

//Botões
const btnAdicionar = document.getElementById('btnAdicionar')
const btnUrgencia = document.getElementById('btnUrgencia')
const btnAtender = document.getElementById('btnAtender')

const adicionaPaciente = () => {
    let nome = inPaciente.value
    if(nome === ''){
        alert('Informe o nome do paciente')
        return
    }
    pacientes.push(nome)
    let lista = ''

    pacientes.map((paciente, index)=>{
        return lista += `${index+1} - ${paciente} \n`
    })

    outLista.textContent = lista;
    inPaciente.value = ''
};

const adicionaUrgencia = () => {
    let nome = inPaciente.value
    if(nome === ''){
        alert('Informe o nome do paciente')
        return
    }
    pacientes.unshift(nome)
    let lista = ''

    pacientes.map((paciente, index)=>{
        return lista += `${index+1} - ${paciente} \n`
    })

    outLista.textContent = lista;
    inPaciente.value = ''
};



btnAdicionar.addEventListener('click', adicionaPaciente)
btnUrgencia.addEventListener('click', adicionaUrgencia)

//-------------------------------------------------------------------------------------------------------
btnAdicionar.addEventlistener("click", adicionarPaciente);
const adicionarUrgencia = ()=> {


};

btnUrgencia.addEventlistener("click", adicionarUrgencia)


const atenderPaciente = () =>{
    if(paciente.length === 0){
        alert('Não existe paciente na fila de espera');
        return;
    }

    let Atender = paciente.shift()
    outAtendiment.textContent = Atender

}