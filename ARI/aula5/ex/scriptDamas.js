let jogo = document.getElementById('jogo');
let x1 = document.getElementById('x1');
let o1 = document.getElementById('o1');
let x2 = document.getElementById('x2');
let o2 = document.getElementById('o2');
let x3 = document.getElementById('x3');
let o3 = document.getElementById('o3');
let x4 = document.getElementById('x4');
let o4 = document.getElementById('o4');
let x5 = document.getElementById('x5');
let o5 = document.getElementById('o5');
let x6 = document.getElementById('x6');
let o6 = document.getElementById('o6');
let x7 = document.getElementById('x7');
let o7 = document.getElementById('o7');
let x8 = document.getElementById('x8');
let o8 = document.getElementById('o8');
let x9 = document.getElementById('x9');
let o9 = document.getElementById('o9');
let x10 = document.getElementById('x10');
let o10 = document.getElementById('o10');
let x11 = document.getElementById('x11');
let o11 = document.getElementById('o11');
let x12 = document.getElementById('x12');
let o12 = document.getElementById('o12');

x1.addEventListener('dragstart', (event) => {
    event.dataTransfer.setData("imagem", event.target.id);
    console.log('Começou a arrastar');
});
o1.addEventListener('dragstart', (event) => {
    event.dataTransfer.setData("imagem", event.target.id);
    console.log('Começou a arrastar');
});
x2.addEventListener('dragstart', (event) => {
    event.dataTransfer.setData("imagem", event.target.id);
    console.log('Começou a arrastar');
});
o2.addEventListener('dragstart', (event) => {
    event.dataTransfer.setData("imagem", event.target.id);
    console.log('Começou a arrastar');
});
x3.addEventListener('dragstart', (event) => {
    event.dataTransfer.setData("imagem", event.target.id);
    console.log('Começou a arrastar');
});
o3.addEventListener('dragstart', (event) => {
    event.dataTransfer.setData("imagem", event.target.id);
    console.log('Começou a arrastar');
});
x4.addEventListener('dragstart', (event) => {
    event.dataTransfer.setData("imagem", event.target.id);
    console.log('Começou a arrastar');
});
o4.addEventListener('dragstart', (event) => {
    event.dataTransfer.setData("imagem", event.target.id);
    console.log('Começou a arrastar');
});
x5.addEventListener('dragstart', (event) => {
    event.dataTransfer.setData("imagem", event.target.id);
    console.log('Começou a arrastar');
});
o5.addEventListener('dragstart', (event) => {
    event.dataTransfer.setData("imagem", event.target.id);
    console.log('Começou a arrastar');
});
x6.addEventListener('dragstart', (event) => {
    event.dataTransfer.setData("imagem", event.target.id);
    console.log('Começou a arrastar');
});
o6.addEventListener('dragstart', (event) => {
    event.dataTransfer.setData("imagem", event.target.id);
    console.log('Começou a arrastar');
});
x7.addEventListener('dragstart', (event) => {
    event.dataTransfer.setData("imagem", event.target.id);
    console.log('Começou a arrastar');
});
o7.addEventListener('dragstart', (event) => {
    event.dataTransfer.setData("imagem", event.target.id);
    console.log('Começou a arrastar');
});
x8.addEventListener('dragstart', (event) => {
    event.dataTransfer.setData("imagem", event.target.id);
    console.log('Começou a arrastar');
});
o8.addEventListener('dragstart', (event) => {
    event.dataTransfer.setData("imagem", event.target.id);
    console.log('Começou a arrastar');
});
x9.addEventListener('dragstart', (event) => {
    event.dataTransfer.setData("imagem", event.target.id);
    console.log('Começou a arrastar');
});
o9.addEventListener('dragstart', (event) => {
    event.dataTransfer.setData("imagem", event.target.id);
    console.log('Começou a arrastar');
});
x10.addEventListener('dragstart', (event) => {
    event.dataTransfer.setData("imagem", event.target.id);
    console.log('Começou a arrastar');
});
o10.addEventListener('dragstart', (event) => {
    event.dataTransfer.setData("imagem", event.target.id);
    console.log('Começou a arrastar');
});
x11.addEventListener('dragstart', (event) => {
    event.dataTransfer.setData("imagem", event.target.id);
    console.log('Começou a arrastar');
});
o11.addEventListener('dragstart', (event) => {
    event.dataTransfer.setData("imagem", event.target.id);
    console.log('Começou a arrastar');
});
x12.addEventListener('dragstart', (event) => {
    event.dataTransfer.setData("imagem", event.target.id);
    console.log('Começou a arrastar');
});
o12.addEventListener('dragstart', (event) => {
    event.dataTransfer.setData("imagem", event.target.id);
    console.log('Começou a arrastar');
});
jogo.addEventListener('drop', (event) => {
    let elementId = event.dataTransfer.getData("imagem");


        if(event.target.children.length < 1){
            let element = document.getElementById(elementId);
            let imagem = element;
            event.target.appendChild(imagem); 
            event.target.children.length++;
            console.log(event.target.children.length);
        }
    
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