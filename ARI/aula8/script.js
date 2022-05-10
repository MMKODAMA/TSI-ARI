let canvas = document.getElementById('canvas');
let context = canvas.getContext('2d');

context.fillStyle='rgb(255,0,0)';
context.strokeStyle='rgb(255,0,0)';

context.fill();

canvas.onclick = function(event){
    //context.closePath();
    context.stroke();
    console.log('S');
}

canvas.onmousemove = function(event){
    pointerX=event.pageX;
    pointerY=event.pageY;
    console.log(pointerX +','+pointerY);
    context.lineTo(pointerX,pointerY);
}

canvas.onmousedown = function(event){
    pointerX=event.pageX;
    pointerY=event.pageY;
    context.beginPath();
    context.moveTo(pointerX,pointerY);
    console.log('ss');
}

download.addEventListener('click', function() {
    console.log(canvas.toDataURL());
    const link = document.createElement('img');
    let url = canvas.toDataURL();
    let imagem = {id: 1 ,link:url};
    window.localStorage.setItem('imagem',JSON.stringify(imagem));
  });