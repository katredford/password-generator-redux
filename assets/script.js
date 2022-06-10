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
        // console.log(passlength)
         if (Number.isNaN(passlength)) {
            alert('Password length must be provided as a number');
           charNumInput.value = "";
            return null;
        }
        
        if (passlength >= 8 && passlength <= 128) {
            passlength = parseInt(charNumInput.value);
            console.log(passlength);
        } else {
            alert('Password length must be between 8 and 128 characters, please try again')
            charNumInput.value = "";
            return null;
        }

       
       

        // console.log(upperCheck.checked === true);
        if (
            upperCheck.checked === false &&
            lowerCheck.checked === false &&
            numCheck.checked === false &&
            specialCheck.checked === false
        ) {
            alert('Must select at least one character type, please try again')
            return null;
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
            passOpt: passlength,
            upperOpt: up,
            lowOpt: low,
            numOpt: num,
            specOpt: speChar

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

    var chatArray = []; //place for possible characters 

    var charWinner = []; //guaranteed characters, at least one from each array option chosen

    if (!passOptions) return null;

    if (passOptions.upperOpt) {
        chatArray = chatArray.concat(uppercase);
        charWinner.push(randomChars(uppercase));
        
        console.log(charWinner, "uppercase guaranteed")
    }

     if (passOptions.lowOpt) {
        chatArray = chatArray.concat(lowercase);
         charWinner.push(randomChars(lowercase));
         
         console.log(charWinner, "lowercase guaranteed")
     }
    
      if (passOptions.numOpt) {
        chatArray = chatArray.concat(numbers);
          charWinner.push(randomChars(numbers));
          
          console.log(charWinner, "numbers guaranteed")
      }
    
      if (passOptions.specOpt) {
        chatArray = chatArray.concat(special);
          charWinner.push(randomChars(special));
          
          console.log(charWinner, "special guaranteed")
          console.log(chatArray, "characters possible")
      }
    
    console.log(charWinner, "characters guaranteed again")
    for (var i = 0; i < passOptions.passOpt; i++){
       var characterPossible = randomChars(chatArray);

         console.log(characterPossible, 'possible chars loop')
        finalPass.push(characterPossible);

          console.log(finalPass, "final password characters possible")
    }
    
    for (var i = 0; i < charWinner.length; i++){
        finalPass[i] = charWinner[i];

    }

    return finalPass.join('');

     
}

var buttonClick = document.querySelector('#generate');

function passwordCreation() {
   event.preventDefault();
    
    var password = createPassword();
    var passwordText = document.querySelector('#password');
    
    passwordText.value = password;
}



buttonClick.addEventListener("click", passwordCreation);