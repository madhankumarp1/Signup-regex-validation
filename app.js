"use strict"

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


inputPassword.addEventListener("focusin",display)
inputPassword.addEventListener("focusout",display1)

function display() {
    hideContent.style.display = "block";
}

function display1() {
    hideContent.style.display = "none";
}

inputPassword.addEventListener("input", () => {
    let lowerCaseLetters = /[a-z]/g;
    let upperCaseLetters = /[A-Z]/g;
    let numberss = /[0-9]/g;
    let specialch = /[ ""!"#$%&'()*+,-./:;<=>?@^_`~{}|]/g;


    if (inputPassword.value.match(lowerCaseLetters)) {
        Lower.classList.remove("invalid");
        Lower.classList.add("valid");

    } else {
        Lower.classList.remove("valid");
        Lower.classList.add("invalid");
    }

    if (inputPassword.value.match(upperCaseLetters)) {
        Upper.classList.remove("invalid");
        Upper.classList.add("valid");

    } else {
        Upper.classList.remove("valid");
        Upper.classList.add("invalid");
    }

    if (inputPassword.value.match(numberss)) {
        numBers.classList.remove("invalid");
        numBers.classList.add("valid");
    } else {
        numBers.classList.remove("valid");
        numBers.classList.add("invalid");
    }

    if (inputPassword.value.length >= 8) {
        Hash.classList.remove("invalid");
        Hash.classList.add("valid");

    } else {
        Hash.classList.remove("valid");
        Hash.classList.add("invalid");

    }

    if (inputPassword.value.match(specialch)) {
        SpecialChar.classList.remove("invalid");
        SpecialChar.classList.add("valid");

    } else {
        SpecialChar.classList.remove("valid");
        SpecialChar.classList.add("invalid");

    }
});


//-------------------------form valid

let form = document.getElementById("signUpForm");

form.addEventListener('submit', validateForm);

function validateForm(event) {
    event.preventDefault();

    let inputName = document.getElementById("name").value;
    let inputEmail = document.getElementById("email").value;
    let inputMobile = document.getElementById("number").value;
    let inputPassword = document.querySelector(".password").value;
    let inputCon_Password = document.getElementById("confirmPassword").value;
    let inputUsername = document.querySelector(".username").value;

    let emailRegex = /([a-z0-9_.+-]+)@[a-zA-z0-9_.+]+/g;
    let nameRegex = /[a-z]{3,}/g;
    let mobileRegex = /^\d{10}$/;
    let usernameRegex = /^[a-zA-Z0-9_]{3,20}$/;

    if (!nameRegex.test(inputName)) {
        alert("Invalid Name.");
        return;
    }
    if (!emailRegex.test(inputEmail)) {
        alert("Invalid email address.");
        return;
    }
    if (!mobileRegex.test(inputMobile)) {
        alert("Invalid Mobile number.");
        return;
    }
    if (!usernameRegex.test(inputUsername)) {
        alert("Invalid username.");
        return;
    }

    if (inputPassword !== inputCon_Password) {
        alert("Confirm Passwords do not match.");
        return;
    }

    alert("Form submitted");

    newFunction();

}
function newFunction(){
  let rest = document.getElementById("signUpForm");
   rest.reset()
}
