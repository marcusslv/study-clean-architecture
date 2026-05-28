 # FC Clean Architecture — Estudo

 Projeto criado para estudo e prática de Clean Architecture em Node.js/TypeScript.

 ## Objetivo

 O repositório demonstra, de forma didática, como separar domínio, casos de uso e infraestrutura em uma aplicação com Express, Sequelize e Jest. Serve como referência de estrutura para aprendizado e experimentação.

 ## Status

 - Estado: estudo / exemplo

 ## Requisitos

 - Node.js (>= 14)
 - npm

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

 ## Scripts (em `package.json`)

 - `npm test` — verifica TypeScript e executa a suíte de testes (`npm run tsc -- --noEmit && jest`).
 - `npm run tsc` — roda apenas o compilador TypeScript (`tsc`).
 - `npm run dev` — inicia a aplicação com `nodemon` (`nodemon src/infrastructure/api/server.ts`).

 ## Como executar (local)

 1. Instale as dependências:

 ```bash
 npm install
 ```

 2. Rode os testes:

 ```bash
 npm test
 ```

 3. Inicie a aplicação em modo desenvolvimento (usa `PORT` da env ou 3000 por padrão):

 ```bash
 npm run dev
 ```

 ## Inicialização da API

 A aplicação lê `PORT` de `process.env` (veja `src/infrastructure/api/server.ts`). Os modelos do Sequelize são registrados em `src/infrastructure/api/express.ts` com `sequelize.addModels(...)` e sincronizados com `sequelize.sync()`.

 ## Rotas principais (exemplos)

 - `POST /customer` — cria um cliente.
 - `GET /customer` — lista clientes.
 - `POST /product` — cria um produto.
 - `GET /product` — lista produtos.

 Exemplo rápido (curl):

 ```bash
 curl -X POST http://localhost:3000/customer \
	 -H "Content-Type: application/json" \
	 -d '{"name":"João","address":{"street":"Rua A","number":1,"zip":"00000","city":"Cidade"}}'
```

 ```bash
 curl http://localhost:3000/customer
 ```

 ## Observação sobre Sequelize

 O erro `ModelNotInitializedError` ocorre quando um Model é usado antes de ser adicionado a uma instância do Sequelize. Se for criar um novo ponto de entrada (script, teste ou utilitário) que use os Models, lembre-se de:

 1. criar a instância de `Sequelize`;
 2. adicionar os Models com `sequelize.addModels([...])`;
 3. chamar `sequelize.sync()` antes de operar nos Models.

 ## Dicas para estudo

 - Compare as entidades de domínio em `src/domain` com as implementações de infraestrutura em `src/infrastructure`.
 - Observe como os casos de uso recebem repositórios por injeção de dependência.
 - Veja os testes unitários e de integração para exemplos de uso.

 ## Contribuição

 Este repositório é destinado a estudo pessoal. Melhorias didáticas são bem-vindas — abra uma issue ou PR com explicações claras.

 ## Licença

 Uso pessoal e educativo. Consulte o autor antes de qualquer uso comercial.
