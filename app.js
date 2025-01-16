

let add_btn = document.querySelector(" div button");
let inp = document.querySelector("input");
let ul = document.querySelector("ul");

add_btn.addEventListener("click", function(){
    let li = document.createElement("li");
    li.innerText  = inp.value;
    let delbtn = document.createElement("button");
    delbtn.classList.add("delete");
    delbtn.innerText = "X";

    li.appendChild(delbtn);
    ul.appendChild(li);
    inp.value = "";
})

ul.addEventListener("click", function( event){
    if(event.target.tagName == "BUTTON"){
        let item = event.target.parentElement;
        item.remove();
    }
});