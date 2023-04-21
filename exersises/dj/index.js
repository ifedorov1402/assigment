let sq = document.querySelector(".square")
sq.addEventListener("click", function(){
    sq.style.backgroundColor = "red"
});
sq.addEventListener("mouseover", function(){
    sq.style.backgroundColor = "blue"
});
sq.addEventListener("mousedown", function(){
    sq.style.backgroundColor = "red"
});
sq.addEventListener("mouseup", function(){
    sq.style.backgroundColor = "yellow"
});
sq.addEventListener("dblclick", function(){
    sq.style.backgroundColor = "green"
});
document.addEventListener("scroll", function(){
    sq.style.backgroundColor = "orange"
});
document.addEventListener("keydown", function(event){
    if (event.key === "r"){
        sq.style.backgroundColor = "red"
    }
});
document.addEventListener("keydown", function(event){
    if (event.key === "o"){
        sq.style.backgroundColor = "orange"
    }
});
document.addEventListener("keydown", function(event){
    if (event.key === "b"){
        sq.style.backgroundColor = "blue"
    }
});
document.addEventListener("keydown", function(event){
    if (event.key === "y"){
        sq.style.backgroundColor = "yellow"
    }
});
document.addEventListener("keydown", function(event){
    if (event.key === "g"){
        sq.style.backgroundColor = "green"
    }
});
