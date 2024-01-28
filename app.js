"use strict"

let form = document.forms.signUpForm;
let inputName = document.querySelector(".name");
let inputEmail = document.querySelector(".email");
let inputMobile = document.querySelector(".number");
let inputUsername = document.querySelector(".username");
let inputPassword = document.querySelector(".password");
let inputCon_Password = document.querySelector(".confirmPassword");

let Lower = document.querySelector(".lowerLetter");
let Upper = document.querySelector(".capitalLetter");
let numBers = document.querySelector(".numbers");
let SpecialChar = document.querySelector(".characters");
let Hash = document.querySelector(".Hash");
let hideContent = document.getElementById("Content");
let EmailAlerts = document.querySelector(".EmailAlert");
let nameAlert=document.querySelector(".alertValid")


//------------------------toole tip

inputPassword.addEventListener("input", () => {
    // hideContent.style.display = "block";
    let lowerCaseLetters = /[a-z]/g;
    let upperCaseLetters = /[A-Z]/g;
    let numberss = /[0-9]/g;
    let specialch = /[!@#$%&*]/g;


    if (inputPassword.value.match(lowerCaseLetters)) {
        Lower.classList.remove("invalid");
        Lower.classList.add("valid");
        hideContent.style.display = "block";

    } else {
        Lower.classList.remove("valid");
        Lower.classList.add("invalid");
        hideContent.style.display = "none";

    }

    if (inputPassword.value.match(upperCaseLetters)) {
        Upper.classList.remove("invalid");
        Upper.classList.add("valid");
        // hideContent.style.display = "block";
    } else {
        Upper.classList.remove("valid");
        Upper.classList.add("invalid");
        // hideContent.style.display = "none";
    }

    if (inputPassword.value.match(numberss)) {
        numBers.classList.remove("invalid");
        numBers.classList.add("valid");
        // hideContent.style.display = "block";
    } else {
        numBers.classList.remove("valid");
        numBers.classList.add("invalid");
        // hideContent.style.display = "none";
    }

    if (inputPassword.value.length >= 8) {
        Hash.classList.remove("invalid");
        Hash.classList.add("valid");
        // hideContent.style.display = "block";
    } else {
        Hash.classList.remove("valid");
        Hash.classList.add("invalid");
        // hideContent.style.display = "none";
    }

    if (inputPassword.value.match(specialch)) {
        SpecialChar.classList.remove("invalid");
        SpecialChar.classList.add("valid");
        // hideContent.style.display = "block";
    } else {
        SpecialChar.classList.remove("valid");
        SpecialChar.classList.add("invalid");
        // hideContent.style.display = "none";
    }
});




inputEmail.addEventListener("input", () => {
    EmailAlerts.style.display = "block";
    let emailValid = /([a-z0-9_.+-]+)@[a-zA-z0-9_.+]+/g;
    if (emailValid.test(inputEmail.value)) {
        EmailAlerts.classList.add("GreenColor");
        EmailAlerts.classList.remove("RedColor")
        // EmailAlerts.style.display="none"
    } else {
        EmailAlerts.classList.add("RedColor");
        EmailAlerts.classList.remove("GreenColor")
    }
});



inputName.addEventListener("input",()=>{
    nameAlert.style.display="block";
     let NameValid=/[a-z]{3,}/g
     if(inputName.value.match(NameValid)){
          nameAlert.classList.add("GreenColor")
          nameAlert.classList.remove("RedColor")
     }else{
        nameAlert.classList.add("RedColor")
        nameAlert.classList.remove("GreenColor")
     }
})




[inputUsername, inputMobile, inputEmail, inputName, inputCon_Password].forEach(inputPassword => {
    inputPassword.addEventListener("input", () => {
         hideContent.style.display="none";
    });
});

[ inputUsername, inputMobile, inputPassword, inputName, inputCon_Password].forEach(EmailFeild => {
    EmailFeild.addEventListener("input", () => {
        EmailAlerts.style.display = "none";
    });
});

[ inputUsername, inputMobile, inputPassword, inputEmail, inputCon_Password].forEach(UserFeild => {
    UserFeild.addEventListener("input", () => {
        nameAlert.style.display = "none";
    });
});





form.addEventListener("submit", (e) => {
    e.preventDefault();
   
});

// /^[^\s@]+@[^\s@]+\.[^\s@]+$/
