let meme = document.getElementById("meme");
let title = document.getElementById("title");
let getMemebtn = document.getElementById("get-meme-btn");
//API
let url = " https://meme-api.com/gimme/";
//Array of subreddits of you choice
let subreddits = ["catmemes","wholesomemes","dogmemes","me_irl"];

//Function To Get Random Meme
let getMeme = ()=>{
    //Choose a random subreddit from the subreddit array
    let randomSubreddit = subreddits[Math.floor(Math.random() * subreddits.length)];
    
    //Fetch the data from API
    fetch(url+randomSubreddit).then(m => m.json()).then(data=>{
        let memeImg = new Image();

        //Display meme image and title only after image loads
        memeImg.onload = () =>{
            meme.src = data.url;
            title.innerHTML = data.title;
        }
        memeImg.src = data.url;
    })
}

getMemebtn.addEventListener("click",getMeme);
window.addEventListener("load",getMeme);