    // VAR of the QS-ID button for loading the <script>
    let generateBtn = document.querySelector("#generate");

    // Write password to the #password input
    function writePassword() {
        let passwordText = document.querySelector("#password");

        function generatePassword() {
            // ASK for a numerical INPUT
            let quantity = Number(window.prompt('Select your password length. Remember, it must be between 8 and 128 characters:'));
            console.log('PWD LENGTH: ' + quantity + ' characters.');

            // MEET the SETTINGS to create the password
            let input_low = window.prompt('Include Lowercase characters? Type Y to accept or N to cancel.');
            console.log(input_low.toUpperCase() + ': Lowercase');
            let input_upp = window.prompt('Include Uppercase characters? Type Y to accept or N to cancel.');
            console.log(input_upp.toUpperCase() + ': Uppercase');
            let input_num = window.prompt('Include Numbers? Type Y to accept or N to cancel.');
            console.log(input_num.toUpperCase() + ': Numbers');
            let input_sym = window.prompt('Include Symbols? Type Y to accept or N to cancel.');
            console.log(input_sym.toUpperCase() + ': Symbols');

            // PWD
            let pass_new = "";
            const pass_min = 8;
            const pass_max = 128;

            // WONKA!
            const char_low = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
            const char_upp = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
            const char_num = [0,1,2,3,4,5,6,7,8,9];
            const char_sym = ['#','$','%','&','/','(',')','=','¿','?','¡','!','*'];

            function verify() {
                if (quantity >= pass_min && quantity <= pass_max) {
                    pass_generator();
                }
                else if (quantity < 8) {
                    console.log('ERROR: SHORT PWD');
                    passwordText.value = "ERROR: Password too short, the minimum is 8 characters.";
                }
                else if (quantity > 128) {
                    console.log('ERROR: LARGE PWD');
                    passwordText.value = "ERROR: Password too large, the maximum is 128 characters.";
                }
                else {
                    console.log('ERROR: NO DATA');
                    passwordText.value = "ERROR: TYPE SOME DATA.";
                }
            }
            verify();

            function pass_generator() {

                // IF (YES) = FULL
                if ((input_low.toUpperCase() === 'Y' || input_low === 'YES') &&
                    (input_upp.toUpperCase() === 'Y' || input_upp === 'YES') &&
                    (input_num.toUpperCase() === 'Y' || input_num === 'YES') &&
                    (input_sym.toUpperCase() === 'Y' || input_sym === 'YES')){
                    for (let i = 0; i < quantity; i++) {
                        pass_new = pass_new + ((char_low[Math.floor(Math.random()*char_low.length)]) + (char_upp[Math.floor(Math.random()*char_upp.length)]) + (char_num[Math.floor(Math.random()*char_num.length)]) + (char_sym[Math.floor(Math.random()*char_sym.length)]));
                    }
                    console.log("PWD: " + pass_new.slice(quantity * 3));
                    passwordText.value = pass_new.slice(quantity * 3);
                }

                // ELSE IF (YES) = UPP NUM SYM
                else if (
                    (input_low.toUpperCase() === 'N' || input_low === 'NO') &&
                    (input_upp.toUpperCase() === 'Y' || input_upp === 'YES') &&
                    (input_num.toUpperCase() === 'Y' || input_num === 'YES') &&
                    (input_sym.toUpperCase() === 'Y' || input_sym === 'YES')){
                    for (let i = 0; i < quantity; i++) {
                        pass_new = pass_new + ((char_upp[Math.floor(Math.random()*char_upp.length)]) + (char_num[Math.floor(Math.random()*char_num.length)]) + (char_sym[Math.floor(Math.random()*char_sym.length)]));
                    }
                    console.log("PWD: " + pass_new.slice(quantity * 2));
                    passwordText.value = pass_new.slice(quantity * 2);
                }

                // ELSE IF (YES) = LOW NUM SYM
                else if (
                    (input_low.toUpperCase() === 'Y' || input_low === 'YES') &&
                    (input_upp.toUpperCase() === 'N' || input_upp === 'NO') &&
                    (input_num.toUpperCase() === 'Y' || input_num === 'YES') &&
                    (input_sym.toUpperCase() === 'Y' || input_sym === 'YES')){
                    for (let i = 0; i < quantity; i++) {
                        pass_new = pass_new + ((char_low[Math.floor(Math.random()*char_low.length)]) + (char_num[Math.floor(Math.random()*char_num.length)]) + (char_sym[Math.floor(Math.random()*char_sym.length)]));
                    }
                    console.log("PWD: " + pass_new.slice(quantity * 2));
                    passwordText.value = pass_new.slice(quantity * 2);
                }

                // ELSE IF (YES) = LOW UPP SYM
                else if (
                    (input_low.toUpperCase() === 'Y' || input_low === 'YES') &&
                    (input_upp.toUpperCase() === 'Y' || input_upp === 'YES') &&
                    (input_num.toUpperCase() === 'N' || input_num === 'NO') &&
                    (input_sym.toUpperCase() === 'Y' || input_sym === 'YES')){
                    for (let i = 0; i < quantity; i++) {
                        pass_new = pass_new + ((char_low[Math.floor(Math.random()*char_low.length)]) + (char_upp[Math.floor(Math.random()*char_upp.length)]) + (char_sym[Math.floor(Math.random()*char_sym.length)]));
                    }
                    console.log("PWD: " + pass_new.slice(quantity * 2));
                    passwordText.value = pass_new.slice(quantity * 2);
                }

                // ELSE IF (YES) = LOW UPP NUM
                else if (
                    (input_low.toUpperCase() === 'Y' || input_low === 'YES') &&
                    (input_upp.toUpperCase() === 'Y' || input_upp === 'YES') &&
                    (input_num.toUpperCase() === 'Y' || input_num === 'YES') &&
                    (input_sym.toUpperCase() === 'N' || input_sym === 'NO')){
                    for (let i = 0; i < quantity; i++) {
                        pass_new = pass_new + ((char_low[Math.floor(Math.random()*char_low.length)]) + (char_upp[Math.floor(Math.random()*char_upp.length)]) + (char_num[Math.floor(Math.random()*char_num.length)]));
                    }
                    console.log("PWD: " + pass_new.slice(quantity * 2));
                    passwordText.value = pass_new.slice(quantity * 2);
                }

                // ELSE IF (YES) = NUM SYM
                else if (
                    (input_low.toUpperCase() === 'N' || input_low === 'NO') &&
                    (input_upp.toUpperCase() === 'N' || input_upp === 'NO') &&
                    (input_num.toUpperCase() === 'Y' || input_num === 'YES') &&
                    (input_sym.toUpperCase() === 'Y' || input_sym === 'YES')){
                    for (let i = 0; i < quantity; i++) {
                        pass_new = pass_new + ((char_num[Math.floor(Math.random()*char_num.length)]) + (char_sym[Math.floor(Math.random()*char_sym.length)]));
                    }
                    console.log("PWD: " + pass_new.slice(quantity));
                    passwordText.value = pass_new.slice(quantity);
                }

                // ELSE IF (YES) = LOW UPP
                else if (
                    (input_low.toUpperCase() === 'Y' || input_low === 'YES') &&
                    (input_upp.toUpperCase() === 'Y' || input_upp === 'YES') &&
                    (input_num.toUpperCase() === 'N' || input_num === 'NO') &&
                    (input_sym.toUpperCase() === 'N' || input_sym === 'NO')){
                    for (let i = 0; i < quantity; i++) {
                        pass_new = pass_new + ((char_low[Math.floor(Math.random()*char_low.length)]) + (char_upp[Math.floor(Math.random()*char_upp.length)]));
                    }
                    console.log("PWD: " + pass_new.slice(quantity));
                    passwordText.value = pass_new.slice(quantity);
                }

                // ELSE IF (YES) = UPP NUM
                else if (
                    (input_low.toUpperCase() === 'N' || input_low === 'NO') &&
                    (input_upp.toUpperCase() === 'Y' || input_upp === 'YES') &&
                    (input_num.toUpperCase() === 'Y' || input_num === 'YES') &&
                    (input_sym.toUpperCase() === 'N' || input_sym === 'NO')){
                    for (let i = 0; i < quantity; i++) {
                        pass_new = pass_new + ((char_upp[Math.floor(Math.random()*char_upp.length)]) + (char_num[Math.floor(Math.random()*char_num.length)]));
                    }
                    console.log("PWD: " + pass_new.slice(quantity));
                    passwordText.value = pass_new.slice(quantity);
                }

                // ELSE IF (YES) = UPP SYM
                else if (
                    (input_low.toUpperCase() === 'N' || input_low === 'NO') &&
                    (input_upp.toUpperCase() === 'Y' || input_upp === 'YES') &&
                    (input_num.toUpperCase() === 'N' || input_num === 'NO') &&
                    (input_sym.toUpperCase() === 'Y' || input_sym === 'YES')){
                    for (let i = 0; i < quantity; i++) {
                        pass_new = pass_new + ((char_upp[Math.floor(Math.random()*char_upp.length)]) + (char_sym[Math.floor(Math.random()*char_sym.length)]));
                    }
                    console.log("PWD: " + pass_new.slice(quantity));
                    passwordText.value = pass_new.slice(quantity);
                }

                // ELSE IF (YES) = LOW NUM
                else if (
                    (input_low.toUpperCase() === 'Y' || input_low === 'YES') &&
                    (input_upp.toUpperCase() === 'N' || input_upp === 'NO') &&
                    (input_num.toUpperCase() === 'Y' || input_num === 'YES') &&
                    (input_sym.toUpperCase() === 'N' || input_sym === 'NO')){
                    for (let i = 0; i < quantity; i++) {
                        pass_new = pass_new + ((char_low[Math.floor(Math.random()*char_low.length)]) + (char_num[Math.floor(Math.random()*char_num.length)]));
                    }
                    console.log("PWD: " + pass_new.slice(quantity));
                    passwordText.value = pass_new.slice(quantity);
                }

                // ELSE IF (YES) = LOW SYM
                else if (
                    (input_low.toUpperCase() === 'Y' || input_low === 'YES') &&
                    (input_upp.toUpperCase() === 'N' || input_upp === 'NO') &&
                    (input_num.toUpperCase() === 'N' || input_num === 'NO') &&
                    (input_sym.toUpperCase() === 'Y' || input_sym === 'YES')){
                    for (let i = 0; i < quantity; i++) {
                        pass_new = pass_new + ((char_low[Math.floor(Math.random()*char_low.length)]) + (char_sym[Math.floor(Math.random()*char_sym.length)]));
                    }
                    console.log("PWD: " + pass_new.slice(quantity));
                    passwordText.value = pass_new.slice(quantity);
                }

                // ELSE IF (YES) = LOW
                else if (
                    (input_low.toUpperCase() === 'Y' || input_low === 'Y') &&
                    (input_upp.toUpperCase() === 'N' || input_upp === 'NO') &&
                    (input_num.toUpperCase() === 'N' || input_num === 'NO') &&
                    (input_sym.toUpperCase() === 'N' || input_sym === 'NO')){
                    for (let i = 0; i < quantity; i++) {
                        pass_new = pass_new + (char_low[Math.floor(Math.random()*char_low.length)]);
                    }
                    console.log("PWD: " + pass_new);
                    passwordText.value = pass_new;
                }

                // ELSE IF (YES) = UPP
                else if (
                    (input_low.toUpperCase() === 'N' || input_low === 'NO') &&
                    (input_upp.toUpperCase() === 'Y' || input_upp === 'YES') &&
                    (input_num.toUpperCase() === 'N' || input_num === 'NO') &&
                    (input_sym.toUpperCase() === 'N' || input_sym === 'NO')){
                    for (let i = 0; i < quantity; i++) {
                        pass_new = pass_new + (char_upp[Math.floor(Math.random()*char_upp.length)]);
                    }
                    console.log("PWD: " + pass_new);
                    passwordText.value = pass_new;
                }

                // ELSE IF (YES) = NUM
                else if (
                    (input_low.toUpperCase() === 'N' || input_low === 'NO') &&
                    (input_upp.toUpperCase() === 'N' || input_upp === 'NO') &&
                    (input_num.toUpperCase() === 'Y' || input_num === 'YES') &&
                    (input_sym.toUpperCase() === 'N' || input_sym === 'NO')){
                    for (let i = 0; i < quantity; i++) {
                        pass_new = pass_new + (char_num[Math.floor(Math.random()*char_num.length)]);
                    }
                    console.log("PWD: " + pass_new);
                    passwordText.value = pass_new;
                }

                // ELSE IF (YES) = SYM
                else if (
                    (input_low.toUpperCase() === 'N' || input_low === 'NO') &&
                    (input_upp.toUpperCase() === 'N' || input_upp === 'NO') &&
                    (input_num.toUpperCase() === 'N' || input_num === 'NO') &&
                    (input_sym.toUpperCase() === 'Y' || input_sym === 'YES')){
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

    // WHEN the BTN is clicked, THEN run the function
    generateBtn.addEventListener("click", writePassword);