// const forms = document.getElementById("register");
// eFields = forms.getElementById("emails"),
//     eInputs = eFields.getElementById("email_inpu"),
//     pFields = forms.querySelector(".password"),
//     pInputs = pFields.getElementById("password_inpu");

const register_btn = document.getElementById("register_btn");
const efields = document.getElementById("emails");
const einput = document.getElementById("email_inpu");
const pFields = document.getElementById("pass");
const paInput = document.getElementById("password_inpu");
const conFields = document.getElementById("confirm");
const conInput = document.getElementById("password_inpt");


const nexts = document.getElementById("btnRegister");




nexts.addEventListener('click', cli);

function cli() {
    efields.classList.remove("shake", "error");
    pFields.classList.remove("shake", "error");
    conFields.classList.remove("shake", "error");
}


register_btn.addEventListener('click', clickMe)

function clickMe() {
    // e.preventDefault();
    //if email and password is blank then add shake class in it else call specified function
    (einput.value == "") ? efields.classList.add("shake", "error"): checkEmail();
    (paInput.value == "") ? pFields.classList.add("shake", "error"): checkPass();
    (conInput.value == "") ? conFields.classList.add("shake", "error"): conPass();
    // alert(pFields.value)


    setTimeout(() => {
        //remove shake class after 500ms
        efields.classList.remove("shake");
        pFields.classList.remove("shake");
        conFields.classList.remove("shake");
    }, 500);


    einput.onkeyup = () => { checkEmail(); } //calling checkEmail function on email input keyup
    paInput.onkeyup = () => { checkPass(); } //calling checkPassword function on pass input keyup
    conInput.onkeyup = () => { conPass(); } //calling checkPassword function on pass input keyup

    function checkEmail() { //checkEmail function
        let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/; //pattern for validate email
        if (!einput.value.match(pattern)) { //if pattern not matched then add error and remove valid class
            efields.classList.add("error");
            efields.classList.remove("valid");
            let errorTxt = efields.querySelector(".error-txt");
            //if email value is not empty then show please enter valid email else show Email can't be blank
            (einput.value != "") ? errorTxt.innerText = "Enter a valid email address": errorTxt.innerText = "Email can't be blank";
        } else { //if pattern matched then remove error and add valid class
            efields.classList.remove("error");
            efields.classList.add("valid");
        }
    }

    function checkPass() { //checkPass function
        if (paInput.value == "") { //if pass is empty then add error and remove valid class
            pFields.classList.add("error");
            pFields.classList.remove("valid");
        } else { //if pass is empty then remove error and add valid class
            pFields.classList.remove("error");
            pFields.classList.add("valid");
        }
    }

    function conPass() { //checkPass function
        if (conInput.value == "") { //if pass is empty then add error and remove valid class
            conFields.classList.add("error");
            conFields.classList.remove("valid");
        } else { //if pass is empty then remove error and add valid class
            conFields.classList.remove("error");
            conFields.classList.add("valid");
        }
    }

    //if eField and pField doesn't contains error class that mean user filled details properly
    if (!efields.classList.contains("error") && !pFields.classList.contains("error")) {
        alert('hey')
            // window.location.href = form.getAttribute("action");
            //redirecting user to the specified url which is inside action attribute of form tag
    }
}



// form.addEventListener(onsubmit = (e) => {
//     {
//         e.preventDefault(); //preventing from form submitting
//         //if email and password is blank then add shake class in it else call specified function
//         (eInput.value == "") ? eField.classList.add("shake", "error"): checkEmail();
//         (pInput.value == "") ? pField.classList.add("shake", "error"): checkPass();
//         (conInput.value == "") ? conFeild.classList.add("shake", "error"): checkPass();
//         const fentse = eInput.value;

//         alert(fentse)
//         setTimeout(() => { //remove shake class after 500ms
//             eField.classList.remove("shake");
//             pField.classList.remove("shake");
//         }, 500);

//         eInput.onkeyup = () => { checkEmail(); } //calling checkEmail function on email input keyup
//         pInput.onkeyup = () => { checkPass(); } //calling checkPassword function on pass input keyup

//         function checkEmail() { //checkEmail function
//             let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/; //pattern for validate email
//             if (!eInput.value.match(pattern)) { //if pattern not matched then add error and remove valid class
//                 eField.classList.add("error");
//                 eField.classList.remove("valid");
//                 let errorTxt = eField.querySelector(".error-txt");
//                 //if email value is not empty then show please enter valid email else show Email can't be blank
//                 (eInput.value != "") ? errorTxt.innerText = "Enter a valid email address": errorTxt.innerText = "Email can't be blank";
//             } else { //if pattern matched then remove error and add valid class
//                 eField.classList.remove("error");
//                 eField.classList.add("valid");
//             }
//         }

//         function checkPass() { //checkPass function
//             if (pInput.value == "") { //if pass is empty then add error and remove valid class
//                 pField.classList.add("error");
//                 pField.classList.remove("valid");
//             } else { //if pass is empty then remove error and add valid class
//                 pField.classList.remove("error");
//                 pField.classList.add("valid");
//             }
//         }

//         //if eField and pField doesn't contains error class that mean user filled details properly
//         if (!eField.classList.contains("error") && !pField.classList.contains("error")) {
//             window.location.href = form.getAttribute("action"); //redirecting user to the specified url which is inside action attribute of form tag
//         }
//     }
// })


// form.onsubmit = (e) => {
//     e.preventDefault(); //preventing from form submitting
//     //if email and password is blank then add shake class in it else call specified function
//     (eInput.value == "") ? eField.classList.add("shake", "error"): checkEmail();
//     (pInput.value == "") ? pField.classList.add("shake", "error"): checkPass();
//     (conInput.value == "") ? conFeild.classList.add("shake", "error"): checkPass();
//     const fentse = eInput.value;

//     alert(fentse)
//     setTimeout(() => { //remove shake class after 500ms
//         eField.classList.remove("shake");
//         pField.classList.remove("shake");
//     }, 500);

//     eInput.onkeyup = () => { checkEmail(); } //calling checkEmail function on email input keyup
//     pInput.onkeyup = () => { checkPass(); } //calling checkPassword function on pass input keyup

//     function checkEmail() { //checkEmail function
//         let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/; //pattern for validate email
//         if (!eInput.value.match(pattern)) { //if pattern not matched then add error and remove valid class
//             eField.classList.add("error");
//             eField.classList.remove("valid");
//             let errorTxt = eField.querySelector(".error-txt");
//             //if email value is not empty then show please enter valid email else show Email can't be blank
//             (eInput.value != "") ? errorTxt.innerText = "Enter a valid email address": errorTxt.innerText = "Email can't be blank";
//         } else { //if pattern matched then remove error and add valid class
//             eField.classList.remove("error");
//             eField.classList.add("valid");
//         }
//     }

//     function checkPass() { //checkPass function
//         if (pInput.value == "") { //if pass is empty then add error and remove valid class
//             pField.classList.add("error");
//             pField.classList.remove("valid");
//         } else { //if pass is empty then remove error and add valid class
//             pField.classList.remove("error");
//             pField.classList.add("valid");
//         }
//     }

//     //if eField and pField doesn't contains error class that mean user filled details properly
//     if (!eField.classList.contains("error") && !pField.classList.contains("error")) {
//         window.location.href = form.getAttribute("action"); //redirecting user to the specified url which is inside action attribute of form tag
//     }
// }