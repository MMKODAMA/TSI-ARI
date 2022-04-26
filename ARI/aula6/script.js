
let elements = document.getElementsByTagName('td');
let x = document.getElementById('x');
let o = document.getElementById('o');

let dragginElement;
x.addEventListener('dragstart',(event)=>{
    dragginElement = x;
});
o.addEventListener('dragstart',(event)=>{
    dragginElement = o;
});

 for(let i  = 0;i<elements.length;i++){
     let cell = elements[i];

     cell.addEventListener('dragover',(event)=>{
         event.preventDefault();
        console.log('dragOver');
     });
     cell.addEventListener('drop',(event)=>{
        event.preventDefault();

        let elementClone = dragginElement.cloneNode();
        console.log('drop',elementClone);
        if(event.target.childElementCount == 0){
            event.target.appendChild(elementClone);
        }
        
     });
 }
