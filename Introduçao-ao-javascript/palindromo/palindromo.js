// solução 1
function verificaPalindromo(string){
    if(!string) return "string inexistente!";
    return string.split("").reverse().join("") === string
}

console.log(verificaPalindromo(""));

//solução 2
function verificaPalindromo2(str){
    let palavra;
    if(!str) return "string inexistente!";
    let j = 0; 
    for(let i = str.length; i != 0; i--){   
        if (palavra = str[i-1] !== str[j]){
            return("não é palíndromo!")
        }
        j++;   
    }
    return('palíndromo!')
}
console.log(verificaPalindromo2("ita"));