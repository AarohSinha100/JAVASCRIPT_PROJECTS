//.warning_length
//.warning_confirm

const username_input = document.querySelector(".username_input");
const email_input = document.querySelector(".email_input");
const enter_password_input = document.querySelector(".enter_password");
const confirm_password_input = document.querySelector(".confirm_password");
const radiobutton = document.querySelector(".radiobutton");

const login_button = document.querySelector(".submit");


radiobutton.checked = false;
let terms_agreed = false;

//checking the radiobutton
const if_Terms_Agreed = () => {
    if(radiobutton.checked==false){
        terms_agreed = false;
    }
    else if(radiobutton.checked==true){
        terms_agreed = true;
    }
}

//checking the email option
const check_email = () =>{
    let check;
//     if(document.querySelector(".email-id"))
// {}
    const input = email_input.value;
    if(input.includes("@")){
        document.querySelector(".warning_email").style.display = "none";
    }else{
        document.querySelector(".warning_email").style.display = "inline-block";
    }
}

//checking the password
const check_password = () => {
    const password = enter_password_input.value;
    if(password.length<8){
        document.querySelector(".warning_length").style.display = "inline-block";
    }else{
        document.querySelector(".warning_length").style.display = "none";
    }
}

//confirm the password
const confirm_password = ()=>{
    const password = enter_password_input.value;
    const confirmation = confirm_password_input.value;

    if(password!=confirmation){
        document.querySelector(".warning_confirm").style.display = "inline-block";
    }else{
        document.querySelector(".warning_confirm").style.display = "none";
    }
}


login_button.addEventListener('click',()=>{
    if_Terms_Agreed();
    if(terms_agreed==true){
        check_email();
        check_password();
        confirm_password();
    }else{
        //DO ELSE HERE
    }
})