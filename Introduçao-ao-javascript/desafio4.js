let lines =7;
 
var numberOfMatches = 0;
 
let n = 14;
let totalMatches = 0;
    while(n>1){
        //console.log(n);
        
        if( n % 2 == 0   ){
            numberOfMatches = (n/2);
            totalMatches = totalMatches+ numberOfMatches;
            n = n/2;
        }else{
            numberOfMatches = ((n-1)/2);
            totalMatches = totalMatches + numberOfMatches;
            n = ((n-1)/2)+1;   
        }
        console.log(totalMatches, numberOfMatches);
    }
    
//Escreva o seu código nos espaços em branco