import React, { useEffect, useRef } from "react";
import "./BancoDados.css";
import { Link } from "react-router-dom";
import Header from "../../components/Header";
import { handleFile } from '../../graphics/trabalho';
import Chart from "chart.js";

function BancoDados() {

    useEffect(() => {
        const ctx = document.getElementById("grafico1").getContext("2d");
        const filePath = "/inventario-bens-duraveis.xlsx";
        handleFile(filePath, ctx);
      }, []);

      document.addEventListener('DOMContentLoaded', () => {
        const selectElement = document.getElementById('grafico');
      
        selectElement.addEventListener('change', (event) => {
          const selectedValue = event.target.value;
          handleFile(selectedValue);
        });
      });
    

    return(
        <>
            <Header/>
            <section className="dados_container">
                <h1>Banco de Dados</h1>
                <select id="grafico">
                    <option value="1">Fogão</option>
                    <option value="2">Microondas</option>
                    <option value="3">Geladeira de uma porta</option>
                    <option value="4">Geladeira de duas ou mais portas</option>
                    <option value="5">Freezer</option>
                    <option value="6">Máquina de lavar roupas</option>
                    <option value="7">Máquina de lavar e secar roupas</option>
                    <option value="8">Secadora de roupas</option>
                    <option value="9">Máquina de lavar louça</option>
                    <option value="10">Televisor tubo</option>
                    <option value="11">Televisor tela fina/plana</option>
                    <option value="12">DVD/BLU-RAY</option>
                    <option value="13">Microcomputadore/Desktop</option>
                    <option value="14">Notebook/Laptop </option>
                    <option value="15">Ar-condicionado </option>
                    <option value="16">Circulador e/ou ventiladores de ar</option>
                    <option value="17">Telefones fixos</option>
                    <option value="18">Placas de aquecedor solar</option>

                </select>
                <div>
                    <canvas id="grafico1"></canvas>
                </div>
            </section>
        </>
    );
}

export default BancoDados;