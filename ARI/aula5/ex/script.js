let jogo = document.getElementById('jogo');
let x = document.getElementById('x');
let o = document.getElementById('o');

x.addEventListener('dragstart', (event) => {
    event.dataTransfer.setData("imagem", event.target.id);
    console.log('Começou a arrastar');
});
o.addEventListener('dragstart', (event) => {
    event.dataTransfer.setData("imagem", event.target.id);
    console.log('Começou a arrastar');
});
jogo.addEventListener('drop', (event) => {
    let elementId = event.dataTransfer.getData("imagem");
    
    if(elementId=="x"){
        console.log(event.target.children.length);
        if(event.target.children.length < 1){
            let imagemx = x.cloneNode(true);
        event.target.appendChild(imagemx); 
        }
       
    }
    if(elementId=="o"){
        if(event.target.children.length < 1){
        let imagemo = o.cloneNode(true);
        event.target.appendChild(imagemo);
    }}
});
jogo.addEventListener('dragenter', () => {
    console.log('drag enter');
    
});
jogo.addEventListener('dragleave', () => {
    console.log('drag leave');
   
});
 
jogo.addEventListener('dragover', (event) => {
    event.preventDefault();
    console.log('drag over');

});