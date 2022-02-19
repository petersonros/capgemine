const input = document.querySelector('input');
const text = document.querySelector('span');
input.addEventListener('input', validPassword);

let digit = new RegExp("[0-9]+");
let uppercaseChar = new RegExp("[A-Z]+");
let lowercaseChar = new RegExp("[a-z]+");
let specialChar = new RegExp("[!@#$%^&*()-+]+");

function validPassword(){
    let _digit = input.value.match(digit);
    let _uppercaseChar = input.value.match(uppercaseChar);
    let _lowercaseChar = input.value.match(lowercaseChar);
    let _specialChar = input.value.match(specialChar);

    if(input.value){
        if(_digit && _uppercaseChar && _lowercaseChar && _specialChar){
            text.textContent = "Sua senha deve conter pelo menos 6 digitos.";
        }
        if(_digit && _uppercaseChar && _lowercaseChar || _specialChar){
            text.textContent = "Sua senha deve conter pelo menos 1 caracter especial.";
        }
        if(_digit || _uppercaseChar && _lowercaseChar || _specialChar){
            text.textContent = "Sua senha deve conter pelo menos um número";
        }
        if(_digit && _uppercaseChar && _lowercaseChar && _specialChar){
            text.textContent = "Sua senha deve conter pelo menos uma letra minuscula.";
        }
        if(_digit && _uppercaseChar && _lowercaseChar && _specialChar){
            text.textContent = "Senha forte";
        }
    }

    let minLength = 6 - value.length;
    text.textContent = "Sua senha deve conter pelo menos 6 digitos.";
    return Math.max(minLength, errorLength);
}