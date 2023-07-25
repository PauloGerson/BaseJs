document.addEventListener('click',  e => {
    const el = e.target;
    const tag =  el.tagName.toLowerCase();

    if(tag === 'a'){
        e.preventDefault();
        carreagdoPagina(el)
    }
})

function carreagdoPagina(el){
    const href = el.getAttribute("href");

    fetch(href)
.then( respota => {
    if(respota.status !== 200)
        throw new Error('Erro 404 Nosso')
        return respota.text();
    
})
.then(html => carregaResultado(html))
.catch( e => console.log(e));
}

function carregaResultado(response){
    const  resultado = document.querySelector('.resultado');
    resultado.innerHTML = response;
}

