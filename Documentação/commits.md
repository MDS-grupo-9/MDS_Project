---
tag: "politicas"
---
Padronização dos commits no projeto. 

## Histórico de Versões


| Data       | Versão | Descrição                      | Autor             |
| :--------: | :----: | :----------:                   | :---------------: |
| 11/05/2023 |  0.1   | Criação da política de commits | [Lucas Soares](https://github.com/soaresrlucas)|


## Semântica do Commit

Os commits devem seguir o seguinte padrão:

### Princípios:

#### Commits atômicos
Sempre dividir em pequenos e significativos commits, fazendo com que cada commit tenha apenas uma funcionalidade.

#### Commits em português
Por ser um projeto voltado totalmente para um público brasileiro e por toda equipe ter mais afinidade com o português, foi decidido que todos os commits serão em pt-BR.

### Formato:
```
<tipo>(#número da issue): assunto
```

#### Tipos:
- :bulb: quando adicionar nova funcionalidade
- :repeat: quando alguma alteração for feita
- :cool: quando melhorias de formato/estrutura do código
- :racehorse: quando melhorar o desempenho
- :pencil: quando escrever documentação
- :bug: quando consertar um problema
- :fire: quando remover código ou arquivos

#### Assunto:
- Deve possuir no máximo 50 caracteres
- Devem estar em letras minúsculas

*Exemplo de commit:*
```
git commit -m ":bulb:(#02): botão na página inicial"
```

## Referências

DARTORA, João. Tudo o que você precisa saber sobre commits semânticos. *Ilegra*. Disponível em: <https://ilegra.com/blog/tudo-o-que-voce-precisa-saber-sobre-commits-semanticos/>. Acesso em: 11 de mai. de 2023.

Políticas de Commit. Disponível em: <https://fga-eps-mds.github.io/2020.1-Grupo6/policies/commits/>. Acesso em: 11 de mai. de 2023