// Função assíncrona simulada que chama um callback após 2 segundos
function funcaoAssincrona(callback) {
    setTimeout(function() {
      console.log("A função assíncrona foi concluída!");
      callback();
    }, 2000);
  }
  
  // Função de callback
  function callback() {
    console.log("O callback foi chamado!");
  }
  
  // Chamando a função assíncrona com o callback
  funcaoAssincrona(callback);
  
  console.log("A função assíncrona foi iniciada.");
  