// Assignment Code
var generateBtn = document.querySelector("#generate-btn");  // selector
const PasswordBox = document.getElementById("password");   // selector

const length = 12; // Set the password length
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "@#$%^&*()=~|}{[]<>/-=_";

// Combine all possible characters into one string
const allChars = upperCase + lowerCase + number + symbol;

// Function to create password
function createPassword() {
  let password = "";
  
  // Ensure the password includes at least one of each character type
  password += upperCase[Math.floor(Math.random() * upperCase.length)];
  password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
  password += number[Math.floor(Math.random() * number.length)];
  password += symbol[Math.floor(Math.random() * symbol.length)];

  // Add random characters until password length reaches the specified length
  while (password.length < length) {
    password += allChars[Math.floor(Math.random() * allChars.length)];
  }

  // Update the password input field with the generated password
  PasswordBox.value = password;
}

// Function to copy password to clipboard
function copyPassword() {
  PasswordBox.select();
  document.execCommand("copy");
}

// Add event listener to generate button
generateBtn.addEventListener("click", createPassword);

// Add event listener to copy button
const copyBtn = document.getElementById("copy-btn"); // 
copyBtn.addEventListener("click", copyPassword);