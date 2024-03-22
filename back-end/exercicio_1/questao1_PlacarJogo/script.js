// const ClubeNome = document.querySelector('inClube')

// const btnAdicionar = document.querySelector('btnAddClube')
// const btnListar = document.querySelector('btnListar')
// const btnPlacar = document.querySelector('btnPlacar')

// const Listar = document.querySelector('outListar')

// let clubes = []


//  btnAddClube.addEventListener('click' ,()=>{
// const ClubeNome = inClube.value;//atribuir um valor ao id inclube 

// if(ClubeNome===''){
//     alert('Preencha com o nome do clube!')
//      clubes.pull(ClubeNome)
// }

// clubes.push(ClubeNome) //coloca dentro do parentese o que quer adiconar no array clubes 

// console.log(clubes)

//  })


//  btnListar.addEventListener('click' ,()=>{

//   if(clubes===0){
//     alert('Não possui nenhum clube na lista')
//   }
  
//   let lista = '' //criar um varivel lista 
//   clubes.map((clube,index)=>{ //chamar o parametro index e o clube 
//      return lista += `${index+1} - ${clube} \n`
//     // retorna lista o parametro index q inicia no 0 mas adicionamos o mais 1 e o nome do clube
 
//   })
//   console.log(lista)
//   outListar.textContent = lista;

//  })
 
// const inClube = document.getElementById('inClube')
// const btnAdicionar = document

const clubes = []
const inClube = document.getElementById('inClube')
const btnAdicionar = document.getElementById('btnAdicionar')
const btnListar = document.getElementById('btnListar')
const btnPlacar =document.getElementById('btnPlacar')
const outListar = document.getElementById('outListar')




const adicionarClube = () => {
  const clube = inClube.value 
  if(clube == ''){
    alert('preencha o campo corretamente')
    inClube.focus() //---------------------------------------------
    return
  }
  clubes.push(clubes)
  console.log(clubes)
  inClube.value = ''
  inClube.focus()
};

btnAdicionar.addEventListener('click', adicionarClube);

//listar clubes -----------------------------------------------------------------------------------------
const listarClube = () =>{
  if(clubes.length ===0){
    alert('Não existe clubes cadastrados')
    return
  }
  let lista = ''
  clubes.forEach((clube, index)=> {
    return lista +=`${index+1}. ${clube}\n`
  })
  outListar.textContent = lista
};

btnListar.addEventListener('click', listarClube);

//montar placar-----------------------------------------------------------------------------------------------------
const montarJogos = ()=>{
  if(clubes.length%2 != 0 ||clubes.length ===0 ){
    alert('Impossível fazer a tabulação com essa quantidade de elementos')
    return
  }
  const metadeInicio = clubes.slice(0,clubes.length/2)
  const metadeFim = clubes.slice(clubes.length/2, clubes.length)
  
  // console.log(clubes);
  // console.log(metadeInicio);
  // console.log(metadeFim);

  let lista = ''
  for(let i=0; i< metadeInicio.length; i++){
    lista += `${i+1}. ${metadeInicio[i]} X ${metadeFim}`
  }
  outListar.textContent = lista
};
btnPlacar.addEventListener('click', montarJogos);