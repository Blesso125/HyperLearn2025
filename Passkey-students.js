// JavaScript code for password validation
const passwordForm = document.getElementById("passwordForm");
const passwordInput = document.getElementById("password");
const errorMessage = document.getElementById("errorMessage");

const correctPassword = "1234"; // Define your password here

passwordForm.addEventListener("submit", function(event) {
  event.preventDefault();
  
  const enteredPassword = passwordInput.value;
  
  if (enteredPassword === correctPassword) {
    // Redirect to the protected page (change the URL to your target page)
    window.location.href = "https://meet.jit.si/HyperLearnClassroom"; 
  } else {
    // Show error message
    errorMessage.style.display = "block";
  }
});
