

function textChanger(){
    document.getElementById("text").innerHTML = "This is really cool!";
}

document.addEventListener("DOMContentLoaded", textChanger);

console.log("This console.log() fires when index.js loads - before DOMContentLoaded is triggered");