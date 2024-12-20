// Assignment Code
// var generateBtn = document.querySelector("#generate");

// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);



      const PasswordBox = document.getElementById("password")
      const lenght = 12;
      const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      const lowerCase = "abcdefghijklmnopqrstuvwxyz";
      const number = "0123456789";
      const symbol= "@#$%^&*()=~|}{[]<>/-=_";

      const allChars = upperCase + lowerCase + number + symbol;
      
      function createPassword(){
        let password = "";
        password += upperCase[Math.floor(Math.random() * upperCase.length)];
        password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
        password += number[Math.floor(Math.random() * number.length)];
        password += symbol[Math.floor(Math.random() * symbol.length)];

        while(lenght > password.length){
          password += allChars[Math.floor(Math.random() * allChars.length)];
        }
        PasswordBox.value = password;
      }

      function copyPassword(){
        PasswordBox.select();
        document.execCommand("copy");
      }