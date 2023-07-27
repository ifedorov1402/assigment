

// axios
//   .get("https://api.vschool.io/ivan/todo")
//   .then(response => {
//     for (let i = 0; i < response.data.length; i++) {
//       const h1 = document.createElement("h1");
//       h1.textContent = response.data[i].title;
//       document.body.appendChild(h1);
//     }
//   })
//   .catch(error => console.log(error));






// const todoForm = document.todoform

// todoForm.addEventListener("submit", function(event){
//     event.preventDefault()
    
//     const newTodo = {
//         title: todoForm.title.value,
//         description: todoForm.description.value,
//         imgUrl: todoForm.imgUrl.value
//     }
    
//     axios.post("https://api.vschool.io/ivan/todo", newTodo)
//         .then(response => console.log(response.data))
//         .catch(error => console.log(error))
    
// })

// GET's THE TODO's FROM THE DATABASE
function getData(){
    axios.get("https://api.vschool.io/ivan/todo")
        .then(res => listData(res.data))
        .catch(err => console.log(err))
}


/// LISTS THE TODO TITLES TO THE DOM
function listData(data){
    // document.getElementById('todo-list').innerHTML = ""
    clearList()
    
    for(let i = 0; i < data.length; i++){
        const h1 = document.createElement('h1')
        h1.textContent = data[i].title
        document.getElementById('todo-list').appendChild(h1)
    }
}

function clearList(){
    const el = document.getElementById('todo-list')
    while(el.firstChild){
        el.removeChild(el.firstChild)
    }
}


getData()


// FORM FOR THE POST REQUEST
const todoForm = document["todo-form"]

todoForm.addEventListener("submit", function(e){
    e.preventDefault()
    
    const newTodo = {
        title: todoForm.title.value
    }
    
    todoForm.title.value = ""
    
    axios.post("https://api.vschool.io/ivan/todo", newTodo)
        .then(res => getData())
        .catch(err => console.log(err))
})
