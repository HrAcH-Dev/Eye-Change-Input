let input = document.querySelector("#inpPas");
let eye = document.querySelector("#eye");


eye.addEventListener("click", function(e){
    if(input.type === "password"){
        input.type = "text";
        eye.classList.remove("fa-eye")
        eye.classList.add("fa-eye-slash")
    }else{
        input.type = "password";
        eye.classList.remove("fa-eye-slash");
        eye.classList.add("fa-eye");
    }
})

