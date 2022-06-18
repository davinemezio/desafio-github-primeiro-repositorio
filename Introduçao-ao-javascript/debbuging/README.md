#  Exercício  Tratando Erros

O objetivo do exercício é criar um função que receba um array e retorne ele caso seu tamanho corresponda ao valor passado como parâmetro.

_Será necessário fazer as seguintes validações:_

1. Se os parâmetros não forem enviados, lance um erro do tipo `ReferenceError`
2. Se o array não for do tipo 'object', lance um erro do tipo `TypeError`
3. Se o número não for do tipo 'number', lance um erro do tipo `TypeError`
4. Se o tamanho do array for diferente do número enviado como parâmetro, lance um erro do tipo `RangeError`

- Utilize a declaração `try...catch`
- Filtre as chamadas de catch por cada tipo de erro utilizando o operador `instanceof`