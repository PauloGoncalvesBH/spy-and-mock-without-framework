# Fundamento de funcionamento de spy e mock externo

<div align="center">
<i>Esse material é quase de graça, basta deixar uma star ⭐ no <a href="https://github.com/PauloGoncalvesBH/my-framework-test">repositório</a>.</i>
</div>
<br>

Esse material consiste em entender o funcionamento interno de:
1. **mock de uma dependência**, substituindo seu conteúdo pelo arquivo de mesmo nome no diretório `__mocks__`
1. **spy**, entendendo como altera o conteúdo ao mesmo tempo que armazena o conteúdo das chamadas feitas.
1. **test**, sendo a estrutura, aonde os testes estão inseridos.
1. **expect**, realizando comparação do valor esperado com o atual.

O material foi implementado dentro do diretório [my-test-framework](./my-test-framework), enquanto os testes estão em [tests](./tests), validando o comportamento do método `thumbWar`, que está em [src](./src).

Acesse:
1. A [implementação do spy](./my-test-framework/spy.js) e o [teste que consome o spy](./tests/spy.test.js) para entender o funcionamento de um Spy e como armazena todas as chamadas feitas e argumentos passados.
1. O [teste mockando com módulo externo](./tests/external-mock-module.test.js) e o [novo comportamento do método getWinner](./tests/__mocks__/utils.js) para entender como é alterado o comportamento de um módulo através de cache.

<p align="center">
 <img src="https://user-images.githubusercontent.com/29241659/115166427-6d523580-a089-11eb-872c-3ebc26ab15d9.png" height="320">
</p>

## Execução

1. Instale as dependências:
```
npm install
```

> As únicas dependências são utilizadas apenas na exibição do resultado no terminal

2. Execute o seguinte comando para executar os testes:

```
npm test
```
ou
```
node index.js ./**/*.test.js
```

## Materiais

- [require.cache](https://nodejs.org/api/modules.html#modules_require_cache): Utilizado para alterar o módulo carregado em cache.
- [require.resolve](https://nodejs.org/api/modules.html#modules_require_resolve_request_options): Utilizado para pegar a localização do módulo.
