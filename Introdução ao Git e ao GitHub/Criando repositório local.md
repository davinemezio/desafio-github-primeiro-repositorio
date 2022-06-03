### Criando repositório local ###

- Crie a pasta;

- inicie o gitbash na pasta criada;

- no terminal gitbash execute o $git init;

- configure o repositório com os comandos

  a) $ git config --global user.email "endereco-de-email@xxxx.com"

  b) $git config --global user.name nome-do-autor

- após criar os arquivos na pasta execute o comando: 

  a)  $ git add *

  b)  $ git commit -m "Commit inicial"

- Para verificar as configurações utilize o comando git config --list (o email e o name devem estar iguais ao repositório do github).

  ### Apontando o repositório para o github ###

  - Execute o comando $ git remote add origin https://github.com/nomedorepositorio;
  - Verifique o repositório com o comando $ git remote -v;
  - Verifique se todos os arquivos estão "comitados" através do comando $ git status;
  - Execute o comando $git push origin master para "empurrar" os arquivos para o repositório do github;

  

