let sliderElement = document.querySelector("#slider");
let buttonElement = document.querySelector("#button");
let sizePass = document.querySelector("#valor")
let Password = document.querySelector("#password");
let ctpass = document.querySelector("#ContainerPassword");

let charset = "abcdefghijklmnopqrstuvxyzABCDEFGHIRJKLMNOPQRSTUVWXYZ1234567890!@#$%&*";
let newpassword = "";

sizePass.innerHTML = sliderElement.value;

slider.oninput = function(){
    sizePass.innerHTML = this.value;
}

function generatepass(){
    let pw = "";
    for(let i = 0, n = charset.length; i < sliderElement.value; ++i){
        pw += charset.charAt(Math.floor(Math.random() * n));
    }
    ctpass.classList.remove("hidden");
    Password.innerHTML = pw;
    newpw = pw;
}

function cb (){
    alert("Copied to your Clipboard!")
    navigator.clipboard.writeText(newpw);
}