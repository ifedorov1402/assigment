const form = document.addItem
function saveToLocalStorage() {
    localStorage.user = JSON.stringify(AllImputs);
}
var AllImputs = []; 
console.log(form)
form.addEventListener("submit", function(event){
    event.preventDefault()
    var inputVa = form.title.value
    AllImputs.push(inputVa)
    const editBtn= document.createElement("button")
    editBtn.textContent = "Edit"
    const saveBtn= document.createElement("button")
    saveBtn.textContent = "Save"
    saveBtn.style.display= "none"
    const btnDone = document.createElement("button")
    btnDone.textContent="X"
    const editInput= document.createElement("input")
    editInput.value=inputVa
    editInput.style.display = "none"
    const li = document.createElement("li")
    var textNode = document.createTextNode(" "+inputVa+"     ")
    var textC = document.createElement("div")
    textC.append(textNode)
    const divBtn = document.createElement("div")
    divBtn.style.marginTop = "20px"
    divBtn.append(editBtn)
    divBtn.append(btnDone)
    divBtn.append(saveBtn)
    li.append(textC)
    li.append(divBtn)
    li.append(editInput)
    document.getElementsByTagName("ul")[0].append(li)
    btnDone.addEventListener("click", function(){
        const index = AllImputs.indexOf(inputVa)
        if (index!== -1){
            AllImputs.splice(index,1)
        }
        li.remove()
        saveToLocalStorage();
   
    })
    editBtn.addEventListener("click",function(){
        editBtn.style.display = "none"
        saveBtn.style.display = "inline"
        textC.style.display = "none"
        editInput.style.display = "inline"
        })
    saveBtn.addEventListener("click", function(){
        const index = AllImputs.indexOf(inputVa)
        if(index !== -1){
            AllImputs[index]= editInput.value
        }
        textC.textContent = "  " + editInput.value
        textC.style.margin = "19px"
        editInput.style.display = "none"
        textC.style.display = "inline"
        saveBtn.style.display = "none"
        editBtn.style.display = "inline"
        saveToLocalStorage();
    })
    console.log(AllImputs)
    localStorage.user = JSON.stringify(AllImputs);
    var user = JSON.parse(localStorage.user);
    console.log(user)

})