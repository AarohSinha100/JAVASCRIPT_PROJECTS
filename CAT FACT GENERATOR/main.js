//https://catfact.ninja/fact

const generate_button = document.querySelector(".button");
const fact_container = document.querySelector(".p");
const url = "https://catfact.ninja/fact";
const play_audio = new Audio("generatesound.mp3");

const generateFact = () =>{
    fetch(url)
    .then(res=>{
        return res.json();
    })
    .then(data=>{
        fact_container.textContent = `${data.fact}`;
        play_audio.play();
        
    })
    .catch(e=>{
        fact_container.textContent = "OOOPS!! LOOKS LIKE WE CANNOT GENERATE A FACT RIGHT NOW :((";
    })
}

generate_button.addEventListener('click',generateFact);
