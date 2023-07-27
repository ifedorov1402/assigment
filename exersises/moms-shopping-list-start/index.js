
// const form = document.addItem
// function saveToLocalStorage() {
//     localStorage.user = JSON.stringify(AllImputs);
// }
// var AllImputs = []; 
// console.log(form)
// form.addEventListener("submit", function(event){
//     event.preventDefault()
//     var inputVa = form.title.value
//     AllImputs.push(inputVa)
//     const editBtn= document.createElement("button")
//     editBtn.textContent = "Edit"
//     const saveBtn= document.createElement("button")
//     saveBtn.textContent = "Save"
//     saveBtn.style.display= "none"
//     const btnDone = document.createElement("button")
//     btnDone.textContent="X"
//     const editInput= document.createElement("input")
//     editInput.value=inputVa
//     editInput.style.display = "none"
//     const li = document.createElement("li")
//     var textNode = document.createTextNode(" "+inputVa+"     ")
//     var textC = document.createElement("div")
//     textC.append(textNode)
//     const divBtn = document.createElement("div")
//     divBtn.style.marginTop = "20px"
//     divBtn.append(editBtn)
//     divBtn.append(btnDone)
//     divBtn.append(saveBtn)
//     li.append(textC)
//     li.append(divBtn)
//     li.append(editInput)
//     document.getElementsByTagName("ul")[0].append(li)
//     btnDone.addEventListener("click", function(){
//         const index = AllImputs.indexOf(inputVa)
//         if (index!== -1){
//             AllImputs.splice(index,1)
//         }
//         li.remove()
//         saveToLocalStorage();
   
//     })
//     editBtn.addEventListener("click",function(){
//         editBtn.style.display = "none"
//         saveBtn.style.display = "inline"
//         textC.style.display = "none"
//         editInput.style.display = "inline"
//         })
//     saveBtn.addEventListener("click", function(){
//         const index = AllImputs.indexOf(inputVa)
//         if(index !== -1){
//             AllImputs[index]= editInput.value
//         }
//         textC.textContent = "  " + editInput.value
//         textC.style.margin = "19px"
//         editInput.style.display = "none"
//         textC.style.display = "inline"
//         saveBtn.style.display = "none"
//         editBtn.style.display = "inline"
//         saveToLocalStorage();
//     })
//     console.log(AllImputs)
//     localStorage.user = JSON.stringify(AllImputs);
//     var user = JSON.parse(localStorage.user);
//     console.log(user)

// })
// function getData(){
//     axios.get("https://api.vschool.io/ivan/todo")
//         .then(res => listData(res.data))
//         .catch(err => console.log(err))
// }


// /// LISTS THE TODO TITLES TO THE DOM
// function listData(data){
//     // document.getElementById('todo-list').innerHTML = ""
   
    
//     for(let i = 0; i < data.length; i++){
//         const h1 = document.createElement('h1')
//         h1.textContent = data[i].title
//         document.getElementById('todo-list').appendChild(h1)
//     }
// }
// getData()


// function listData(data){
//     clearList();
        
//     for(let i = 0; i < data.length; i++){

//         const editBtn= document.createElement("button");
//         editBtn.textContent = "Edit";

//         const saveBtn= document.createElement("button");
//         saveBtn.textContent = "Save";
//         saveBtn.style.display= "none";

//         const btnDone = document.createElement("button");
//         btnDone.textContent = "X";

//         const editInput = document.createElement("input");
//         editInput.value = data[i].title; // Use the title from the data received from the server
//         editInput.style.display = "none";

//         const li = document.createElement("li");
//         var textNode = document.createTextNode(" " + data[i].title + "     ");
//         var textC = document.createElement("div");
//         textC.append(textNode);

//         const divBtn = document.createElement("div");
//         divBtn.style.marginTop = "20px";
//         divBtn.append(editBtn);
//         divBtn.append(btnDone);
//         divBtn.append(saveBtn);

//         li.append(textC);
//         li.append(divBtn);
//         li.append(editInput);
//         document.getElementsByTagName("ul")[0].append(li);
//     }
    
// }





const form = document.addItem;
var AllImputs = []; 

form.addEventListener("submit", function(event){
    event.preventDefault();
    // var inputVa = {
    //     title: form.title.value
    // };


  const title = form.title.value;
  const price = parseFloat(form.price.value);
  const description = form.description.value;
  const imgUrl = form.imgUrl.value;
  form.title.value = "";
  form.price.value = "";
  form.description.value = "";
  form.imgUrl.value = "";
  form.title.value = "";

  // Create the new todo object
  var inputVa = {
    title: title,
    price: price,
    description: description,
    imgUrl: imgUrl,
    completed: false, // By default, set the completed property to false
  };

    axios.post("https://api.vschool.io/ivan/todo", inputVa)
        .then(res => {
            getData();
            AllImputs.push(inputVa);
            listData(res.data); // Call the listData function after the post request is successful
        })
        .catch(err => console.log(err));
});



