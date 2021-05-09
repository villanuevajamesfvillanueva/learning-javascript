// ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

// If the function is passed a valid PIN string, return true, else return false.

// Examples
// "1234"   -->  true
// "12345"  -->  false
// "a234"   -->  false

function validatePIN(pin) {
    if (pin.length != 4 && pin.length != 6) return false;
    return (pin.match(/[^0-9]/g) === null) ? true : false; 
}

function validatePIN2(pin) {
    return /^(\d{4}|\d{6})$/.test(pin)
}


console.log(validatePIN('1234'));
console.log(validatePIN('12345'));
console.log(validatePIN('a234'));