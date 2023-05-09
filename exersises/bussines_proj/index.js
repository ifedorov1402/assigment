let corner = document.getElementsByClassName("sidebar")[0];
let menu = document.getElementById("menu")
let about = document.getElementById("about")
let contact = document.getElementById("contact")
let menuImage = document.querySelector('#box2 img');
corner.addEventListener("mouseover", function() {
    menuImage.style.display = "none"
    about.style.display = "block";
    contact.style.display = "block";

  });
  corner.addEventListener("mouseout", function() {
    about.style.display = "none";
    contact.style.display = "none";
    menuImage.style.display = "block"
  });
  about.addEventListener("mouseover",function() {
    about.style.width = "120px";
    contact.style.width = "100px";
  
  });
  contact.addEventListener("mouseover",function() {
    about.style.width = "100px";
    contact.style.width = "120px";
  
  });
  