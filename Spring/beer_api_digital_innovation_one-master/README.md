# Desenvolvimento de testes unitários para validar uma API REST de gerenciamento estoques de cerveja

## Sobre o projeto

Foi criada uma aplicação que gerencia um estoque de bebidas. O Desafio do projeto é desenvolver os testes unitários para validar a aplicaçao...

### Ferramentas de testes:

- JUnit;
- Mockito;
- Hamcrest;

*Obs:* Gerenciamento através do spring boot start test.

### Via postman foram testadas as seguintes funcionalidades:

- Criar cerveja (POST create beer - http:localhost:8080/api/v1/beers/ - body {"name": "xxx", "brand": "xxx", "max": xx, "quantity": xx, "type": "XXX"});
- Buscar cerveja por nome (GET beer by name - http://localhost:8080/api/v1/beers/nomecerveja);
- Listar cervejas (GET list beer - http://localhost:8080/api/v1/beers);
- Deletar cerveja (DEL - http://localhost:8080/api/v1/beers/idcerveja);
- Incrementar cerveja (PATCH - http://localhost:8080/api/v1/beers/idcerveja/increment - body {"quantity": xx}); e
- Decrementar cerveja (PATCH - http://localhost:8080/api/v1/beers/idcerveja/decrement - body {"quantity": xx})
