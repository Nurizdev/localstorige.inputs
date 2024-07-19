
const list=document.querySelector(".list");
const input1=document.querySelector(".input1");
const input2=document.querySelector(".input2");
const input3=document.querySelector(".input3");
const form=document.querySelector("form");
let btn=document.querySelector(".add")

let arr= JSON.parse(localStorage.getItem("todo"))  ||    [] ;


function createListItem(task){
    const item=document.createElement("li");
    item.classList.add("item");
    item.innerHTML=`${task.task1} ${task.task2} ${task.task3}`
     const delBtn=document.createElement("button");
     delBtn.classList.add("delBtn");
     delBtn.innerHTML="delete";
    delBtn.addEventListener("click",() => {
deleteItem(task,item);
    });
  
const editBtn=document.createElement("button");
editBtn.classList.add("editBtn");
editBtn.innerHTML="edit";
editBtn.addEventListener("click",()=>{
input1.value=task.task1;
input2.value=task.task2;
input3.value=task.task3;
deleteItem(task,item);
})
item.append(delBtn);
item.append(editBtn);
return item;
}
form.addEventListener("submit", (e)=>{
    e.preventDefault()
    if (input1.value !== "" && input2.value!==""&& input3.value!==""){
        const obj={
            task1:input1.value,
            task2:input2.value,
            task3:input3.value,
    };
    arr.push(obj);
    const item=createListItem(obj);
    list.append(item);
    localStorage.setItem("todo",JSON.stringify(arr) )
    input1.value="";
    input2.value="";
    input3.value="";
}
});

arr.forEach((element) => {
    const item=createListItem(element);
     list.append(item);

});
function deleteItem(text,item) {
   arr=arr.filter((el)=>{
    return el!==text;
   })
localStorage.setItem("todo",JSON.stringify(arr));
 list.removeChild(item) ; 
}
