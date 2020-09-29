
# Teste Humor SPA
Resolução do teste proposto de criação de uma SPA que que alterne seu humor, transitando entre Normal -> Triste -> Feliz -> Normal.

### Inspiração
Enquanto procurava por inspiração para o layout, encontrei esse incrível artigo https://codinhood.com/micro/draw-animate-benders-face-css, que foi o alicerce do projeto.

### Solução
Ao acessar a home page , o Bender irá começar a ponderar sobre o sentido da vida e o contador de alegria permanecerá no Neutro(amarelo).

Ao clickar na tela, Bender vai irá transitar seu estado de Normal para Triste e o contador de alegria irá para o vermelho.

Ao interagir novamente com a tela, o sistema consultará uma API externa e irá consultar uma piada. Assim que a API retornar a piada, o sistema irá contar a piada para o Bender, que lentamente irá alternar seu humor de triste para alegre e o contador de alegria vai para o verde.

Ao terceiro contato, o usuário será redirecionado a home page e o Bender retornará ao seu estado inicial.


## Pontos Abordados

* Layout Resposivo
* Componentização
* Exemplo de Controle do Estado da Aplicação com Vuex
* Exemplo de Rotas
* Exemplo de consumo de APis e chamadas Assíncronas
* Exemplo de Implementações de Testes


## Instalação
```sh
npm install 
```
## Setup Inicial
```sh
npm run serve
```

Lucas Ferreira  – lucasferreirarm@gmail.com



