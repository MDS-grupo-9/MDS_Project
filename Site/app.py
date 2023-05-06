import numpy as np
import pandas as pd
import streamlit as st
import matplotlib.pyplot as plt

#       ANÁLISES NECESSÁRIAS
#       1. PERFIL SOCIO ECONOMICO POR RA
#       2. PERFIL DO TRABALHADOR DO DF POR RA
#       3. PERFIL DA POPULAÇÃO QUE UTILIZA SERVIÇOS DE SAUDE POR RA
#       4. PERFIL DA POPULAÇÃO QUE TEM ACESSO A INTERNET POR RA

# Gerador de gráfico teste --- Inventário de bens duráveis por região administrativa 
def GeraGraficoInventarioBens():
    # Ler arquivos Excel
    Inventario_Bens = pd.read_excel('Site/inventario-bens-duraveis.xlsx', thousands = '.') # lê arquivo excel

    regioes = Inventario_Bens['Local'][1:] # Armazena os locais
    bens = Inventario_Bens.columns[1::2] # Armazena os bens

    st.title('Inventário de bens por região administrativa')

    # Seleção de região
    regiaoSelecionada = st.selectbox('Selecione uma região:', regioes)

    #Obter posição da tabela da região
    indiceRegiao = regioes[regioes == regiaoSelecionada].index[0]

    # Armazena quantidade de pessoas que possuem/não possuem por região selecionada
    quantidadeSim = Inventario_Bens.iloc[indiceRegiao + 1:, 1::2]
    quantidadeNao = Inventario_Bens.iloc[indiceRegiao + 1:, 2::2]

    # Gráfico de barras agrupado
    fig, ax = plt.subplots()
    bar_width = 0.35
    index = np.arange(len(bens)) 
    colors = ['Green', 'Red'] # Cores para barras de "Possuem" e "Não possuem"

    bar1 = ax.bar(index, quantidadeSim.iloc[0], bar_width, label = 'Possuem', color = colors[0]) # Barra de quantas pessoas possuem
    bar2 = ax.bar(index + bar_width, quantidadeNao.iloc[0], bar_width, label = 'Não possuem', color = colors[1]) # Barra de quantas pessoas não possuem

    ax.set_ylabel('Quantidade de pessoas')
    ax.set_xticks(index + bar_width / 2)
    ax.set_xticklabels(bens, rotation = 45, fontsize = 4)
    ax.legend()

    st.pyplot(fig)

#   HEADER  # 
st.title("OBSERVATÓRIO DE ENERGIA")
st.subheader("Olá, nós somos o grupo 9 :wave:")

#   MAIN    # 
    #   SOBRE   # 
st.header("SOBRE O OBSERVATORIO DE ENERGIA")
st.write("O Brasil é um país de dimensões continentais, o Distrito Federal constitui uma das unidades da federação criada nos idos dos anos 60. Dentro desse contexto, a caracterização dessa população que mora e que veio de diversas partes do Brasil é crucial, de modo que se possa, a partir de um mapeamento do consumo de energia por estrato de renda, Região Administrativa, tipo de equipamento.")
st.write("Esse observatório de energia auxiliará na construção de políticas públicas de energia voltadas para o Distrito Federal futuramente.")

    #   NOSSO TRABALHO  # 
st.header("NOSSO TRABALHO")
st.write("A realização de mapeamento do consumo de energia da população do Distrito Federal revela diversos traços do perfil socioeconômico além de sinalizar as áreas em que a iniciativa pública e privada têm no que tange a oportunidades de atuação.")
st.write("O projeto é iniciativa da Professora Paula Meyer -- Economista da Universidade de Brasília, em conjunto com os alunos da Faculdade do Gama-FGA.")

    #   EQUIPE  # 
st.header("EQUIPE")
    ## INSERIR FOTOS AQUI ##

    #   NA MÍDIA    # 
st.header("NA MÍDIA")
    ## PLOTAR GRÁFICO ##
GeraGraficoInventarioBens()

    # RELATÓRIOS    #
st.header("RELATÓRIOS TÉCNICOS") 
 
    ## TBD -- TO BE DEFINED ##

#  FOOTER  # 


# FIM DA PÁGINA #
