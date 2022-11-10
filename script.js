const menuClick = document.querySelector("sidebar-menu__item");

// function tweetFunction(){
//     let userInput = document.querySelector("#userInput");
//     let tweet = document.querySelector("#tweet");

//     tweet.innerHTML = userInput.value;
// }


//DISPLAY USER INPUT TO HTML PAGE
let userInput = document.getElementById("userInput");
let tweetButton = document.getElementById('tweetButton');
let tweet = document.getElementById('tweet');

function tweetFunction(){
    tweet.innerHTML = userInput.value;
}

tweetButton.addEventListener('click',tweetFunction);

//TEXTAREA
const textarea = document.getElementById("userInput");
textarea.style.cssText = `height: ${textarea.scrollHeight}px; overflow-y:hidden`
textarea.addEventListener("input", function() {
    this.style.height = "auto";
    this.style.height = `${this.scrollHeight}px`;
})


//PREVENT ENTER WIP
userInput.addEventListener('keypress', event => {
    event.preventDefault;
    if(event.key === 'Enter'){
        console.log('ENTER KENA KNTL');
        event.preventDefault;
        document.getElementById('tweetButton').click();
    }  
    
})
