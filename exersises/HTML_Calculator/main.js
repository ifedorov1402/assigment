
add.addEventListener("submit"  , function(event){
    event.preventDefault();
    let number1A = parseInt( document.add.num1.value )
    let number2A = parseInt(document.add.num2.value)
    let sum = number1A + number2A
    const h1 = document.createElement("h1")
    h1.textContent = sum
    document.getElementsByName("section1")[0].append(h1)
    
})
subtract.addEventListener("submit"  , function(event){
    event.preventDefault();
    let number1S = parseInt( document.subtract.num1.value )
    let number2S = parseInt(document.subtract.num2.value)
    let sum = number1S - number2S
    const h1 = document.createElement("h1")
    h1.textContent = sum
    document.getElementsByName("section2")[0].append(h1)
})
multiply.addEventListener("submit"  , function(event){
    event.preventDefault();
    let number1M = parseInt( document.multiply.num1.value )
    let number2M = parseInt(document.multiply.num2.value)
    let sum = number1M * number2M
    const h1 = document.createElement("h1")
    h1.textContent = sum
    document.getElementsByName("section3")[0].append(h1)
})