const ClubeNome = document.querySelector('inClube')

const btnAdicionar = document.querySelector('btnAddClube')
const btnListar = document.querySelector('btnListar')
const btnPlacar = document.querySelector('btnPlacar')

const Listar = document.querySelector('outListar')

let clubes = []


 btnAddClube.addEventListener('click' ,()=>{
const ClubeNome = inClube.value;//atribuir um valor ao id inclube 

if(ClubeNome===''){
    alert('Preencha com o nome do clube!')
     clubes.pull(ClubeNome)
}

clubes.push(ClubeNome) //coloca dentro do parentese o que quer adiconar no array clubes 

console.log(clubes)

 })


 btnListar.addEventListener('click' ,()=>{

  if(clubes===0){
    alert('Não possui nenhum clube na lista')
  }
  
  let lista = '' //criar um varivel lista 
  clubes.map((clube,index)=>{ //chamar o parametro index e o clube 
     return lista += `${index+1} - ${clube} \n`
    // retorna lista o parametro index q inicia no 0 mas adicionamos o mais 1 e o nome do clube
 
  })
  console.log(lista)
  outListar.textContent = lista;

 })
 
