var vezes =0;
function clicar(){
    vezes++;
    window.history.pushState({
        vezes:vezes
    });
    document.getElementById('mensagem').innerHTML=vezes+'cliques';
}
window.addEventListener('popstate', function(){
    document.getElementById('mensagem').innerHTML=
        window.history.state.vezes+'cliques';
});