const A = 1;
const B = 1000;
/*const total = (A, B) => {
    let C = B;
    let soma = 0;
    if(1 <= A <= B <= 109){
        while (C >= A){
            soma = soma + C;
            C--;
        }
    }
    return soma;
};*/
let total = ((A + B) * (B - A + 1) )/ 2;
console.log(total);