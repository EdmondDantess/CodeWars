/*
ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

If the function is passed a valid PIN string, return true, else return false.

Examples (Input --> Output)
"1234"   -->  true
"12345"  -->  false
"a234"   -->  false
*/

function validatePIN(pin) {
    let newnum = Number(pin);
      if (Number.isInteger(newnum) && newnum >= 0 && pin.includes(".") == false && /\s/g.test(pin) == false && pin.includes("+") == false && newnum % 1 == 0)  {
        if (pin.length == 4 || pin.length == 6 )  {
            return true;
        } else {
            return false
        }
           }
    return false;
}



console.log(validatePIN("1120"))