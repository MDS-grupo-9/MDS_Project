## Histórico de Versões

| Data       | Versão | Descrição                         | Autor             |
| :--------: | :----: | :----------:                      | :---------------: |
| 06/05/2023 |  0.1   | Criação do documento do análise-de-requisitos  | [Joel Soares](https://github.com/JoelSRangel)|
| 07/05/2023 |  0.2   | Adição de alguns requisitos  | [Lucas Soares](https://github.com/soaresrlucas)|
| 18/05/2023 |  0.3   | Revisão + complementação do texto    | [Joel Soares](https://github.com/JoelSRangel)|

# Análise de Requisitos

A análise de requisitos é um processo de gestão de projeto que abrange dois grandes grupos de atividades:

- **Engenharia de requisitos:** todas as atividades realizadas para identificar, analisar, especificar e definir as necessidades de negócio que um aplicativo deve prover para solução do problema levantado. Requisitos que não refletem as reais necessidades dos usuários, incompletos e/ou inconsistentes, mudanças em requisitos que já foram previamente acordados e a dificuldade para chegar a um acordo entre profissionais de T.I. e usuários são os maiores problemas enfrentados no grupo de atividades de especificação de requisitos.

- **Gestão de requisitos:** preocupa-se com a documentação, versionamento, controle de mudanças e qualidade dos requisitos levantados na fase de Material com direitos auto especificação de requisitos. Todo requisito apresenta um ciclo de vida único que acompanha a dinâmica dos negócios associados. Assim sendo, não se pode esperar que um requisito seja imutável ao longo do tempo, uma vez que o negócio do qual o requisito se desprende é dinâmico.

Além disso, formou-se a percepção de que os processos de desenvolvimento de software precisam submeter-se a mudanças e refinamentos contínuos para que aumentem sua capacidade de lidar com requisitos e expectativas de todos os stakeholders (partes interessadas). Portanto, esse projeto sempre estará sujeito à eventuais mudanças em seu escopo.


## O que são requisitos?

Os requisitos expressam as características e restrições do produto de software, do ponto de vista de satisfação das necessidades do usuário e, em geral, independem da tecnologia empregada na construção da solução.

**Requisitos são objetivos ou restrições estabelecidas por clientes e usuários do sistema que definem as diversas propriedades do sistema.** Um conjunto de requisitos pode ser definido como uma condição ou capacidade necessária que o software deve possuir para que o usuário possa resolver um problema ou atingir um objetivo ou para atender as necessidades ou restriçoes da organização ou dos outros componentes do sistema.

## Tipos de requisitos

Há, atualmente, diversas métodos de classificação de requisitos que se pode encontrar através de pesquisas. Com isso em vista, essa equipe decidiu trabalhar com a seguinte classificação de requisitos:

- **Requisitos Funcionais:** requisitos responsáveis por descrever o comportamento do sistema, em outras palavras, descreve tudo o que tem que ser feito pelo sistema, tato suas ações para cada entrada, como o que deverá conter em suas saídas.
- **Requisitos Não Funcionais:** são responsáveis por expressar **como** que cada funcionalidade deverá ser feita. Em geral, se relacionam com padrões de qualidade como confiabilidade, perfomance, robustez, etc.

## Prioridades

 Para estabelecer a prioridade dos requisitos serão adotadas as denominações "essencial", "importante" e "desejável", tal que:
 
- **Essencial**: é o requisito sem o qual o sistema não entra em funcionamento. Requisitos essenciais são aqueles imprescindíveis, que devem ser implementados impreterivelmente.
- **Importante**: é o requisito sem o qual o sistema entra em funcionamento, mas de forma não satisfatória. 
- **Desejável**: é o requisito que não compromete as funcionalidades básicas do sistema, isto é, o sistema pode funcionar de forma satisfatória sem ele. Requisitos desejáveis podem ser deixados para versões posteriores do sistema, caso não haja tempo hábil para implementação dos mesmos nesta etapa.

# Requisitos do projeto

## Requisitos Funcionais

| Identificador                 | Requisito                                                                   | Prioridade |
| :---------------------------- | :-------------------------------------------------------------------------- |  :-------- |
| RF01                          | O software de fazer o mapeamento do perfil sócio-econômico da população do DF |Essencial |
| RF02                          | O software deve ser disponibilizado para o acesso de qualquer pessoa interessada | Essencial|
| RF03                          | O software deve conter os créditos dos desenvolvedores e auxiliadores na aba "Quem somos" e "Professores"  |Importante|
| RF04                          | A aplicação deverá possuir mais de uma pãgina para que o usuário possa navegar          |Importante|
| RF05                          | O software deverá disponibilizar na aba "Na mídia" conteúdos midiáticos da equipe |Desejável|
| RF06                          | O software deverá ter um banco de dados |Essencial |
| RF07                          | O software deverá ter uma aplicação de interface na web |Essencial |

## Requisitos Não Funcionais

| Identificador                 | Requisito                                                            | Prioridade |
| :---------------------------- | :------------------------------------------------------------------- |  :-------- |
| RNF01                         | O software deve ter pleno funcionamento em dispositivos desktop      |Essencial|
| RNF02                         | O visual do software deve ser baseado no símbolo da UnB              |Importante|
| RNF03                         | A aplicação deverá apresentar botões que guiarão o usuário por ela          |Essencial|
| RNF04                         | O software deverá permitir que o usuário saiba a origem dos dados         |Desejável|
| RNF05                         | O software deve ser capaz de gerar gráficos a partir dos bancos de dados    |Essencial |
| RNF06                         | Os gráficos devem possuir a variação dos dados em relação ao tempo          |Importante|
| RNF07                         | A aplicação deverá possuir           |Importante|
| RNF08                         | Os gráficos devem ter fácil compreensão                                     |Desejável|

> Os requisitos estão ligados à um projeto dinâmico, podendo ser alterados conforme sujam novas necessidades
