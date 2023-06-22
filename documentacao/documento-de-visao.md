---
tag: "documentos"
---

## Histórico de Versões


| Data       | Versão | Descrição                      | Autor             |
| :--------: | :----: | :----------:                   | :---------------: |
| 08/05/2023 |  0.1   | Criação do documento de visão  | [Joel Soares](https://github.com/JoelSRangel)|
| 13/05/2023 |  0.2   | Revisão do documento + Adição/correção de informações | [Joel Soares](https://github.com/JoelSRangel)|
| 15/05/2023 |  0.3   | Completando a tabela de "Equipe de Desenvolvimento e Gestão do Projeto" | [Joel Soares](https://github.com/JoelSRangel)|
| 18/05/2023 |  0.4   | Completanto as informações da seção 2.2 | [Joel Soares](https://github.com/JoelSRangel)|
| 21/06/2023 |  0.5   | Corrigindo dados fora de validade | [Joel Soares](https://github.com/JoelSRangel)|



## **1. Introdução**

### 1.1 Finalidade do documento

O propósito deste texto é apresentar as particularidades da criação da aplicação mencionada e auxiliar no entendimento do contexto em que ela será utilizada. O foco deste artigo é descrever o problema a ser resolvido, identificar as partes interessadas e os perfis de usuário, contextualizar o campo de negócios em que a iniciativa será aplicada, bem como listar os recursos e especificações do sistema em questão.


### 1.2 Escopo do projeto

 O projeto a ser desenvolvido será uma aplicação web que realizará um mapeamento do consumo de energia da população do Distrito Federal a fim de revelar diversos traços do perfil socioeconômico da região, demonstrando os dados ao usuário através de gráficos e outros possíveis recursos estudados pela equipe.

### 1.3 Visão Geral

  A ideia principal deste documento de visão é fornecer de maneira objetiva e organizada os assuntos que tangem à problemática inicial.

## **2. Posicionamento**

### 2.1 Problema a ser resolvido

O problema que o produto (o observatório de energia) resolverá é a falta de informações detalhadas sobre o consumo de energia elétrica por estrato de renda, região administrativa e tipo de equipamento no Distrito Federal. Com essa falta de informação, é difícil para o governo e outras partes interessadas desenvolver políticas públicas de energia eficazes e orientadas por dados. O observatório de energia irá fornecer dados precisos e abrangentes sobre o consumo de energia, permitindo que os tomadores de decisão tenham uma visão mais clara das necessidades e comportamentos de consumo de energia na região, a fim de desenvolver políticas energéticas mais eficazes e direcionadas às necessidades da população.

### 2.2 Oportunidade de negócios

O Brasil é um país de dimensões continentais e o Distrito Federal constitui uma das unidades da federação criada no início dos anos 60. Dentro desse contexto, a caracterização dessa população que mora e que veio de diversas partes do Brasil é crucial de modo que se possa, a partir de um mapeamento do consumo de energia por estrato de renda, região administrativa e tipo de equipamento, estudar as necessidades de cada grupo e desenvolver políticas de acordo.

### 2.3 Descrição de Posição do Produto

Esse observatório de energia auxiliará na construção de políticas públicas de energia voltadas para o Distrito Federal futuramente.

## **3. Descrição dos Envolvidos e dos Usuários**

### 3.1 Resumo dos Envolvidos

| Nome                          | Descrição                                                            | Responsabilidade                                                                                                                        |
| :---------------------------- | :------------------------------------------------------------------- | :-------------------------------------------------------------------------------------------------------------------------------------- |
|Equipe de desenvolvimento e gestão | Estudantes do curso de Engenharia de Software do campus do Gama da UnB que estão realizando a disciplina de Métodos de Desenvolvimento de Software | Gerenciar e desenvolver todas as partes do projeto |

### 3.2 Resumo dos Usuários

| Nome            | Descrição                                                               | Responsabilidade                                                                             |
| :-------------- | :---------------------------------------------------------------------- | :------------------------------------------------------------------------------------------- |
|Pessoa Jurídica  | O usuário poderá estudar os dados apresentados em nossa aplicação a fim de utilizá-los na confecção de legislações públicas | Utilizar o sistema como referência e usufruir de suas funcionalidades|
|Pessoa Física  | O usuário poderá estudar os dados apresentados em nossa aplicação a fim de atender seus interesses pessoais ou aplicá-los no ramo acadêmico | Utilizar o sistema como referência e usufruir de suas funcionalidades |

### 3.3 Ambiente do Usuário

O usuário poderá interagir com o sistema através de uma apliação web.

### 3.4 Perfis dos Envolvidos

#### 3.4.1 Equipe avaliação e suporte

| Representantes    | Descrição                                                     | Tipo                                     | Responsabilidades                                                                                                                                                                                | Envolvimento |
| ----------------- | ------------------------------------------------------------- | ---------------------------------------- | --------------------------------------------------------- | ------------ |
| Profa. Carla | Equipe responsável pela avaliação e direcionamento do projeto | Professora e coach do grupo da disciplina | Direcionar e dar suporte a equipe de desenvolvimento e gestão, nas disciplinas Métodos de Desenvolvimento de Software e Engenharia de Produto de Software, quanto ao desenvolvimento do projeto |  Alto         |
| Profa. Paula Meyer |  Responsável por representar o usuário | Professora e Economista da Universidade de Brasília | Responsável por apresentar à equipe as necessidades do usuário | alto

#### 3.4.2 Equipe de Desenvolvimento e Gestão do Projeto

| Integrantes  | Papel |
| :--------------- | :---------------- |
|[Joel Soares Rangel](https://github.com/JoelSRangel)| Scrum Master|
|[Lucas Soares Rodrigues](https://github.com/soaresrlucas)| Product Owner |
|[Davi Gonçalves Akegawa Pierre](https://github.com/DaviPierre) |Desenvolvedor|
|[Matheus Barros do Nascimento](https://github.com/Ninja-Haiyai)  |Desenvolvedor|
|[Yves Gustavo Ribeiro Pimenta](https://github.com/Yvestxt) |Desenvolvedor|

### 3.5 Perfis dos Usuários

| Representante            | Descrição                                                               | Tipo                                                               | Responsabilidade                                                                             | Critério de sucesso                                                                             |
| :-------------- | :---------------------------------------------------------------------- | :------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------- |
| Pessoas Jurídicas interessadas na aplicação das informações | Entidades públicas que precisam do mapeamento sócio-econômico do DF e de suas RAs para o desenvolvimento de legislações públicas |Usuários buscando dados confiáveis |O usuário, além de utilizar o programa e usufruir de suas funcionalidades, deverá alertar possíveis falhas e problemas nos dados |A utilização desses dados na criação de legislações públicas e o reconhecimento do auxílio do Observatório de Energia|
| Pessoa física interessada por informações   |Pessoas que possuem interesse no estudo dos dados apresentados seja por questões pessoais ou para utilizá-los no ramo acadêmico | Usuários entusiastas ou do meio acadêmico |O usuário, além de utilizar o programa e usufruir de suas funcionalidades, deverá alertar possíveis falhas e problemas nos dados |O reconhecimento do auxílio do Observatório de Energia|

#### **3.6 Principais Necessidades dos Usuários ou dos Envolvidos**

##### 3.6.1 Necessidades dos envolvidos

| Necessidade            | Prioridade                                                               | Solução Atual                                                               | Solução Proposta                                                                             |
| :-------------- | :---------------------------------------------------------------------- | :------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------- |
| Automatização dos processos internos do projeto | Média | Bots nos meios de comunicação | Automatização de fácil aplicação e de alta praticidade para aumentar a produtividade da equipe|

#### **3.7 Alternativas e concorrências**

O observatório de energia foi pensado a partir de elementos apresentados em https://observadf.org.br/

## **4. Visão geral do Produto**

### 4.1 Perspectiva do Produto

O objetivo do produto é apresentar dados do PDAD, mapeando o perfil socio econômico do DF por RA, o perfil do trabalhador do DF por RA, perfil da população que utiliza serviços de saúde por RA e o perfil da população que tem acesso a internet por RA em formato de gráfico dashboard para o usuário, facilitando o acesso a esses dados.

### 4.2 Resumo das capacidades

O produto será capaz de atender as necessidades dos usuários que buscam acesso aos dados energético do Distrito Federal e suas Regiões Administrativas, apresentando de forma verossímil e auxiliando na construção de políticas públicas de energia voltadas para o Distrito Federal.

## **5. Recursos do Produto**

### 5.1 Informação

O observatório contará com um banco de dados obtidos através do PDAD que será representado ao usuário através de gráficos.

### 5.2 Interação

O observatório contará com uma interface feita através de uma aplicação web pelo a qual o usuário poderá interagir e acessar as informações.
