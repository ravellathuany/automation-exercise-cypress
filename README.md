# Automation Exercise - Cypress

Trabalho de conclusão da disciplina de Automação de Testes na Camada de Interface (Web).

Testes automatizados dos casos 1, 2, 3, 4, 5, 8, 9, 10, 15 e 16 da página [Test Cases](https://automationexercise.com/test_cases) do [Automation Exercise](https://automationexercise.com), usando Cypress.

## Como executar

```bash
npm install
npm run cy:open         # modo interativo
npm run test:trabalho   # modo headless
```

O relatório HTML é gerado em `cypress/reports/index.html`.

## Organização

- `cypress/e2e/trabalho-final.cy.js`: cenários do trabalho
- `cypress/modules`: ações e validações separadas por página/componente
- `cypress/fixtures`: dados dos produtos e geradores de dados com faker

## CI

Os testes rodam no GitHub Actions a cada push na `main` ou manualmente pela aba Actions. O relatório fica disponível no artifact `relatorio-cypress`.
