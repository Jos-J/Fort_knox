// Assignment code here//

var numerical = "0123456789";
var lowercase = "abcdefghijklomnpqrstuvwuxyz";
var uppercase = "ABCDEFGHIJKLMNOPQWRSUVWXYZ"
var specialcase = "!@#$%^&*<>?/";
var outputs = "";
var generateBtn = document.querySelector("#generate");


function generatePassword() {
  var length = Number(prompt("enter a number between 8 & 128."));
  console.log(length)
  if (length < 8 || length > 128) {
    alert("please enter a number between 8 and 128");
    return
  }
  confirmUpper = confirm("would you like an uppercase character?")

  if (confirmUpper == true) {
    outputs = uppercase
    console.log(outputs)
  }

  confirmLower = confirm("would you like an lowercase character?")
  if (confirmLower == true) {
    outputs = lowercase
    console.log(outputs)
  }
  confirmSpecial = confirm("would you like an special character?");
  if (confirmSpecial == true) {
    outputs = specialcase
    console.log(outputs)
  }
  confirmNumeral = confirm("would you like an numerical character?");
  if (confirmNumeral == true) {
    outputs = numerical
    console.log(outputs)
  }
  // //  no options are confirmed //
  if (!confirmUpper && !confirmLower && !confirmNumeral && !confirmSpecial) {
    alert(" you must confirm one ");
    return
  }
  // i cant figure this part out. the latest if statment populates i listed all combos of three options and 2 selects options but only the last if statement populated, so i deleted them. i tried to else statements but every line was errored. ill come back to this project and resubmit once my knowledge of javascript gets better. 

  //  all four options selected
  if (confirmUpper && confirmLower && confirmNumeral && confirmSpecial); {
    outputs = outputs[Math.floor(Math.random())];
    // outputs = outputs.concat(uppercase & lowercase & specialcase & numerical)
    console.log(outputs)
  }


  if (confirmUpper) {
    outputs = outputs.concat(uppercase + outputs)
    console.log(outputs)
  }

  if (confirmLower) {
    outputs = outputs.concat(lowercase + outputs)
    console.log(outputs)
  }

  if (confirmSpecial) {
    outputs = outputs.concat(specialcase + outputs)
    console.log(outputs)
  }

  if( confirmNumeral){
    outputs = outputs.concat(numerical +outputs)
    console.log(outputs)
  }

  var randomNumber = [];

  for (var i = 0; i < length; i++) {
    var password = outputs[Math.floor(Math.random() * length)];
    randomNumber.push(password);

  }

  var pw = randomNumber.join("");
  userInput(pw);
  return pw;
}


function userInput(pw) {
  document.getElementById("password").textContent = pw;
}


// // Get references to the #generate element


// // Write password to the #password input


function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
  // var randomNumber = (math.floor(Math.random() * outputs.length));
}


// // Add event listener to generate button
generateBtn.addEventListener("click", writePassword())



