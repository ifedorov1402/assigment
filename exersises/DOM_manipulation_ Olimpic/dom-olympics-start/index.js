var message1 = document.getElementsByClassName("message left")
    message1[0].textContent = "I've got a hilarious secret to share!";
    message1[1].textContent = "Oh, come on! You're the party police, right?";

    var message2 = document.getElementsByClassName("message right")
    message2[0].textContent = "No way, I'm not in the mood for a chat.";
    message2[1].textContent = "Nah, I'm just a laid-back potato farmer!";
var clearBt = document.getElementById("clear-button")
    clearBt.addEventListener("click", function(){
        for ( var i = 0; i<message1.length; i++){
            message1[i].textContent = "";
            message1[i].style.display = "none"
        }
        for ( var j = 0; j<message2.length; j++){
            message2[j].textContent = "";
            message2[j].style.display = "none"
        }
    });
var selectThem = document.getElementById("theme-drop-down")
    selectThem.addEventListener("change", function(){
        var theme = selectThem.value;
        if (theme === "theme-one"){
            for ( var d = 0; d<message1.length; d++){
                message1[d].style.backgroundColor = "burlywood";
                message2[d].style.backgroundColor = "lightblue";
                message1[d].style.color = "black";
                message2[d].style.color = "black";
        }}
        else if (theme === "theme-two"){
            for ( var i = 0; i<message1.length; i++){
                message1[i].style.backgroundColor = "blue";
                message2[i].style.backgroundColor = "brown";
                message1[i].style.color = "white";
                message2[i].style.color = "white";
        }}
        else{
            for ( var j = 0; j<message1.length; j++){
                message1[j].style.backgroundColor = "red";
                message2[j].style.backgroundColor = "black";
                message1[j].style.color = "white";
                message2[j].style.color = "white";
        }}
    });
    var lastMessage = "right"
    var inputElement = document.getElementById("input")
    var btmC = document.querySelector(".btn")
        btmC.addEventListener("click", function(e){
            e.preventDefault();
            var newMessage = document.createElement("div")
            if (lastMessage === "right"){
                newMessage.className = "message left"
                lastMessage = "left";
            } else{
                newMessage.className = "message right"
                lastMessage = "right";
            }
            newMessage.textContent = inputElement.value;
            var newMessageContainer = document.querySelector(".messages")
            newMessageContainer.appendChild(newMessage);

        });

