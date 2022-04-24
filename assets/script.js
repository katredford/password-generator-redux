var uppercase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
var lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var special = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '-', '+', '=']
var password = [];

const charNumInput = document.querySelector('#charNum');
const upperCheck = document.querySelector('#uppercase');
const lowerCheck = document.querySelector('#lowercase');
const numCheck = document.querySelector('#numbers');
const specialCheck = document.querySelector('#specialCharachters');

var buttonClick = document.querySelector('#generate');

buttonClick.addEventListener("click", function (event) {
     event.preventDefault();
    function getpasswordOptions() {
        const passlength = parseInt(charNumInput.value);

        // console.log(passlength)
        if (passlength >= 8 && passlength <= 128) {
            passlenth = password.length;
             console.log(passlength);
        } else {
            alert('Password length must be between 8 and 128 characters, please try again')
        }
        
        // console.log(upperCheck.checked === true);
        if (
            upperCheck.checked === false &&
            lowerCheck.checked === false &&
            numCheck.checked === false &&
            specialCheck.checked === false 
        ) {
            alert('Must select at least one character type, please try again')
            // return null;
        }

        if (upperCheck.checked) {
            var up = true;
        }

        console.log(up)

         if (lowerCheck.checked) {
            var low = lowerCheck;
        }

        const passwordOptions = {
            passlength: passlength,
            
        };

        return passwordOptions;

        console.log(passwordOptions, 'in the console?????');
    };
     getpasswordOptions();
});
