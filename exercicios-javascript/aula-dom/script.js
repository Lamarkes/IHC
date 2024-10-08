
const input = document.getElementById("inputTarefa");
const button = document.getElementById("btnAdicionar");
const list = document.getElementById("listaTarefas");


button.addEventListener("click", () =>{
    const task = input.value.trim();
    if(task === ""){
        alert("Preencha os campos!")
        return;
    }


    const novoItem = document.createElement("li");
    novoItem.textContent = task;
    novoItem.addEventListener("click", () => {
        novoItem.classList.toggle("completed")
    })

    const close = document.createElement("button");
    close.textContent = " x";
    close.addEventListener("click", ()=>{
        list.removeChild(novoItem);
    })

    novoItem.appendChild(close)
    

    list.appendChild(novoItem);
    input.value = "";
   

});