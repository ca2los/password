// VAR of the QS-ID button for loading the <script>
let generateBtn = document.querySelector("#generate");

// KEYGEN (PWD-GEN)
function writePassword() {
    let passwordText = document.querySelector("#password");

    function generatePassword() {

        // ASK for a numerical INPUT
        let quantity = Number(window.prompt('ENTER THE AMOUNT OF CHARACTERS','AT LEAST 8 DIGITS AND 128 MAX'));
        if (quantity == null || quantity == "") {
            console.log('REJECTED');
            alert('ENTER A NUMBER FROM 8 TO 128');
            writePassword.reload();
        }
        else if (!/^[0-99b]+$/.test(quantity)) { // REGEX
            console.log('REJECTED');
            alert('ENTER NUMBER DIGITS ONLY');
            writePassword.reload();
        }
        else if (quantity < 8 || quantity > 128) {
            console.log('REJECTED');
            alert('AT LEAST 8 CHARACTERS AND 128 MAXIMUM');
            writePassword.reload();
        }
        else {
            console.log('ACCEPTED: ' + quantity + ' CHARACTERS');
        }

        // MEET the SETTINGS to create the password
        let input_low = window.prompt('INCLUDE LOWERCASE CHARACTERS?', 'ENTER "Y" TO ACCEPT OR "N" TO CANCEL');
        console.log(input_low.toUpperCase() + ': Lowercase');
        let input_upp = window.prompt('INCLUDE UPPERCASE CHARACTERS?', 'ENTER "Y" TO ACCEPT OR "N" TO CANCEL');
        console.log(input_upp.toUpperCase() + ': Uppercase');
        let input_num = window.prompt('INCLUDE NUMBERS?', 'ENTER "Y" TO ACCEPT OR "N" TO CANCEL');
        console.log(input_num.toUpperCase() + ': Numbers');
        let input_sym = window.prompt('INCLUDE SYMBOLS?', 'ENTER "Y" TO ACCEPT OR "N" TO CANCEL');
        console.log(input_sym.toUpperCase() + ': Symbols');

        // PWD
        let pass_new = "";
        const pass_min = 8;
        const pass_max = 128;

        // CANDIES
        const char_low = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
        const char_upp = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
        const char_num = [0,1,2,3,4,5,6,7,8,9];
        const char_sym = ['#','$','%','&','/','(',')','=','¿','?','¡','!','*'];

        // MEET the CONDITIONALS
        function verify() {
            if (quantity >= pass_min && quantity <= pass_max) {
                pass_generator();
            }
        }
        verify();

        function pass_generator() {

            // IF (YES) = FULL
            if ((input_low.toUpperCase() === 'Y' || input_low.toUpperCase() === 'YES') &&
                (input_upp.toUpperCase() === 'Y' || input_upp.toUpperCase() === 'YES') &&
                (input_num.toUpperCase() === 'Y' || input_num.toUpperCase() === 'YES') &&
                (input_sym.toUpperCase() === 'Y' || input_sym.toUpperCase() === 'YES')){
                for (let i = 0; i < quantity; i++) {
                    pass_new = pass_new + ((char_low[Math.floor(Math.random()*char_low.length)]) + (char_upp[Math.floor(Math.random()*char_upp.length)]) + (char_num[Math.floor(Math.random()*char_num.length)]) + (char_sym[Math.floor(Math.random()*char_sym.length)]));
                }
                console.log("PWD: " + pass_new.slice(quantity * 3));
                passwordText.value = pass_new.slice(quantity * 3);
            }

            // ELSE IF (YES) = UPP NUM SYM
            else if (
                (input_low.toUpperCase() === 'N' || input_low.toUpperCase() === 'NO') &&
                (input_upp.toUpperCase() === 'Y' || input_upp.toUpperCase() === 'YES') &&
                (input_num.toUpperCase() === 'Y' || input_num.toUpperCase() === 'YES') &&
                (input_sym.toUpperCase() === 'Y' || input_sym.toUpperCase() === 'YES')){
                for (let i = 0; i < quantity; i++) {
                    pass_new = pass_new + ((char_upp[Math.floor(Math.random()*char_upp.length)]) + (char_num[Math.floor(Math.random()*char_num.length)]) + (char_sym[Math.floor(Math.random()*char_sym.length)]));
                }
                console.log("PWD: " + pass_new.slice(quantity * 2));
                passwordText.value = pass_new.slice(quantity * 2);
            }

            // ELSE IF (YES) = LOW NUM SYM
            else if (
                (input_low.toUpperCase() === 'Y' || input_low.toUpperCase() === 'YES') &&
                (input_upp.toUpperCase() === 'N' || input_upp.toUpperCase() === 'NO') &&
                (input_num.toUpperCase() === 'Y' || input_num.toUpperCase() === 'YES') &&
                (input_sym.toUpperCase() === 'Y' || input_sym.toUpperCase() === 'YES')){
                for (let i = 0; i < quantity; i++) {
                    pass_new = pass_new + ((char_low[Math.floor(Math.random()*char_low.length)]) + (char_num[Math.floor(Math.random()*char_num.length)]) + (char_sym[Math.floor(Math.random()*char_sym.length)]));
                }
                console.log("PWD: " + pass_new.slice(quantity * 2));
                passwordText.value = pass_new.slice(quantity * 2);
            }

            // ELSE IF (YES) = LOW UPP SYM
            else if (
                (input_low.toUpperCase() === 'Y' || input_low.toUpperCase() === 'YES') &&
                (input_upp.toUpperCase() === 'Y' || input_upp.toUpperCase() === 'YES') &&
                (input_num.toUpperCase() === 'N' || input_num.toUpperCase() === 'NO') &&
                (input_sym.toUpperCase() === 'Y' || input_sym.toUpperCase() === 'YES')){
                for (let i = 0; i < quantity; i++) {
                    pass_new = pass_new + ((char_low[Math.floor(Math.random()*char_low.length)]) + (char_upp[Math.floor(Math.random()*char_upp.length)]) + (char_sym[Math.floor(Math.random()*char_sym.length)]));
                }
                console.log("PWD: " + pass_new.slice(quantity * 2));
                passwordText.value = pass_new.slice(quantity * 2);
            }

            // ELSE IF (YES) = LOW UPP NUM
            else if (
                (input_low.toUpperCase() === 'Y' || input_low.toUpperCase() === 'YES') &&
                (input_upp.toUpperCase() === 'Y' || input_upp.toUpperCase() === 'YES') &&
                (input_num.toUpperCase() === 'Y' || input_num.toUpperCase() === 'YES') &&
                (input_sym.toUpperCase() === 'N' || input_sym.toUpperCase() === 'NO')){
                for (let i = 0; i < quantity; i++) {
                    pass_new = pass_new + ((char_low[Math.floor(Math.random()*char_low.length)]) + (char_upp[Math.floor(Math.random()*char_upp.length)]) + (char_num[Math.floor(Math.random()*char_num.length)]));
                }
                console.log("PWD: " + pass_new.slice(quantity * 2));
                passwordText.value = pass_new.slice(quantity * 2);
            }

            // ELSE IF (YES) = NUM SYM
            else if (
                (input_low.toUpperCase() === 'N' || input_low.toUpperCase() === 'NO') &&
                (input_upp.toUpperCase() === 'N' || input_upp.toUpperCase() === 'NO') &&
                (input_num.toUpperCase() === 'Y' || input_num.toUpperCase() === 'YES') &&
                (input_sym.toUpperCase() === 'Y' || input_sym.toUpperCase() === 'YES')){
                for (let i = 0; i < quantity; i++) {
                    pass_new = pass_new + ((char_num[Math.floor(Math.random()*char_num.length)]) + (char_sym[Math.floor(Math.random()*char_sym.length)]));
                }
                console.log("PWD: " + pass_new.slice(quantity));
                passwordText.value = pass_new.slice(quantity);
            }

            // ELSE IF (YES) = LOW UPP
            else if (
                (input_low.toUpperCase() === 'Y' || input_low.toUpperCase() === 'YES') &&
                (input_upp.toUpperCase() === 'Y' || input_upp.toUpperCase() === 'YES') &&
                (input_num.toUpperCase() === 'N' || input_num.toUpperCase() === 'NO') &&
                (input_sym.toUpperCase() === 'N' || input_sym.toUpperCase() === 'NO')){
                for (let i = 0; i < quantity; i++) {
                    pass_new = pass_new + ((char_low[Math.floor(Math.random()*char_low.length)]) + (char_upp[Math.floor(Math.random()*char_upp.length)]));
                }
                console.log("PWD: " + pass_new.slice(quantity));
                passwordText.value = pass_new.slice(quantity);
            }

            // ELSE IF (YES) = UPP NUM
            else if (
                (input_low.toUpperCase() === 'N' || input_low.toUpperCase() === 'NO') &&
                (input_upp.toUpperCase() === 'Y' || input_upp.toUpperCase() === 'YES') &&
                (input_num.toUpperCase() === 'Y' || input_num.toUpperCase() === 'YES') &&
                (input_sym.toUpperCase() === 'N' || input_sym.toUpperCase() === 'NO')){
                for (let i = 0; i < quantity; i++) {
                    pass_new = pass_new + ((char_upp[Math.floor(Math.random()*char_upp.length)]) + (char_num[Math.floor(Math.random()*char_num.length)]));
                }
                console.log("PWD: " + pass_new.slice(quantity));
                passwordText.value = pass_new.slice(quantity);
            }

            // ELSE IF (YES) = UPP SYM
            else if (
                (input_low.toUpperCase() === 'N' || input_low.toUpperCase() === 'NO') &&
                (input_upp.toUpperCase() === 'Y' || input_upp.toUpperCase() === 'YES') &&
                (input_num.toUpperCase() === 'N' || input_num.toUpperCase() === 'NO') &&
                (input_sym.toUpperCase() === 'Y' || input_sym.toUpperCase() === 'YES')){
                for (let i = 0; i < quantity; i++) {
                    pass_new = pass_new + ((char_upp[Math.floor(Math.random()*char_upp.length)]) + (char_sym[Math.floor(Math.random()*char_sym.length)]));
                }
                console.log("PWD: " + pass_new.slice(quantity));
                passwordText.value = pass_new.slice(quantity);
            }

            // ELSE IF (YES) = LOW NUM
            else if (
                (input_low.toUpperCase() === 'Y' || input_low.toUpperCase() === 'YES') &&
                (input_upp.toUpperCase() === 'N' || input_upp.toUpperCase() === 'NO') &&
                (input_num.toUpperCase() === 'Y' || input_num.toUpperCase() === 'YES') &&
                (input_sym.toUpperCase() === 'N' || input_sym.toUpperCase() === 'NO')){
                for (let i = 0; i < quantity; i++) {
                    pass_new = pass_new + ((char_low[Math.floor(Math.random()*char_low.length)]) + (char_num[Math.floor(Math.random()*char_num.length)]));
                }
                console.log("PWD: " + pass_new.slice(quantity));
                passwordText.value = pass_new.slice(quantity);
            }

            // ELSE IF (YES) = LOW SYM
            else if (
                (input_low.toUpperCase() === 'Y' || input_low.toUpperCase() === 'YES') &&
                (input_upp.toUpperCase() === 'N' || input_upp.toUpperCase() === 'NO') &&
                (input_num.toUpperCase() === 'N' || input_num.toUpperCase() === 'NO') &&
                (input_sym.toUpperCase() === 'Y' || input_sym.toUpperCase() === 'YES')){
                for (let i = 0; i < quantity; i++) {
                    pass_new = pass_new + ((char_low[Math.floor(Math.random()*char_low.length)]) + (char_sym[Math.floor(Math.random()*char_sym.length)]));
                }
                console.log("PWD: " + pass_new.slice(quantity));
                passwordText.value = pass_new.slice(quantity);
            }

            // ELSE IF (YES) = LOW
            else if (
                (input_low.toUpperCase() === 'Y' || input_low.toUpperCase() === 'Y') &&
                (input_upp.toUpperCase() === 'N' || input_upp.toUpperCase() === 'NO') &&
                (input_num.toUpperCase() === 'N' || input_num.toUpperCase() === 'NO') &&
                (input_sym.toUpperCase() === 'N' || input_sym.toUpperCase() === 'NO')){
                for (let i = 0; i < quantity; i++) {
                    pass_new = pass_new + (char_low[Math.floor(Math.random()*char_low.length)]);
                }
                console.log("PWD: " + pass_new);
                passwordText.value = pass_new;
            }

            // ELSE IF (YES) = UPP
            else if (
                (input_low.toUpperCase() === 'N' || input_low.toUpperCase() === 'NO') &&
                (input_upp.toUpperCase() === 'Y' || input_upp.toUpperCase() === 'YES') &&
                (input_num.toUpperCase() === 'N' || input_num.toUpperCase() === 'NO') &&
                (input_sym.toUpperCase() === 'N' || input_sym.toUpperCase() === 'NO')){
                for (let i = 0; i < quantity; i++) {
                    pass_new = pass_new + (char_upp[Math.floor(Math.random()*char_upp.length)]);
                }
                console.log("PWD: " + pass_new);
                passwordText.value = pass_new;
            }

            // ELSE IF (YES) = NUM
            else if (
                (input_low.toUpperCase() === 'N' || input_low.toUpperCase() === 'NO') &&
                (input_upp.toUpperCase() === 'N' || input_upp.toUpperCase() === 'NO') &&
                (input_num.toUpperCase() === 'Y' || input_num.toUpperCase() === 'YES') &&
                (input_sym.toUpperCase() === 'N' || input_sym.toUpperCase() === 'NO')){
                for (let i = 0; i < quantity; i++) {
                    pass_new = pass_new + (char_num[Math.floor(Math.random()*char_num.length)]);
                }
                console.log("PWD: " + pass_new);
                passwordText.value = pass_new;
            }

            // ELSE IF (YES) = SYM
            else if (
                (input_low.toUpperCase() === 'N' || input_low.toUpperCase() === 'NO') &&
                (input_upp.toUpperCase() === 'N' || input_upp.toUpperCase() === 'NO') &&
                (input_num.toUpperCase() === 'N' || input_num.toUpperCase() === 'NO') &&
                (input_sym.toUpperCase() === 'Y' || input_sym.toUpperCase() === 'YES')){
                for (let i = 0; i < quantity; i++) {
                    pass_new = pass_new + (char_sym[Math.floor(Math.random()*char_sym.length)]);
                }
                console.log("PWD: " + pass_new);
                passwordText.value = pass_new;
            }

            // ELSE (NO) = FULL
            else {
                console.log("PWD: No data.");
                passwordText.value = "PWD: No data.";
            }
        }
    }
    generatePassword();
}

// WHEN the BTN is clicked, THEN run the PROGRAM
generateBtn.addEventListener("click", writePassword);