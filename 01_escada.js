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
