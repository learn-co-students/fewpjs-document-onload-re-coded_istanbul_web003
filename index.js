const element = document.getElementById('text');

document.addEventListener("DOMContentLoaded", function() {
    console.log("The DOM has loaded");
    element.innerHTML = "This is really cool!";
  });
   
  console.log(
    "This console.log() fires when index.js loads - before DOMContentLoaded is triggered"
  );




//   Use the event's callback function to target the paragraph element with id="text" and replace the text with "This is really cool!"

// Note: Using the innerText property to modify DOM element content will not work for this lab. Use textContent or innerHTML instead.

// Test your event in the browser to confirm that it is working.