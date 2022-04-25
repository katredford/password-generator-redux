var uppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
var lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var special = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '-', '+', '=']


const charNumInput = document.querySelector('#charNum');
const upperCheck = document.querySelector('#uppercase');
const lowerCheck = document.querySelector('#lowercase');
const numCheck = document.querySelector('#numbers');
const specialCheck = document.querySelector('#specialCharacters');




    function getpasswordOptions() {
         var passlength = parseInt(charNumInput.value);

        if (Number.isNaN(passlength)) {
            alert('Password length must be provided as a number');
            return null;
        }
        // console.log(passlength)
        if (passlength >= 8 && passlength <= 128) {
            passlength = parseInt(charNumInput.value);
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
             return getpasswordOptions();
        }

        if (upperCheck.checked) {
            var up = true;
        } else {
            up = false;
        }

        // console.log(up, "true up")

        if (lowerCheck.checked) {
            var low = true;
        } else {
            low = false;
        }

        if (numCheck.checked) {
            var num = true;
        } else {
            num = false;
        }

        if (specialCheck.checked) {
            var speChar = true;
        } else {
            speChar = false;
        }

        const passwordOptions = {
            passlength: passlength,
            up: up,
            low: low,
            num: num,
            speChar: speChar

        };
        console.log(passwordOptions, 'in the console?????');

        return passwordOptions;


    };
   


function randomChars(arr){
    var randomIndex = Math.floor(Math.random() * arr.length);
    var randomElement = arr[randomIndex];

return randomElement;
     
}

function createPassword() {
    var passOptions = getpasswordOptions();

    var finalPass = [];

    var charactersPossible = [];

    var charactersGuaranteed = [];

    if (!passOptions) return null;

    if (passOptions.up) {
        charactersPossible = charactersPossible.concat(uppercase);
        charactersGuaranteed.push(randomChars(uppercase));
        
        console.log(charactersGuaranteed, "uppercase guaranteed")
    }

     if (passOptions.low) {
        charactersPossible = charactersPossible.concat(lowercase);
         charactersGuaranteed.push(randomChars(lowercase));
         
         console.log(charactersGuaranteed, "lowercase guaranteed")
     }
    
      if (passOptions.num) {
        charactersPossible = charactersPossible.concat(numbers);
          charactersGuaranteed.push(randomChars(numbers));
          
          console.log(charactersGuaranteed, "numbers guaranteed")
      }
    
      if (passOptions.speChar) {
        charactersPossible = charactersPossible.concat(special);
          charactersGuaranteed.push(randomChars(special));
          
          console.log(charactersGuaranteed, "special guaranteed")
          console.log(charactersPossible, "characters possible")
      }
    
    console.log(charactersGuaranteed, "characters guaranteed again")
    for (var i = 0; i < passOptions.passlength; i++){
       var characterPossible = randomChars(charactersPossible);

         console.log(characterPossible, 'possinle chars loop')
        finalPass.push(characterPossible);

          console.log(finalPass, "final password characters possible")
    }
    
    for (var i = 0; i < charactersGuaranteed.length; i++){
        finalPass[i] = charactersGuaranteed[i];

    }

    return finalPass.join('');

     
}

var buttonClick = document.querySelector('#generate');

function passwordCreation() {
    var password = createPassword();
    var passwordText = document.querySelector('#password');

    passwordText.value = password;
}



buttonClick.addEventListener("click", passwordCreation);