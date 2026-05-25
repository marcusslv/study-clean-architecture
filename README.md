# FC Clean Architecture — Estudo

**Propósito:** projeto criado unicamente para estudo e prática de Clean Architecture.

**Descrição:**
Este repositório implementa exemplos e casos de uso organizados segundo princípios de Clean Architecture (camadas de domínio, casos de uso, infraestrutura e apresentação). O objetivo é didático: ilustrar como estruturar código, separar responsabilidades e escrever testes em uma aplicação Node.js/TypeScript.

**Estrutura principal:**
- `src/`: código-fonte
  - `domain/`: entidades, value objects, casos de uso e regras de negócio
  - `infrastructure/`: integração com frameworks, adaptadores e implementações de repositório
  - `usecase/`: casos de uso (aplicação)
  - `integration` / `__tests__`: testes de integração / e2e (quando existentes)

**Tecnologias:**
- TypeScript
- Node.js
- Jest (testes)

**Como usar (rápido):**
1. Instale dependências:

```
npm install
```

2. Executar testes:

```
npm test
```

3. Rodar a aplicação (se aplicável):

```
npm run start
```

Observação: scripts no `package.json` podem variar; ajuste conforme necessário.

**O que procurar neste repositório (para estudo):**
- Separação clara entre entidades de domínio (`src/domain`) e adaptadores/infrastructure.
- Casos de uso implementados em `src/usecase` com DTOs e testes unitários.
- Uso de fábricas e testes de unidade para entidades e serviços.

**Contribuição:**
Este repositório é destinado a estudo pessoal. Sinta-se à vontade para abrir issues ou pull requests com melhorias didáticas.

**Licença:**
Uso pessoal / educativo. Consulte o autor para qualquer uso comercial.
