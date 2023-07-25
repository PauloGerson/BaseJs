/* function rand(min,max){
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max -min) + min);
    
}

function esperaAi(msg, tempo){
    setTimeout( () =>{
        console.log(msg);
    },tempo)
}

esperaAi('Frase 1', rand(1,2))

 */
 function esperaAi(msg, tempo){

    return new Promise((resolve, reject) =>{
        if(typeof msg !== 'string') reject(false);

        setTimeout( () =>{
            // o retorno do then aqui
            resolve(msg);
        },tempo)
    });
    
}

esperaAi('Frase 2', rand(1,2)) 








