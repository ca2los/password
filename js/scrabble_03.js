// VAR of the QS-ID button for loading the <script>
let generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    let passwordText = document.querySelector("#password");
    function generatePassword() {
        let a = "Text"
        passwordText.value = a;
    }
    generatePassword();
}

// WHEN the BTN is clicked, THEN run the function
generateBtn.addEventListener("click", writePassword);