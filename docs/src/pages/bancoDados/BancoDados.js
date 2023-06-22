import React from "react";
import "./BancoDados.css";
import { Link } from "react-router-dom";
import Header from "../../components/Header";
import Exemplo_grafico from '../../images/exemplo_grafico.png'

function BancoDados() {
    return(
        <>
            <Header/>
            <section className="dados_container">
                <h1>Banco de Dados</h1>
                <h2>Gráfico</h2>
                <img src={Exemplo_grafico}/>
            </section>
        </>
    );
}

export default BancoDados;