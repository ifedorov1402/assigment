const express = require("express")
const toDoRouter = express.Router()
const {v4: uuidv4} = require('uuid')


const toDo =[
    {name: "The Name ", discription: "The Discription of the ToDo", imageUrl: "http://www.myimage....", completedt: false, _id: uuidv4()},
    {name: "Do homework ", discription: "dont forget to finish my homework", imageUrl: "http://www.myimage....", completedt: false, _id: uuidv4()}
]

toDoRouter.get("/", (req, res) =>{
    res.send(toDo)
})

toDoRouter.post("/", (req, res) =>{
    const newTodo = req.body
    newTodo._id = uuidv4()
    toDo.push(newTodo)
    res.send("success")
})
toDoRouter.delete("/:id", (req, res) =>{
    const {id} = req.params
    const toDoIndex = toDo.findIndex(b => b._id === id)
    if (toDoIndex != -1){
        toDo.splice(toDoIndex, 1)
        res.send(`ToDo with id ${id} deleted`)
    }else{
        res.status(404).send("Todo notFoud")
    }
})
toDoRouter.put("/:id", (req, res) => {
    const { id } = req.params;
    let updated = false;

    for (let i = 0; i < toDo.length; i++) {
        if (toDo[i]._id === id) {
            toDo[i] = { ...toDo[i], ...req.body, _id: id };
            updated = true;
            break; // Break out of the loop once the item is updated
        }
    }

    if (updated) {
        res.send(`ToDo with id ${id} updated`);
    } else {
        res.status(404).send("ToDo not found");
    }
});




module.exports = toDoRouter