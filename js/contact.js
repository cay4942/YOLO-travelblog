
const inputName = document.querySelector("#txtName");
const inputEmail = document.querySelector("#txtEmail");
const inputEmail = document.querySelector("#txtMessage");
const buttonSave = document.querySelector("#buttonSave");
const buttonLoad = document.querySelector("#buttonLoad"); 

buttonSave.addEventListener("click", function() {

    localStorage.setItem("name", inputName.value);

});

buttonLoad.addEventListener("click", function() {

    inputName.value = localStorage.getItem("name");

});



