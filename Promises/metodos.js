function rand(min,max){
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max -min) + min);
    
}

function esperaAi(msg, tempo){

    return new Promise((resolve, reject) =>{
        if(typeof msg !== 'string') {
         return   reject(false);
        }
        setTimeout( () =>{
            // o retorno do then aqui
            resolve(msg.toUpperCase() + ' Passei na promise');
        },tempo)
    });
    
}

// Promise.all Promise.race Promise.resolve Promise.reject

/* const promises = [
    'Primeiro valor',
    esperaAi('Promisse 1', 3000),
    esperaAi('Promisse 2', 500),
    esperaAi('Promisse 3', 1000),
    esperaAi(100, 1000),
    'Outro valor'
];

Promise.all(promises)
.then((valor) => {
    console.log(valor)
})
.catch((err) => {
    console.log(err)
})
 */
/* function baixarPagina(){
    const cache = false;

    if(cache) {
       return  Promise.resolve('pagina resolveida')
    }else{
        return esperaAi('Baixei a pagina',  5000);
    }

}

baixarPagina()
    .then( valor => {
        console.log(valor)
    }) */

 
    const promise1 = new Promise((resolve) => setTimeout(resolve, 1000, 'Hello'));
    const promise2 = new Promise((resolve) => setTimeout(resolve, 2000, 'World'));
    
    Promise.race([promise1, promise2])
      .then((value) => {
        console.log(value); // Será resolvido com 'Hello', pois a promise1 é a primeira a ser resolvida
      })
      .catch((error) => {
        // Este bloco não será executado, pois a promise1 é resolvida antes de promise2 ser rejeitada
      });