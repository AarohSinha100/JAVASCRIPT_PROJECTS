let submit = document.querySelector(".generate_button");
let password_length = document.getElementById("length")
let include_numbers = false;
let include_uppercase = false;
let include_lowercase = false;
let include_symbol = false;
let limitnice = false

//Checking if more than 2 elements are selected or not
let options = document.querySelectorAll(".radio__input");

let selections = 0;
function countselections(element){
    if(element.checked==true){
        selections+=1;
    }
}

//to check that password ranges from only 6 to 12
function limitlength(n){
    if(n<=5 || n>12){
        alert("PASSWORD MUST BE BETWEEN 6-12 WORDS")
    }
    else{
        limitnice = true
    }
}

//to generate a random text. We will modify it as our selection to generate password
let random_text ;

const random_text_generator = (len)=>{
    random_text = ""
    from = "abcdefghijklmnopqrstuvwxyz"
    

    for(let i=0;i<len;i++){
        random_index = Math.floor(Math.random()*26)
        random_text+=from[random_index]
    }  

}

//checking if selections are selected
function checkselections(){
    if(document.getElementById("numbers_selector").checked==true){
        include_numbers = true
    }
    if(document.getElementById("uppercase_Selector").checked==true){
        include_uppercase = true
    }
    if(document.getElementById("lowercase_Selector").checked==true){
        include_lowercase = true
    }
    if(document.getElementById("symbol_Selector").checked==true){
        include_symbol = true
    }

}

//just to generate indexing number
function generateRandomIndex(n){
    return Math.floor(Math.random()*n)
}


function uppercase_yes(){

}


// main function
let generated_password;
const password_generation = ()=>{
    let x;
    limitlength(password_length.value)
    random_text_generator(password_length.value)
    checkselections()
    generated_password = random_text

    if(include_uppercase==true){
        
    for(let i=0;i<Math.floor(Math.random()*4+1);i++){
        m = Math.floor(Math.random()*random_text.length)
        let b = String(random_text[m])
        let x = random_text.replace(random_text[m],b.toUpperCase()) 
        random_text = x
        x = x
        generated_password = x
    }
    }

    if(include_numbers==true){
        let nums = ["123","999","100","464","777","000","124","321","454"]
        x = generated_password.slice(0,-3)+nums[Math.floor(Math.random()*nums.length)]
        generated_password = x
    }

    if(include_symbol==true){
        let symbols = ["€", "$", "¢", "£", "¥"]
        for(let i=0;i<2;i++){
            m = Math.floor(Math.random()*(random_text.length-3))
            let x = generated_password.replace(random_text[m],symbols[Math.floor(Math.random()*symbols.length)]) 
            generated_password = x

        }
    }

    if(include_lowercase==false){
        generated_password = generated_password.toUpperCase()
    }
    

    






    
    
document.querySelector(".output_box").value = generated_password;
    
}


submit.addEventListener('click',()=>{
    options.forEach(countselections);
    if(selections<3){
        alert("PLEASE SELECT MORE THAN 2 OPTIONS");

    }else{
       password_generation();
    }

})

document.getElementById("copy").onclick = function(){
    if(limitnice==true){
        myFunction()
    }
}

function myFunction() {
    // Get the text field
    var copyText = document.getElementById("output-box");
  
    // Select the text field
    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile devices
  
     // Copy the text inside the text field
    navigator.clipboard.writeText(copyText.value);
  
    // Alert the copied text
    alert("Copied the text: " + copyText.value);
  }





