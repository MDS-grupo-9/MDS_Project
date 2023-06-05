## Histórico de Versões

| Data       | Versão | Descrição                         | Autor             |
| :--------: | :----: | :----------:                      | :---------------: |
| 16/05/2023 |  0.1   | Criação do documento do Backlog   | [Matheus Barros do Nascimento](https://github.com/Ninja-Haiyai)|
| 18/05/2023 |  0.2   | Revisão + correção ortográfica    | [Joel Soares Rangel](https://github.com/JoelSRangel)|
| 18/05/2023 |  0.3   | Reformulação do documento         | [Lucas Soares RRodrigues](https://github.com/soaresrlucas)|

# 1. Introdução

### 1.1 Prioridades

 Para estabelecer a prioridade dos requisitos serão adotadas as denominações "essencial", "importante" e "desejável", tal que:
 
- **Essencial**: é o requisito sem o qual o sistema não entra em funcionamento. Requisitos essenciais são aqueles imprescindíveis, que devem ser implementados impreterivelmente.
- **Importante**: é o requisito sem o qual o sistema entra em funcionamento, mas de forma não satisfatória. 
- **Desejável**: é o requisito que não compromete as funcionalidades básicas do sistema, isto é, o sistema pode funcionar de forma satisfatória sem ele. Requisitos desejáveis podem ser deixados para versões posteriores do sistema, caso não haja tempo hábil para implementação dos mesmos nesta etapa.

### 1.2 Abreviações e seus significados

| Abreviação | Significado |
| ---------- | ----------- |
| EP | Epics |
| FT | Features |
| US | User Stories |

### 1.3 Termos importantes

| Termo | Definição |
| ----- | --------- |
| Epics | Epics são descrições gerais do que se deseja no software |
| Features |  Features são semelhantes a Epics, porém são mais detalhadas em relação ao que é função |
| User Stories |  User Stories são exemplos de usuários que irão utilizar a função de uma feature em questão |

# Backlog

## EP01: Gráficos

Essa epic é a respeito da exibição dos gráficos do projeto.

### FT01: Exibição

|ID|User Story|Prioridade|
|----------|-----------|---------|
|US01|Eu, como usuário, desejo visualizar pelo menos um gráfico |Essencial|
|US02|Eu, como usuário, desejo conseguir ler a legenda de cada gráfico |Essencial|
|US03|Eu, como usuário, desejo ver a variação dos dados em relação ao tempo |Essencial|
|US04|Eu, como usuário, desejo dar zoom no gráfico |Desejável|
|US05|Eu, como usuário, desejo navegar pelo gráfico |Desejável|

### FT02: Banco de dados

|ID|User Story|Prioridade|
|----------|-----------|---------|
|US06|Eu, como usuário, gostaria de de ver dados atualizados |Desejável|
|US07|Eu, como colaborador, desejo ser capaz de atualizar o banco de dados |Desejável|

### FT03: Filtros

|ID|User Story|Prioridade|
|----------|-----------|---------|
|US08|Eu, como usuário, desejo poder visualizar os dados de apenas uma RA |Importante|
|US09|Eu, como usuário, desejo poder visualizar o gráfico de apenas uma tipo de dados |Importante|

## EP02: Site

Essa epic é a respeito do site como um todo.

### FT04: Navegação e conteúdo

|ID|User Story|Prioridade|
|----------|-----------|---------|
|US10|Eu, como usuário, desejo não precisar baixar/instalar nada para ter acesso aos gráficos |Essencial|
|US11|Eu, como usuário, desejo que as páginas do site carreguem rápido |Desejável|
|US12|Eu, como colaborador, desejo que o site me dê os créditos do projeto |Desejável|
|US13|Eu, como usuário, desejo que o site seja bonito |Desejável|
