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
let left=document.querySelector(".con1")
//------------------------toole tip


inputPassword.addEventListener("focusin",display)
inputPassword.addEventListener("focusout",display1)

function display() {
    hideContent.style.display = "block";
    left.style.display = "block";
    
}

function display1() {
    hideContent.style.display = "none";
    left.style.display = "none";
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

    let Confirm_Passwords = document.getElementById("confirmPassword_lab");
    let Invalid_User_Name = document.getElementById("Invalid_User_Name");
    let Invalid_Number = document.getElementById("Invalid_Number");
    let Invalid_Email = document.getElementById("Invalid_Email");
    let Invalid_Name = document.getElementById("Invalid_Name");

    let emailRegex = /([a-z0-9_.+-]+)@[a-zA-z0-9_.+]+/g;
    let nameRegex = /[a-z]{3,}/g;
    let mobileRegex = /^\d{10}$/;
    let usernameRegex = /[a-zA-Z]{3,20}/;


    if (!nameRegex.test(inputName)) {
        Invalid_Name.textContent = "Invalid_Name."; 
        setTimeout(() => {
            Invalid_Name.textContent = ""; 
        }, 2000);
        return;
    }
    if (!emailRegex.test(inputEmail)) {
        Invalid_Email.textContent = "Invalid_Email."; 
        setTimeout(() => {
            Invalid_Email.textContent = ""; 
        }, 2000);

        return;
    }
    if (!mobileRegex.test(inputMobile)) {
        Invalid_Number.textContent = "Invalid_Number."; 
        setTimeout(() => {
            Invalid_Number.textContent = ""; 
        }, 2000);
        return;
    }
    if (!usernameRegex.test(inputUsername)) {
        Invalid_User_Name.textContent = "Invalid_User_Name."; 
        setTimeout(() => {
            Invalid_User_Name.textContent = ""; 
        }, 2000); 
        return;
    }
    if (inputPassword !== inputCon_Password) {
        Confirm_Passwords.textContent = "Confirm Passwords do not match."; 
        setTimeout(() => {
            Confirm_Passwords.textContent = ""; 
        }, 2000); 
        return;
    }
    
    if (inputCon_Password == "") {
        Confirm_Passwords.textContent = "Incorrect Password"; 
        setTimeout(() => {
            Confirm_Passwords.textContent = ""; 
        }, 2000); 
        return;
    }
    if (inputPassword == "") {
        Confirm_Passwords.textContent = "Incorrect Password"; 
        setTimeout(() => {
            Confirm_Passwords.textContent = ""; 
        }, 2000); 
        return;
    }
    



    alert("Form submitted");
    newFunction()
}
function newFunction(){
  let rest = document.getElementById("signUpForm");
   rest.reset()
}




let icon=document.getElementById("eye")
// let icon2=document.getElementById("eye2")

icon.innerHTML=`<i id="eye" class="fa-regular fa-eye"></i>`
// icon2.innerHTML=`<i id="eye" class="fa-regular fa-eye"></i>`

icon.addEventListener("click",function() {
if (inputPassword.type =='password') {
    inputPassword.type='text'
  icon.innerHTML=`<i class="fa-regular fa-eye-slash"></i>` 
}
else if (inputPassword.type =='text') {
    inputPassword.type='password'
  icon.innerHTML=`<i id="eye" class="fa-regular fa-eye"></i>`
}
})
// icon2.addEventListener("click",function() {
//   if (inputCon_Password.type =='password') {
//     inputCon_Password.type='text'
//     icon2.innerHTML=`<i class="fa-regular fa-eye-slash"></i>` 
//   }
//   else if (inputCon_Password.type =='text') {
//     inputCon_Password.type='password'
//     icon2.innerHTML=`<i id="eye" class="fa-regular fa-eye"></i>`
//   }
//   })
