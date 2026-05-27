# FC Clean Architecture — Estudo

Projeto criado para estudo e prática de Clean Architecture em Node.js/TypeScript.

## Objetivo

O repositório mostra, de forma didática, como separar domínio, casos de uso e infraestrutura em uma aplicação com Express, Sequelize e Jest. A ideia é servir como referência de estrutura, não como aplicação de produção.

## Estrutura principal

- `src/domain/`: entidades, value objects, serviços e interfaces de repositório.
- `src/usecase/`: casos de uso da aplicação e seus DTOs.
- `src/infrastructure/`: adaptadores para Express, Sequelize, presenters e repositórios concretos.
- `src/infrastructure/api/__tests__/`: testes e2e da API.

## Tecnologias

- TypeScript
- Node.js
- Express
- Sequelize / sequelize-typescript
- Jest

## Scripts

Os scripts disponíveis em `package.json` são:

- `npm test`: executa a verificação de TypeScript e a suíte de testes.
- `npm run tsc`: roda apenas o compilador TypeScript.
- `npm run dev`: inicia a aplicação com `nodemon`.

## Como executar

1. Instale as dependências:

```
npm install
```

2. Execute os testes:

```
npm test
```

3. Suba a aplicação em modo de desenvolvimento:

```
npm run dev
```

## Rotas da API

- `POST /customer`
- `GET /customer`
- `POST /product`
- `GET /product`

As rotas estão montadas em `src/infrastructure/api/express.ts`.

## Observação importante sobre Sequelize

O erro `ModelNotInitializedError: Model not initialized: Member "create" cannot be called. "ProductModel" needs to be added to a Sequelize instance` ocorre quando o `ProductModel` é usado antes de ser registrado em uma instância do Sequelize.

Neste projeto, a inicialização é feita em `src/infrastructure/api/express.ts`, onde os modelos são adicionados com `sequelize.addModels([CustomerModel, ProductModel])` e depois sincronizados com `sequelize.sync()`.

Se você criar outro ponto de entrada, teste ou script que use `ProductRepository` diretamente, lembre de:

1. criar a instância de `Sequelize`;
2. registrar `ProductModel` com `addModels`;
3. executar `sync()` antes de chamar `ProductModel.create`, `findOne`, `findAll` ou `update`.

## Para estudo

- Compare as entidades de domínio em `src/domain` com as implementações de infraestrutura em `src/infrastructure`.
- Observe como os casos de uso recebem repositórios por injeção de dependência.
- Veja como os testes de integração e e2e inicializam o banco em memória antes de executar as rotas.

## Contribuição

Este repositório é destinado a estudo pessoal. Melhorias didáticas são bem-vindas.

## Licença

Uso pessoal e educativo. Consulte o autor antes de qualquer uso comercial.
