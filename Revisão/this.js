
const pessoa = {
    saudacao: 'Ola, seus , monstros!',
    falar(){
        console.log(this.saudacao)
        //this faz referencia a saudação 

    }
}
pessoa.falar()
const falar = pessoa.falar
falar()


//função bind------------------------------------------------------------------------------------------------------------------
const pessoaFala = pessoa.falar.bind(pessoa)
pessoaFala()


function Pessoa(){
    this.idade = 0 
    setInterval(function(){
        console.log(this.idade++)
    }.bind(this), 1000)

    new pessoa

    const self = this 
    setInterval(function(){
        self.idade++
        console.log(self.idade)
    },1000)
}
new Pessoa2
