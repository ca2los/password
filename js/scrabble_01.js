    // Print "Hello World" 5 times

    for (let i = 0; i < 5; i++) {
        console.log("Hello World!");
    }

    // Prints numbered "Hello World", starting form 0 to 4

    for (let i = 0; i < 5; i++) {
        console.log("Hello World!", i);
    }

    // Prints numbered "Hello World", starting from 1 to 5

    for (let i = 1; i <= 5; i++) {
        console.log("Hello World", i);
    }

    // Prints 6 numbered digits, but not the characters
    function pwd() {
        let quantity = 6;
        let pass_min = 1;
        let pass_max = 120;
        let pass_new = "";
        let option_a = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
        for (let i = 0; i < quantity; i++) {
            if (quantity >= pass_min && quantity <= pass_max) {
                pass_new += Math.floor(Math.random(option_a) * quantity);
            }
            else {
                console.log("You only have " + quantity + " characters.");
            }
        }
        console.log(option_a);
        return pass_new;
    }
    pwd();

    // Prints out 6 lines with one character each
    let quantity = 6;
    let alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    let pass_new = "";

    if (quantity >= 6 && quantity <= 12) {
        for (let i = 0; i < 6; i++) {
            pass_new = alphabet[Math.floor(Math.random()*alphabet.length)];
            console.log(pass_new);
        }
    }

    // Prints out 6 lines with 1 to 6 characters each
    let quantity = 6;
    let alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    let pass_new = "";

    if (quantity >= 6 && quantity <= 12) {
        for (let i = 0; i < 6; i++) {
            pass_new = pass_new + alphabet[Math.floor(Math.random()*alphabet.length)];
            console.log(pass_new);
        }
    }

    // Prints out a single line with the quantity of characters selected
    let quantity = 6;
    let alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    let pass_min = 6;
    let pass_max = 120;
    let pass_new = "";

    if (quantity >= pass_min && quantity <= pass_max) {
        for (let i = 0; i < quantity; i++) {
            pass_new = pass_new + alphabet[Math.floor(Math.random()*alphabet.length)];
        }
        console.log(pass_new);
    }

    // User
    let quantity = 6;
    let pass_new = "";

    // Conditions
    const pass_min = 6;
    const pass_max = 120;

    // Input choices
    const char_low = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    const char_cap = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    const char_num = [0,1,2,3,4,5,6,7,8,9];
    const char_sig = ['#','$','%','&','/','(',')','=','¿','?','¡','!','*'];

    // Booleans
    let input_low = true;
    let input_cap = true;
    let input_num = true;
    let input_sig = true;

    // Lowercase + Capital Letters + Numbers + Signs
    if (input_low === true && input_cap === true && input_num === true && input_sig === true) {
        for (let i = 0; i < quantity; i++) {
            pass_new = pass_new + ((char_low[Math.floor(Math.random()*char_low.length)]) + (char_cap[Math.floor(Math.random()*char_cap.length)]) + (char_num[Math.floor(Math.random()*char_num.length)]) + (char_sig[Math.floor(Math.random()*char_sig.length)]));
        }
        console.log(pass_new.slice(18));
    }



    // DEFINE the conditions "Else If" & "Else"
    // WHEN user access, the program runs "Lowercase" characters as default
    // WHEN user accepts a new condition, THEN it becomes CUSTOM

    // Prototype v.1.0

    // User
    let quantity = 6;
    let pass_new = "";

    // Conditions
    const pass_min = 6;
    const pass_max = 120;

    // Input choices
    const char_low = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    const char_cap = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    const char_num = [0,1,2,3,4,5,6,7,8,9];
    const char_sig = ['#','$','%','&','/','(',')','=','¿','?','¡','!','*'];

    // Booleans
    let input_low = true;
    let input_cap = true;
    let input_num = true;
    let input_sig = false;

    // WHEN program initialize, LOWERCASE is DEFAULT
    if (input_low === true) {
        // THEN ask for CAPITAL LETTERS
        if (input_cap === true) {
            // THEN ask for NUMBERS
            if (input_num === true) {
                // THEN ask for SIGNS and SYMBOLS
                if (input_sig === true) {
                    for (let i = 0; i < quantity; i++) {
                        pass_new = pass_new + ((char_low[Math.floor(Math.random()*char_low.length)]) + (char_cap[Math.floor(Math.random()*char_cap.length)]) + (char_num[Math.floor(Math.random()*char_num.length)]) + (char_sig[Math.floor(Math.random()*char_sig.length)]));
                    }
                    console.log(pass_new.slice(quantity * 3));
                }
                // ELSE keep only 3 INPUTS
                else {
                    for (let i = 0; i < quantity; i++) {
                        pass_new = pass_new + ((char_low[Math.floor(Math.random()*char_low.length)]) + (char_cap[Math.floor(Math.random()*char_cap.length)]) + (char_num[Math.floor(Math.random()*char_num.length)]));
                    }
                    console.log(pass_new.slice(quantity * 2));
                }
            }
            // ELSE keep only 2 INPUTS
            else {
                for (let i = 0; i < quantity; i++) {
                    pass_new = pass_new + ((char_low[Math.floor(Math.random()*char_low.length)]) + (char_cap[Math.floor(Math.random()*char_cap.length)]));
                }
                console.log(pass_new.slice(quantity));
            }
        }
        // ELSE keep only 1 INPUT
        else {
            for (let i = 0; i < quantity; i++) {
                pass_new = pass_new + ((char_low[Math.floor(Math.random()*char_low.length)]));
            }
            console.log(pass_new);
        }
    }
    else {
        // ELSE no data
        console.log("No data.");
    }

    // WHEN clicking a button, THEN load a script
    // WHEN typing data, THEN manipulate the INPUT
    // WHEN the program finishes, THEN OUTPUT the data

    // Prototype v.1.1

    // ASK for a numerical INPUT
    let quantity = Number(window.prompt('Select your password length. Remember, it must be between 8 and 128 characters:'));
    console.log('PWD of ' + quantity + ' characters.');

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

    // ASK for LOWERCASE
    if (input_low.toUpperCase() === 'Y' || input_low === 'YES') {
        // THEN ask for UPPERCASE
        if (input_upp.toUpperCase() === 'Y' || input_low === 'YES') {
            // THEN ask for NUMBERS
            if (input_num.toUpperCase() === 'Y' || input_low === 'YES') {
                // THEN ask for SYMBOLS
                if (input_sym.toUpperCase() === 'Y' || input_low === 'YES') {
                    for (let i = 0; i < quantity; i++) {
                        pass_new = pass_new + ((char_low[Math.floor(Math.random()*char_low.length)]) + (char_upp[Math.floor(Math.random()*char_upp.length)]) + (char_num[Math.floor(Math.random()*char_num.length)]) + (char_sym[Math.floor(Math.random()*char_sym.length)]));
                    }
                    console.log("PWD: " + pass_new.slice(quantity * 3));
                }
                // ELSE keep only 3 INPUTS
                else {
                    for (let i = 0; i < quantity; i++) {
                        pass_new = pass_new + ((char_low[Math.floor(Math.random()*char_low.length)]) + (char_upp[Math.floor(Math.random()*char_upp.length)]) + (char_num[Math.floor(Math.random()*char_num.length)]));
                    }
                    console.log(pass_new.slice(quantity * 2));
                }
            }
            // ELSE keep only 2 INPUTS
            else {
                for (let i = 0; i < quantity; i++) {
                    pass_new = pass_new + ((char_low[Math.floor(Math.random()*char_low.length)]) + (char_upp[Math.floor(Math.random()*char_upp.length)]));
                }
                console.log(pass_new.slice(quantity));
            }
        }
        // ELSE keep only 1 INPUT
        else {
            for (let i = 0; i < quantity; i++) {
                pass_new = pass_new + ((char_low[Math.floor(Math.random()*char_low.length)]));
            }
            console.log(pass_new);
        }
    }


    // Prototype v.1.2

    // ASK for a numerical INPUT
    let quantity = Number(window.prompt('Select your password length. Remember, it must be between 8 and 128 characters:'));
    console.log('PWD of ' + quantity + ' characters.');

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
        if (quantity >= 8 && quantity <= 128) {
            pass_generator();
        }
        else if (quantity < 8) {
            console.log('ERROR: Password to short.');
        }
        else {
            console.log('ERROR: Password to large.');
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
        }

        // ELSE (NO) = FULL
        else {
            console.log("PWD: No data.");
        }
    }

    // VAR of the QS-ID button for loading the <script>
    let generateBtn = document.querySelector("#generate");

    function generatePassword() {
        console.log(2 + 2);
    }

    // Write password to the #password input
    function writePassword() {
        let password = generatePassword();
        let passwordText = document.querySelector("#password");
        passwordText.value = password;
    }

    // WHEN the BTN is clicked, THEN run the function
    generateBtn.addEventListener("click", writePassword);