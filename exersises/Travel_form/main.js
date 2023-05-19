document.myForm.addEventListener ("submit", function(e){
    e.preventDefault();
    let fName = document.myForm.FirstName.value
    console.log(fName)
    let lName= document.myForm.LasttName.value
    console.log(lName)
    let age = document.myForm.age.value
    console.log(age)
    let gender = document.myForm.gender.value
    console.log(gender)
    let city = document.myForm.city.value
    console.log(city)
    let checkedFodd = []
    let food = document.querySelectorAll("input[name='food']:checked");
    for (let i = 0; i < food.length; i++){
        checkedFodd.push(food[i].value)
    }
    alert("The First name:"+ fName + "\n" + "THe Last Name" + lName + "\n" + "Age: " + age + "\n" + "Gender: " + gender + "\n" + "Location: " + city + "\n" + "Dietary restrictions: " + checkedFodd.join(','))
})
