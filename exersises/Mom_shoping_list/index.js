const form = document.myForm
var AllImputs = [];
console.log(form)
form.addEventListener("submit", function(event){
    event.preventDefault()
    const inputVa = form.list.value
    AllImputs.push(inputVa)
    const editBtn= document.createElement("button")
    editBtn.textContent = "Edit"
    const btnDone = document.createElement("button")
    btnDone.textContent="X"
    const li = document.createElement("li")
    const textNode = document.createTextNode(" "+inputVa+"     ")
    li.append(btnDone)
    li.append(textNode)
    li.append(editBtn)
    document.getElementsByTagName("body")[0].append(li)
    btnDone.addEventListener("click", function(){
        li.remove()
    editBtn.addEventListener("click",function(){
        
    })
    })
    console.log(AllImputs)



})