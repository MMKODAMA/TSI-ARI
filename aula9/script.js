let listArray=[];

if(window.localStorage.getItem("list")){
    listArray = JSON.parse(window.localStorage.getItem("list"));
}
updateList();
console.log(listArray);
function addItem(item){
    listArray.push(item);
    window.localStorage.setItem("list",)
}