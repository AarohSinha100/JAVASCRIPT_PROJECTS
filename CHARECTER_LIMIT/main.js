let inputBox = document.querySelector(".input-box");
let textarea = inputBox.querySelector("textarea");
let signal_num = inputBox.querySelector(".signal_num");

textarea.addEventListener("keyup",()=>{
    let valLength = textarea.value.length; //stored text value length into valLength

    signal_num.innerText =  valLength; 
    (valLength > 0) ? inputBox.classList.add("active") : inputBox.classList.remove("active");

    (valLength > 100) ? inputBox.classList.add("error") : inputBox.classList.remove("error");

});