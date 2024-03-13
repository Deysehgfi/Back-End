//parametro padrão
//valores são passados mesmo q der undefined 

function test(x, y, z){
    return x + y + z 

}
console.log(test(), test(1), test(1,2,3))


//soma1---------------------------------------------------------------------------------------
function soma(x, y, z){
    x = x || 1 
    y = y || 1 
    z = z || 1 
    //se o usuário digitar o valor x logo o valor x vai ser igual a x, senão vai ser igual a 1
    return x +y + z 
}
console.log(soma(), soma(2), soma(1,2,3), soma(0,0,0))


//soma2--------------------------------------------------------------------------------------
function soma2(x, y, z){
    if(x == undefined){
        x=1
    }
    if(y == undefined){
        y=1
    }
    if(z == undefined){
        z=1
    }
    return x + y + z 

}
console.log(soma2(), soma2(2), soma2(1,2,3), soma2(0,0,0))

// == olha o valor e ignora o tipo 
// === olha o tipo tbm 


//Soma3, 4, 5--------------------------------------------------------------------------------------------------------------------

function soma3(x,y,z){
    x = x !== undefined ? x : 1 ; //Operador Ternário 
    y = 1 in arguments ? y : 1;
    z = isNaN(z)  ? 1 : z;
    return x+y+z

// if(x !== undefined){
    //     x = x 
    // }
    // else{
    //     x = 1
    // }
}

console.log(soma3(), soma3(2), soma3(1,2,3), soma3(0,0,0))

//ECMAScript 6 -> valor padrão como paramêtro 
function soma4( x=1, y=1, z=1){
    return x + y+z
}
console.log(soma4(), soma4(2), soma4(1,2,3), soma4(0,0,0))