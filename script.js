const menuClick = document.querySelector("sidebar-menu__item");

// function tweetFunction(){
//     let userInput = document.querySelector("#userInput");
//     let tweet = document.querySelector("#tweet");

//     tweet.innerHTML = userInput.value;
// }


//DISPLAY USER INPUT TO HTML PAGE
var userInput = document.getElementById("userInput");
var tweetButton = document.getElementById('tweetButton');
var tweet = document.getElementById('tweet');

function tweetFunction(){
    tweet.innerHTML = userInput.value;
}

tweetButton.addEventListener('click',tweetFunction);

//PREVENT ENTER WIP
userInput.addEventListener('keypress', function(event) {
    if(event.key === "Enter"){
        event.preventDefault;
        document.getElementById('tweetButton').click();
    }  
    if(event.key === "enter"){
        event.preventDefault;
        document.getElementById('tweetButton').click();
    }
    if(event.key === "ENTER"){
        event.preventDefault;
        document.getElementById('tweetButton').click();
    }
})

menuClick.addEvent

