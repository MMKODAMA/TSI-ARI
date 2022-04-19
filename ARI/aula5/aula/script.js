let dropzone = document.getElementById('dropzone');
let image = document.getElementById('rengar');

image.addEventListener('dragstart', (event) => {
    event.dataTransfer.setData("imagem", event.target.id);
    console.log('Começou a arrastar');
});
dropzone.addEventListener('drop', (event) => {
    let elementId = event.dataTransfer.getData("imagem");
    let element = document.getElementById(elementId);

    event.target.appendChild(element);
    dropzone.classList.remove('dropable-over');

    console.log("elementId", elementId);
    console.log('drop');
});
dropzone.addEventListener('dragenter', () => {
    console.log('drag enter');
    dropzone.classList.add('dropable-over');
});
dropzone.addEventListener('dragleave', () => {
    console.log('drag leave');
    dropzone.classList.remove('dropable-over');
});
 
dropzone.addEventListener('dragover', (event) => {
    event.preventDefault();
    console.log('drag over');

});