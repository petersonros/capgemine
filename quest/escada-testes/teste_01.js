let n = 6;

for (let e = 1; e <= n; e++) { 
    
    let espaco = ' '.repeat(n - e);
    let letra = '*'.repeat(e);

    console.log(espaco + letra)
};