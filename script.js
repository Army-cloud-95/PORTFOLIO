// Hamburger Menu Toggle
const hamburgerBtn = document.getElementById('hamburger-btn');
const navbarLinks = document.getElementById('navbar-links');

hamburgerBtn.addEventListener('click', () => {
  navbarLinks.classList.toggle('hidden');
});

// Form Submission & Validation
document.querySelector('form').addEventListener('submit', (e) => {
  e.preventDefault();
  const destination = e.target.querySelector('input[type="text"]').value.trim();
  
  if (destination === "") {
    alert("Please enter a destination!");
    return;
  }
  
  // Simulate Search
  alert(`Searching for flights to: ${destination}`);
  
  // Show loading spinner
  const button = e.target.querySelector('button');
  const spinner = button.querySelector('.spinner');
  spinner.classList.remove('hidden');
  button.innerHTML = "<span class='spinner'></span> Searching...";
  button.disabled = true;

  // Simulate a search delay
  setTimeout(() => {
    button.innerHTML = "Search";
    spinner.classList.add('hidden');
    button.disabled = false;
  }, 2000); // Delay of 2 seconds
});

// Date Validation: Set "To" date minimum to match the "From" date
const fromDateInput = document.querySelector('input[type="date"]:nth-child(1)');
const toDateInput = document.querySelector('input[type="date"]:nth-child(2)');

fromDateInput.addEventListener('change', () => {
  toDateInput.min = fromDateInput.value;
});
document.getElementById("hamburger-btn").addEventListener("click", function() {
    const navLinks = document.getElementById("navbar-links");
    navLinks.classList.toggle("hidden");
});
document.getElementById("submit-btn").addEventListener("click", function(event) {
  event.preventDefault();
  document.getElementById("spinner").classList.remove("hidden");
  // Perform the form submission (e.g., via fetch or AJAX)
});

const passwordField = document.getElementById("password");
const toggleButton = document.getElementById("togglePassword");

toggleButton.addEventListener("click", function () {
  // Check the current type of the password field
  if (passwordField.type === "password") {
    passwordField.type = "text"; // Show the password
    toggleButton.textContent = "Hide"; // Change the button text
  } else { 
    passwordField.type = "password"; // Hide the password
    toggleButton.textContent = "Show"; // Change the button text
  }
});
document.addEventListener('DOMContentLoaded', () => {
    const otpInputs = document.querySelectorAll('.otp-box');
    const verifyButton = document.getElementById('verifyOtpButton');
  
    otpInputs.forEach((input, index) => {
      input.addEventListener('input', (e) => {
        const currentInput = e.target;
        const nextInput = otpInputs[index + 1];
        const prevInput = otpInputs[index - 1];
  
        // Move to the next box if a digit is entered
        if (currentInput.value.length === 1 && nextInput) {
          nextInput.focus();
        }
  
        // Move to the previous box on backspace
        if (e.inputType === 'deleteContentBackward' && prevInput) {
          prevInput.focus();
        }
      });
    });
  
    verifyButton.addEventListener('click', () => {
      let otp = '';
      otpInputs.forEach((input) => {
        otp += input.value;
      });
  
      if (otp.length === 6) {
        alert(`OTP entered: ${otp}`);
        // Simulate sending the OTP to the backend
        // fetch('/verify-otp', { method: 'POST', body: JSON.stringify({ otp }) });
      } else {
        alert('Please enter a 6-digit OTP.');
      }
    });
  });
  function searchDestination() {
    var destination = document.getElementById("destination-search").value;
    if (destination) {
        alert("Searching for tours or destinations in " + destination);
    } else {
        alert("Please enter a destination.");
    }
}

