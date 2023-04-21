bt1.addEventListener("click", function() {
    var inputV = document.getElementById("inputV")
    console.log(inputV.value)
    document.body.innerHTML += "<p>" + inputV.value + "</p>"
});
