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

// Password visibility toggle
const passwordField = document.getElementById("password");
const toggleButton = document.getElementById("togglePassword");

toggleButton.addEventListener("click", function () {
  if (passwordField.type === "password") {
    passwordField.type = "text";
    toggleButton.textContent = "Hide";
  } else {
    passwordField.type = "password";
    toggleButton.textContent = "Show";
  }
});

// OTP Input handling
document.addEventListener('DOMContentLoaded', () => {
  const otpInputs = document.querySelectorAll('.otp-box');
  const verifyButton = document.getElementById('verifyOtpButton');

  otpInputs.forEach((input, index) => {
    input.addEventListener('input', (e) => {
      const currentInput = e.target;
      const nextInput = otpInputs[index + 1];
      const prevInput = otpInputs[index - 1];

      if (currentInput.value.length === 1 && nextInput) {
        nextInput.focus();
      }

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
    } else {
      alert('Please enter a 6-digit OTP.');
    }
  });
});

// Search Destination Function
function searchDestination() {
  var destination = document.getElementById("destination-search").value;
  if (destination) {
    alert("Searching for tours or destinations in " + destination);
  } else {
    alert("Please enter a destination.");
  }
}


