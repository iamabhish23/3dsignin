const signUpBtn = document.querySelector(".signup-button");
const signInBtn = document.querySelector(".signin-button");
const formWrappers = document.querySelector(".formwrapper");

signUpBtn.addEventListener("click", (e) =>{
    e.preventDefault();
    formWrappers.classList.add("change");

});

signInBtn.addEventListener("click", (e) => {
    e.preventDefault();
    formWrappers.classList.remove("change");

});