---
tag: "politicas"
---
Padronização das branches no projeto. 

## Histórico de Versões


| Data       | Versão | Descrição                      | Autor             |
| :--------: | :----: | :----------:                   | :---------------: |
| 11/05/2023 |  0.1   | Criação da política de branch | [Lucas Soares](https://github.com/soaresrlucas)|


## Padronização das Branches

### Prefixos:
- ```feature```
- ```hotfix```
- ```documentation```
- ```improvement```

### Formato:
```
<prefixo>/assunto/sprint<n° da sprint>
```

Não esquecer de dividir as palavras(sempre minúsculas) do assunto com "-".
Exemplo: 
```
feature/novo-menu/sprint02
```

### Branches:

- **Branch main:** Branch que contém o código em nível de produção, será o código mais consolidado existente na aplicação. Nenhum integrante dos times é autorizado a fazer commits diretamente na *main.*
- **Branches feature:** Como o nome já diz, são branches na qual são desenvolvidos novos recursos ao projeto. São criadas começando com o prefixo **feature/**.
Exemplo: ```feature/novo-layout/sprint03```
- **Branchs hotfix:** Branches no qual são realizadas correções de bugs São criadas começando com o prefixo **hotfix/**.
Exemplo: ```hotfix/correcao-botao/sprint02```
- **Branches documentation:** Branches na qual são desenvolvidos os documentos do projeto. São ciradas começando com o prefixo **documentation/**
Exemplo: ```documentation/template-documento/sprint03```
- **Branches improvement:** Branche para melhoria de algum componente e afins, seja de performance, de escrita de layout, etc. Exemplo: ```improvement/otimizacao-layout/sprint05```

### Princípios:
- Por ser um projeto voltado totalmente para um público brasileiro e por toda equipe ter mais afinidade com o português, foi decidido que todas as braches serão em pt-BR.
- As branches também fazem referência a Sprint no qual estão inclusas. Portanto, a cada Sprint, deve ser utilizadas novas branches.

## Referências

DULCETTI, Bruno. Padrões e nomenclaturas no Git. *BrunoDulcetti*. Disponível em: <https://www.brunodulcetti.com/padroes-e-nomenclaturas-no-git/>. Acesso em: 11 de mai. de 2023.

Políticas de Branches. Disponível em: <https://fga-eps-mds.github.io/2018.2-ComexStat/docs/politicaBranches>. Acesso em: 11 de mai. de 2023.

HADLER, Mikael. Utilizando o fluxo Git Flow. *Medium*. Disponível em: <https://medium.com/trainingcenter/utilizando-o-fluxo-git-flow-e63d5e0d5e04>. Acesso em: 11 de mai. de 2023.
