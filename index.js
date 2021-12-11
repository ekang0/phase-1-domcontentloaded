// Your code goes here

document.addEventListener('DOMContentLoaded', function() {
  const txt = document.getElementById('text');
  txt.textContent = 'This is really cool!'
}
);

/* console.log(
  "This console.log() fires when index.js loads - before DOMContentLoaded is triggered"
); */

//Use the event's callback function to target the paragraph element with id="text" and replace the text with "This is really cool!"