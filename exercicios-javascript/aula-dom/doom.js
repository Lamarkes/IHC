
let myspan = document.getElementById("texto");
//myspan.style.color = 'red';
myspan.textContent = "O valor mudou";
console.log(myspan);


let novoItem = document.createElement("li");

novoItem.textContent = "Novo item";

let lista = document.querySelector("ul");
lista.appendChild(novoItem);

novoItem.addEventListener("click", () =>{
    alert("Cliclou !!!")
    })


const item1 = document.getElementById("item1")
item1.addEventListener("click", () => {
    alert("Cliclou no item1!!!")
})

document.addEventListener("keypress", function(event){
    console.log("Tecla pressionada: ", event.key)
})


function onclickHandler(){
    console.log("Botao cliclado")
}

let botao = document.querySelector("button");

botao.addEventListener("Click", onclickHandler);

botao.removeEventListener("click", onclickHandler);

//let primeiroItem = document.querySelector("ul li:first-child")
//lista.removeChild(primeiroItem)

