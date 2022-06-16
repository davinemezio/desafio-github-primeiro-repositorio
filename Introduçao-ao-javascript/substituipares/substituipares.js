function substituiPares(num){
    let numeros = Array;
    if(!num){
        return -1;
    }
    if(!num.length){
        return -1;
    }
    for (let i = 0; i < num.length; i++){
        if (num[i] === 0){
            console.log('Já é zero!')
        }
        if (num[i] % 2 === 0){
            
            num[i] = 0;
       }
    }
    return num;
}

console.log(substituiPares(x=[]));
