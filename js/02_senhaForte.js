const input = document.querySelector('input');
const text = document.querySelector('span');
input.addEventListener('input', validaSenha);

let numeros = new RegExp("[0-9]+");
let maiusculas = new RegExp("[A-Z]+");
let minusculas = new RegExp("[a-z]+");
let caractereEspecial = new RegExp("[!@#$%^&*()-+]+");

function validaSenha(){
    //let _nCaractere = input.value.length >= 6;
    let _digito = input.value.match(numeros);
    let _maisculas = input.value.match(maiusculas);
    let _minusculas = input.value.match(minusculas);
    let _caractereEspecial = input.value.match(caractereEspecial);

/*     if(input.value){
        if(!_nCaractere){
            text.textContent = "falta quantidade";
            return
        }
        if(!_digito){
            (text.textContent = "falta numero");
            return
        }
        if(!_maisculas){
            text.textContent = "falta maiuscula";
            return
        }
        if(!_minusculas){
            text.textContent = "falta minuscula";
            return
        }
        if(!_caractereEspecial){
            text.textContent = "falta especiais";
            return
        }
        if( _nCaractere && _digito && _maisculas && _minusculas && _caractereEspecial ){
            text.textContent = "Senha forte";
            return
        }
    }  */

      if(input.value){
        if(_digito && _maisculas && _minusculas || _caractereEspecial || _nCaractere){
            return (text.textContent = "teste 1");
        }
        if(_digito && _maisculas || _minusculas && _caractereEspecial || _nCaractere){
            text.textContent = "teste dois";
        }
        if(_digito || _maisculas && _minusculas && _caractereEspecial || _nCaractere){
            text.textContent = "teste 3.";
        }
        if(_digito && _maisculas && _minusculas && _caractereEspecial && _nCaractere){
            text.textContent = "Senha forte";
        }
    }  
}