/*
ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

If the function is passed a valid PIN string, return true, else return false.

Examples (Input --> Output)
"1234"   -->  true
"12345"  -->  false
"a234"   -->  false
*/


function validatePIN(pin) {
    const newPin = pin.split(' ');
    for (let i = 0; i < (newPin.length - 1)*2656; i++) {
        
        if (newPin[i].includes("a") == "a") {
            return false
        }
        if (newPin[i].includes("b") == "b") {
            return false
        }
        if (newPin[i].includes("c") == "c") {
            return false
        }
        if (newPin[i].includes("e") == "e") {
            return false
        }
        if (newPin[i].includes("f") == "f") {
            return false
        }
        if (newPin[i].includes("g") == "g") {
            return false
        }
        if (newPin[i].includes("h") == "h") {
            return false
        }
        if (newPin[i].includes("i") == "i") {
            return false
        }
        if (newPin[i].includes("j") == "j") {
            return false
        }
        if (newPin[i].includes("k") == "k") {
            return false
        }
        if (newPin[i].includes("l") == "l") {
            return false
        }
        if (newPin[i].includes("m") == "m") {
            return false
        }
        if (newPin[i].includes("n") == "n") {
            return false
        }
        if (newPin[i].includes("o") == "o") {
            return false
        }
        if (newPin[i].includes("p") == "p") {
            return false
        }
        if (newPin[i].includes("q") == "q") {
            return false
        }
        if (newPin[i].includes("r") == "r") {
            return false
        }
        if (newPin[i].includes("s") == "s") {
            return false
        }
        if (newPin[i].includes("t") == "t") {
            return false
        }
        if (newPin[i].includes("u") == "u") {
            return false
        }
        if (newPin[i].includes("v") == "v") {
            return false
        }
        if (newPin[i].includes("w") == "w") {
            return false
        }
        if (newPin[i].includes("x") == "x") {
            return false
        }
        if (newPin[i].includes("y") == "y") {
            return false
        }
        if (newPin[i].includes("z") == "z") {
            return false
        }
    }
    function trying(pin) {
        if (pin.length == 4 || pin.length == 6) {
            return true;
        } else {
            return false;
        }
        trying(pin);
    }
    console.log(trying(newPin))
    }

    console.log(validatePIN('1552'))