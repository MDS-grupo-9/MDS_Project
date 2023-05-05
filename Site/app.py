import numpy as np
import pandas as pd
import streamlit as st

#       ANÁLISES NECESSÁRIAS
#       1. PERFIL SOCIO ECONOMICO POR RA
#       2. PERFIL DO TRABALHADOR DO DF POR RA
#       3. PERFIL DA POPULAÇÃO QUE UTILIZA SERVIÇOS DE SAUDE POR RA
#       4. PERFIL DA POPULAÇÃO QUE TEM ACESSO A INTERNET POR RA

# IMPORTANDO DADOS
Bens_Duraveis_DF = pd.read_excel('C:/Users/yvesg/Documents/GitHub/MDS_Project/Site/bens-duraveis.xlsx')

# ---------------------------------------------------------------------------- HEADER ---------------------------------------------------------------------------- # 

st.title("OBSERVATÓRIO DE ENERGIA")
st.subheader("Olá, nós somos o grupo 9 :wave:")

# ---------------------------------------------------------------------------- MAIN ---------------------------------------------------------------------------- # 
    # ------------------- SOBRE ------------------- # 

st.header("SOBRE O OBSERVATORIO DE ENERGIA")
st.write("O Brasil é um país de dimensões continentais, o Distrito Federal constitui uma das unidades da federação criada nos idos dos anos 60. Dentro desse contexto, a caracterização dessa população que mora e que veio de diversas partes do Brasil é crucial, de modo que se possa, a partir de um mapeamento do consumo de energia por estrato de renda, Região Administrativa, tipo de equipamento.")
st.write("Esse observatório de energia auxiliará na construção de políticas públicas de energia voltadas para o Distrito Federal futuramente.")

    # ------------------- NOSSO TRABALHO ------------------- # 

st.header("NOSSO TRABALHO")
st.write("A realização de mapeamento do consumo de energia da população do Distrito Federal revela diversos traços do perfil socioeconômico além de sinalizar as áreas em que a iniciativa pública e privada têm no que tange a oportunidades de atuação.")
st.write("O projeto é iniciativa da Professora Paula Meyer -- Economista da Universidade de Brasília, em conjunto com os alunos da Faculdade do Gama-FGA.")

    # ------------------- EQUIPE ------------------- # 

st.header("EQUIPE")

## INSERIR FOTOS AQUI ##

    # ------------------- NA MÍDIA ------------------- # 

st.header("NA MÍDIA")

## PLOTAR GRÁFICO

    # ------------------- RELATÓRIOS TÉCNICOS ------------------- # 
 
## TBD -- TO BE DEFINED

# ---------------------------------------------------------------------------- FOOTER ---------------------------------------------------------------------------- # 
