const getAnagrams = (...args) => {
    const anagrams = {};

    args.forEach((arg) => {        
        const letters = arg.split("").sort().join("");

        if (anagrams[letters]) {

            console.log(arg); // inseri essa linha
            anagrams[letters].push(arg);
        } else {

            console.log(arg); // inseri essa linha
            anagrams[letters] = [arg];
        }
    });
    
    return Object.values(anagrams);
}