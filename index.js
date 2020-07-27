document.addEventListener("DOMContentLoaded", function () {
    console.log("The DOM has loaded");
    const textEle = document.querySelector("#text");

    textEle.textContent = "This is really cool!";
});

console.log(
    "This console.log() fires when index.js loads - before DOMContentLoaded is triggered"
);
