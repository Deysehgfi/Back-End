module.exports = {
    soma(a,b){
        console.log(`${a+b}`);
    },

    aoQuadrado(a){
        console.log(`${a*a}`);
    },

    subtracao(a,b){
        console.log(`${a-b}`);
    },

    divisao(a,b){
        if(b<= 0){
            console.log(`erro ${b}`);
            return
        }
        console.log(`${a/b}`);

    }
}