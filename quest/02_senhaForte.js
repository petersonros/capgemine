const input = document.querySelector('input');
const text = document.querySelector('span');

input.addEventListener('input', validPassword);

let regExpWeak = /[a-z]/;
let regExpMedium = /\d+/;
let regExpStrong = /!@#$%^&*()-+/;

let min_weak_password = 3;
let min_medium_password = 6;
let min_strong_password = 6;

function validPassword(){
    let input_weak = input.value.match(regExpWeak);
    let input_medium = input.value.match(regExpMedium);
    let input_strong = input.value.match(regExpStrong);

    if(input.value){
        if(input.value.length <= min_weak_password && (input_weak || input_medium || input_strong)){
            text.textContent = "Senha fraca";
        }
        if(input.value.length >= min_medium_password && ((input_weak && input_medium) || (input_medium && input_strong))){
            text.textContent = "Senha media";
        }
        if(input.value.length >= min_strong_password && input_weak && input_medium && input_strong){
            text.textContent = "Senha forte";
        }
    }
}