const fs = require('fs')

console.log(fs)
fs.readFile('arquivo.txt', 'utf8', (err, data)=>{
//data é tudo aquilo que vai ser entregue
if(err){
    console.log(err)
}
console.log(data)
 
})
//readfile ler um arquivo