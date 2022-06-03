var cont = 0;
const valor = document.getElementById('currentNumber');
let sub = document.querySelector('#subtrair');
let som = document.querySelector('#somar')

sub.addEventListener('click', subtrair);
som.addEventListener('click', somar);

function somar(){
	if(cont < 10){
		cont ++; 
    }
	if(cont >= 0){
        document.getElementById('currentNumber').style.color='black';
	}
	valor.innerHTML = cont;
} 

function subtrair(){
   cont --;
   valor.innerHTML = cont;

   if (cont < 0){
	   document.getElementById('currentNumber').style.color='red';
   }
   //console.log(cont);
}
