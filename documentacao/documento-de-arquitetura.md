# Arquitetura do Observatório de Energia

## Visão Geral
Este documento foi dividido em tópicos para faciliar a leitura e detalhar as características arquiteturais do projeto, bem como seus requisitos e motivações:

||Tópico|Descrição|
|-|------|---------|
|1|Histórico de Versões|Fornece ao leitor informações quanto às alterações deste documento|
|2|Introdução|Apresenta o objetivo, o escopo e informações úteis para a leitura do documento|
|3|Arquitetura|Detalha a arquitetura e a organização utilizada no projeto|
|4|Tecnologias|Descreve as tecnologias utilizadas bem com sua função no projeto|
|5|Metas e Restrições|Descreve os objetivos do projeto, bem como suas restrições, do ponto de vista arquitetural|

## 1. Histórico de Versões

  | Data | Versão | Alteração | Autor |  
  | ---- | ------ | --------- | ----- |  
  | 02/05/2023 | 0.1 | Protótipo de arquitetura | [Yves Pimenta](https://github.com/Yvestxt) |
  | 18/05/2023 | 0.2 | Correção e detalhamento da arquitetura | [Yves Pimenta](https://github.com/Yvestxt) |
  | 18/05/2023 | 0.3 | Revisão + correção ortográfica | [Lucas Soares](https://github.com/soaresrlucas) |
  | 21/06/2023 | 0.4 | Reescritura do documento, adaptando as tecnologias | [Joel Soares](https://github.com/JoelSRangel) |
  
## 2. Introdução
### Objetivo
O objetivo deste documento é apresentar a arquitetura do Observatório de Energia, de maneira a facilitar o entendimento e a estrutura arquitetural do projeto.

### Escopo
Este documento engloba as interações e funções de cada parte relacional do projeto. Apresentando as tecnologias utilizadas, além de um diagrama de relações e um de casos de uso.
O projeto está sendo desenvolvido por alunos da UnB-FGA, na disciplina MDS.
  
### Abreviações

|Sigla|Significado|
|-----|-----------|
|FGA|Faculdade do Gama|
|UI|Interface de usuário|
|RA| Região Administrativa|
|UnB|Universidade de Brasília|
|GDF|Governo do Distrito Federal|
|MDS|Métodos de Desenvolvimento de Software|
|PDAD|Pesquisa Distrital por Amostra de Domicílios|
  
## 3. Arquitetura
![Screenshot-Arquitetura](~/diagrama_observatorio.png)
>Representação arquitetural do site

Ao entrar no site Observatório de Energia, o usuário passará por um ciclo que envolve várias etapas. A seguir o passo a passo, destacando as tecnologias utilizadas e a função delas em cada etapa:

### Frontend
O frontend do Observatório de Energia é feito em Python utilizando a biblioteca Streamlit. 
- Acesso ao site: O usuário acessa o site por meio de um navegador.
- Interface de usuário: Assim que o usuário acessa o site, ele é recebido pela interface de usuário. A UI fornece uma experiência intuitiva e amigável, permitindo que o usuário navegue facilmente pelas funcionalidades disponíveis.
- Exploração dos dados: Através da interface, o usuário pode explorar os dados sobre o consumo de energia em Brasília. Utilizando recursos como caixas de seleção, barras de rolagem e botões, o usuário pode filtrar os dados de acordo com suas preferências.

### Backend
O backend do Observatório de Energia é responsável por coletar os dados públicos fornecidos pelo GDF. 
- Coleta de dados: Para a coleta e manipulação desses dados, a biblioteca Pandas é utilizada.
- Manipulação de dados: Após a coleta dos dados, o backend utiliza a biblioteca Pandas para processar e analisar as informações. Essa etapa envolve a manipulação dos dados, como filtragem, agregação e cálculos estatísticos, para obter insights relevantes sobre o perfil socioeconômico e o consumo de energia no Brasil.
- Geração de gráficos: Com base nos dados processados, o backend utiliza a biblioteca Matplotlib para gerar os gráficos informativos sobre o consumo de energia.
  
>Observação: Os dados utilizados não requerem atualização constante e são relativamente leves, portanto são carregados em memória e podem ser manualmente atualizados, caso haja demanda. 
  
## 4. Tecnologias
### ReactJS

- O ReactJS é uma biblioteca JavaScript de código aberto que permite aos desenvolvedores criar interfaces de usuário eficientes e reutilizáveis, facilitando o desenvolvimento de aplicativos web modernos e responsivos.
- Sua principal função, neste projeto, é fornecer uma interface de usuário interativa para os usuários explorarem e visualizarem o site e os dados relacionados ao consumo de energia no Distrito Federal.

### HTML

- HTML (HyperText Markup Language) é a linguagem de marcação padrão que permite que os desenvolvedores estruturem o conteúdo de uma página web usando uma variedade de elementos, como cabeçalhos, parágrafos, listas, imagens e links.

### CSS

- CSS (Cascading Style Sheets) é uma linguagem de estilo utilizada para descrever a aparência e o layout de elementos em uma página web.
- O CSS permite que os desenvolvedores personalizem a aparência dos elementos HTML, controlando propriedades como cor, tamanho, fonte e espaçamento.

### DanfoJS

- Danfo.js é uma biblioteca JavaScript de código aberto que oferece funcionalidades para manipulação e análise de dados tabulares de forma intuitiva e eficiente.
- Sua principal função, neste projeto, é processar e analisar os dados coletados do GDF sobre o consumo de energia no Distrito Federal.
- A biblioteca fornece uma variedade de métodos e funções para selecionar, filtrar, ordenar e agrupar dados, facilitando a realização de tarefas comuns de manipulação de dados.
- Permite calcular estatísticas descritivas, aplicar funções matemáticas, realizar agregações, lidar com valores ausentes e criar visualizações simples diretamente da biblioteca.
  
### ChartJS

- Chart.js é uma biblioteca JavaScript de código aberto que permite a criação de gráficos interativos e responsivos em páginas web.
- Sua principal função, neste projeto, é gerar os gráficos relacionados ao consumo de energia no Distrito Federal, com base nos dados analisados pela biblioteca DandoJS.
  
### JavaScript

  - JavaScript é uma linguagem de programação de alto nível, interpretada e orientada a objetos, amplamente utilizada no desenvolvimento web.
  - Sua principal função, neste projeto, é de implementação de todo o sistema.
  
## 5. Metas e Restrições
### Metas
- Criar um site que ofereça informações e análises relevantes sobre o consumo de energia no Distrito Federal, com o objetivo de fornecer conhecimento e insights para estudantes de engenharia de energia, bem como para o público em geral.
  - Isso permite que os usuários do site entendam os impactos do consumo de energia em diferentes regiões, ajudando a população a se manter informada sobre a eficiência energética e a sustentabilidade.
  - Através da coleta e análise de dados do GDF, o projeto visa gerar um perfil socioeconômico do consumo de energia, destacando quais RAs têm maior demanda e consumo.

- Promover tomada de decisões.
  - Os dados e gráficos fornecidos pelo site podem ser utilizados por profissionais e tomadores de decisão em áreas relacionadas à energia, permitindo uma melhor compreensão do cenário energético do Brasil e auxiliando na formulação de políticas e estratégias.

### Restrições
- Os usuários necessitam de acesso à internet.
- O projeto depende da disponibilidade e atualização dos dados fornecidos pelo governo.
- O projeto é útil apenas no Distrito Federal.
- Compatibilidade do navegador utilizado pelo usuário.
