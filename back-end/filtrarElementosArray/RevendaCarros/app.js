const modelo = document.getElementById('inModelo')
const preco= document.getElementById('inPreco')

const outLista = document.getElementById('outLista')

const btnAdicionar = document.getElementById('btnAdicionar')
const btnListar = document.getElementById('btnListar')
const btnFiltrar = document.getElementById('btnFiltrar')

const adicionarCarro = () => {
    const modelo = inModelo.value;
    const preco = Number(inPreco.value)

    if(modelo ===''|| preco<= 0 || isNaN(preco)){
        alert('Informe os dados corretamente')
        inModelo.focus()
        return
    }
    carros.push({modelo: model, preco:preco});
    console.log(carros);
    inModelo ="";
    inPreco ="";

}

const listarCarros =() =>{
    if(carros.length ===0 ){
        alert('Não tem carros cadastrados');
        inModelo.focus();
        return;

    }

    let lista = '' ;
    carrosFiltrados.forEach((carros)=>{
        return (lista+= `${carros.modelo} --- ${carros.preco} \n`)
    })
        
   
}

btnAdicionar.addEventListener('click', adicionarCarro)

const filtrarPreco = () =>{
    //filter , forEach 
    const maximo = Number(prompt('Qual o valor máximo que o cliente deseja pagar'))

    if(maximo === 0||isNaN(maximo)){
        alert('Por favor, preencha os dados corretamente')
        return
    }

    const carrosFiltrados = carros.filter((carro)=>{
        return carro.preco <= maximo;
    })

}
btnFiltrar.addEventListener('click', filtrarPreco)



