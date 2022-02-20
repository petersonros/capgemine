# DESAFIO DE PROGRAMAÇÃO - ACADEMIA CAPGEMINI

Atividade referente a terceira etapa do processo de seleção para a Academia Capgemini 2022. O objetivo dessa etapa é testar os seus conhecimentos em lógica de programação. Para isso, preparamos três questões com diferentes níveis de dificuldade. A implementação das questões pode ser feita em qualquer linguagem, porém a utilização de Java será um diferencial.

# Questão 01

Escreva um algoritmo que mostre na tela uma escada de tamanho n utilizando o caractere * e espaços. A base e altura da escada devem ser iguais ao valor de n. A última linha não deve conter nenhum espaço.

Exemplo:
Entrada:
n = 6

Saída:
     *
    **
   ***
  ****
 *****
******

## Solução em JavaScript

    let n = 6;
    function escada(n){
        let array = [];
        for(let i = 1; i <= n; i++){
            let espaco = " ".repeat(n - i);
            let letra = "*".repeat(i);
            array.push(espaco + letra + "<br>");
        }
        return array;
    }
    console.log(escada(n))

# Questão 02

Débora se inscreveu em uma rede social para se manter em contato com seus amigos. A página de cadastro exigia o preenchimento dos campos de nome e senha, porém a senha precisa ser forte. O site considera uma senha forte quando ela satisfaz os seguintes critérios:
Possui no mínimo 6 caracteres.
Contém no mínimo 1 digito.
Contém no mínimo 1 letra em minúsculo.
Contém no mínimo 1 letra em maiúsculo.
Contém no mínimo 1 caractere especial. Os caracteres especiais são: !@#$%^&*()-+

Débora digitou uma string aleatória no campo de senha, porém ela não tem certeza se é uma senha forte. Para ajudar Débora, construa um algoritmo que informe qual é o número mínimo de caracteres que devem ser adicionados para uma string qualquer ser considerada segura.
Exemplo:
Entrada:
Ya3
Saída:
3
Explicação:
Ela pode tornar a senha segura adicionando 3 caracteres, por exemplo, &ab, transformando a senha em Ya3&ab. 2 caracteres não são suficientes visto que a senha precisa ter um tamanho mínimo de 6 caracteres.

## Solução em JavaScript

    const input = document.querySelector('input');
    const text = document.querySelector('span');
    input.addEventListener('input', validaSenha);

    let numeros = new RegExp("[0-9]+");
    let maiusculas = new RegExp("[A-Z]+");
    let minusculas = new RegExp("[a-z]+");
    let caractereEspecial = new RegExp("[!@#$%^&*()-+]+");

    function validaSenha(){
        let _nCaractere = input.value.length >= 6;
        let _digito = input.value.match(numeros);
        let _maisculas = input.value.match(maiusculas);
        let _minusculas = input.value.match(minusculas);
        let _caractereEspecial = input.value.match(caractereEspecial);

        if(input.value){
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
    }

# Questão 03

Duas palavras podem ser consideradas anagramas de si mesmas se as letras de uma palavra podem ser realocadas para formar a outra palavra. Dada uma string qualquer, desenvolva um algoritmo que encontre o número de pares de substrings que são anagramas.
Exemplos:

Exemplo 1)
Entrada:
ovo
Saída:
3
Explicação:
A lista de todos os anagramas pares são: [o, o], [ov, vo] que estão nas posições [[0, 2], [0, 1], [1, 2]] respectivamente. 

Exemplo 2)
Entrada:
ifailuhkqq
Saída:
3
Explicação:
A lista de todos os anagramas pares são: [i, i], [q, q] e [ifa, fai] que estão nas posições [[0, 3]], [[8, 9]] e [[0, 1, 2], [1, 2, 3]].

## Solução em JavaScript

inicio do teste de comparação entre anagramas

    function sortStrChars(str) {
        if (!str) {
        return;
        }
        str = str.split('');
        str = str.sort();
        str = str.join('');
        return str;
    }

    const words = ["ifailuhkqq", "ovo", "ifailuhkqq"];
    
    function getGroupedAnagrams(words) {
        const anagrams = {};
        words.forEach((word) => {
        const sortedWord = sortStrChars(word);
        if (anagrams[sortedWord]) {
            return anagrams[sortedWord].push(word);
        }
        anagrams[sortedWord] = [word];
        });
        return anagrams;
    }
    
    const groupedAnagrams = getGroupedAnagrams(words);
    for (const sortedWord in groupedAnagrams) {
        console.log(groupedAnagrams[sortedWord].toString());
    }

fim do teste comparação de anagramas

inicio do teste que faz o indice dos anagramas

    function group_anagrams(arr) {
    let   sortedArr = arr.map(item => item.split('').sort().join(''));
    let setArr = new Set(sortedArr);
    let reducedObj = {};

    for (let setItem of setArr) {
        let indexArr = sortedArr.reduce((acc, cur, index) => {
        if (setItem === cur) {
            acc.push(index);
            console.log(index);
        }
        return acc;
        }, []);
        
        reducedObj[setItem] = indexArr;
        console.log(indexArr); 
    }

    let finalArr = [];
    console.log(finalArr);

    for (let reduceItem in reducedObj) {
        finalArr.push(reducedObj[reduceItem].map(item => arr[item]));
    }
    return finalArr;
    }
    group_anagrams(words);

fim do teste que faz o indice dos anagramas