function listData(data) {
    clearList();
  
    for (let i = 0; i < data.length; i++) {
      const todo = data[i];

      // Create the todo elements
      const editBtn = document.createElement("button");
      editBtn.textContent = "Edit";
  
      const saveBtn = document.createElement("button");
      saveBtn.textContent = "Save";
      saveBtn.style.display = "none";
  
      const btnDone = document.createElement("button");
      btnDone.textContent = "X";
  
      const editInputTitle = document.createElement("input");
      editInputTitle.value = todo.title;
      editInputTitle.style.display = "none";
  
      const editInputPrice = document.createElement("input");
      editInputPrice.value = todo.price;
      editInputPrice.style.display = "none";

      const editInputDescription = document.createElement("textarea");
      editInputDescription.value = todo.description;
      editInputDescription.style.display = "none";

      const editInputImgUrl = document.createElement("input");
      editInputImgUrl.value = todo.imgUrl;
      editInputImgUrl.style.display = "none";

      editInputTitle.classList.add("input");
      editInputPrice.classList.add("input");
      editInputDescription.classList.add("input");
      editInputImgUrl.classList.add("input");
  
      const li = document.createElement("li");
      let textNode = document.createTextNode(todo.title + " | | ");
      let textNode1 = document.createTextNode(" Price: "+todo.price + " | | ");
      let textNode2 = document.createTextNode(" Discription: "+todo.description);
      let textC = document.createElement("div");
      textC.append(textNode,textNode1,textNode2);
  
      const divBtn = document.createElement("div");
      divBtn.style.marginTop = "20px";
      divBtn.append(editBtn);
      divBtn.append(btnDone);
      divBtn.append(saveBtn);
  
      li.append(textC);
      li.append(divBtn);
      li.append(editInputTitle);
      li.append(editInputPrice);
      li.append(editInputDescription);
      li.append(editInputImgUrl);

      //  CHECK BOX 
      const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = todo.completed; // Set the initial state based on the completed property
        li.prepend(checkbox); // Add the checkbox at the beginning of the todo item

        checkbox.addEventListener("click", function () {
          // Find the index of the todo object in the data array
          const index = data.findIndex(item => item._id === todo._id);
    
          if (index !== -1) {
            // Toggle the completed property when the checkbox is clicked
            data[index].completed = checkbox.checked;
          }
    
          // Apply or remove the 'completed' class based on the checkbox's state
          if (checkbox.checked) {
            textC.classList.add("completed"); // Add the class if checked
          } else {
            textC.classList.remove("completed"); // Remove the class if unchecked
          }
    
          // PUT request to update the todo 
          axios.put(`https://api.vschool.io/ivan/todo/${todo._id}`, { completed: checkbox.checked })
            .then(res => {
              // The PUT request was successful, so you can refresh the list
              getData();
            })
            .catch(err => console.log(err));
        });

  
      document.getElementById("todo-list").appendChild(li);
  
      // Event listener for the "Edit" button
      editBtn.addEventListener("click", function () {
        editBtn.style.display = "none";
        saveBtn.style.display = "inline";
        textC.style.display = "none";
        editInputTitle.style.display = "inline";
        editInputPrice.style.display = "inline";
        editInputDescription.style.display = "inline";
        editInputImgUrl.style.display = "inline";

        editInputTitle.value = todo.title;
        editInputPrice.value = todo.price;
        editInputDescription.value = todo.description;
        editInputImgUrl.value = todo.imgUrl;
      });

  
      // Event listener for the "Save" button
      saveBtn.addEventListener("click", function () {
        // Find the index of the todo object in the data array
        const index = data.findIndex(item => item._id === todo._id);
  
        if (index !== -1) {
          // Update the specific properties of the todo object
          data[index].title = editInputTitle.value;
          data[index].price = parseFloat(editInputPrice.value);
          data[index].description = editInputDescription.value;
          data[index].imgUrl = editInputImgUrl.value;
        }
  
        textC.style.margin = "19px";
        editInputTitle.style.display = "none";
        editInputPrice.style.display = "none";
        editInputDescription.style.display = "none";
        editInputImgUrl.style.display = "none";
        textC.style.display = "inline";
        saveBtn.style.display = "none";
        editBtn.style.display = "inline";
  
        // PUT request to update the todo
        axios.put(`https://api.vschool.io/ivan/todo/${todo._id}`, {
          title: editInputTitle.value,
          price: parseFloat(editInputPrice.value),
          description: editInputDescription.value,
          imgUrl: editInputImgUrl.value
        })
          .then(res => {
            getData();
          })
          .catch(err => console.log(err));
      });
  
      //  "Delete" button
      btnDone.addEventListener("click", function () {
        // Extract the unique ID of the todo
        const todoId = todo._id;
  
        // DELETE request to remove the todo from the server
        axios.delete(`https://api.vschool.io/ivan/todo/${todoId}`)
          .then(res => {
            getData();
          })
          .catch(err => console.log(err));
      });
  
    }
  }

function clearList(){
    const el = document.getElementById('todo-list');
    while (el.firstChild){
        el.removeChild(el.firstChild);
    }
}

function saveToLocalStorage() {
    localStorage.user = JSON.stringify(AllImputs);
}

function getData(){
    axios.get("https://api.vschool.io/ivan/todo")
        .then(res => listData(res.data))
        .catch(err => console.log(err));
}

getData()