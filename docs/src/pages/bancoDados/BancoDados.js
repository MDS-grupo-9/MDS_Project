import React, { useEffect, useRef, useState } from "react";
import "./BancoDados.css";
import { Link } from "react-router-dom";
import Header from "../../components/Header";
import * as gp from "../../graphics/trabalho";
import Chart from "chart.js";
import * as XLSX from "xlsx";

function BancoDados() {
  const [options, setOptions] = useState([]);
  const [showNewSelect, setShowNewSelect] = useState(false);
  const [showNewSelect2, setShowNewSelect2] = useState(false);
  const [showNewSelect3, setShowNewSelect3] = useState(false);
  const [showNewSelect4, setShowNewSelect4] = useState(false);

  useEffect(() => {
    const ctx = document.getElementById("grafico1").getContext("2d");
    const filePath = "/Pesquisa_Distrital_2021_DF.xlsx";
    gp.handleFile(filePath, ctx);
    loadOptions(filePath);
  }, []);

  const loadOptions = (filePath) => {
    fetch(filePath)
      .then((response) => response.arrayBuffer())
      .then((data) => {
        const workbook = XLSX.read(data, { type: "array" });
        const worksheet = workbook.Sheets[workbook.SheetNames[0]];

        // Converter a primeira coluna da primeira tabela em uma matriz de objetos JSON
        const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
        const columnA = jsonData.slice(1).map((row) => row[0]);

        setOptions(columnA);
      })
      .catch((error) => {
        console.error("Ocorreu um erro ao carregar o arquivo:", error);
      });
  };

  const handleChange = (event) => {
    const selectedValue = event.target.value;

    if (selectedValue === "1"){
        gp.handleFile2();
    }
    if (selectedValue === "2"){
        gp.handleFile3();
    }
    if (selectedValue === "3"){
        gp.handleFile4();
    }
    if (selectedValue === "4"){
        gp.handleFile5();
    }
    if (selectedValue === "5"){
        gp.handleFile6();
    }
    if (selectedValue === "6"){
        gp.handleFile7();
    }
    if (selectedValue === "7"){
        gp.handleFile8();
    }
    if (selectedValue === "8"){
        gp.handleFile9();
    }
    if (selectedValue === "9"){
        gp.handleFile10();
    }
    if (selectedValue === "10"){
        gp.handleFile11();
    }
    if (selectedValue === "11"){
        gp.handleFile12();
    }
    if (selectedValue === "12"){
        gp.handleFile13();
    }
    if (selectedValue === "13"){
        gp.handleFile14();
    }
    if (selectedValue === "14") {
        setShowNewSelect2(true);
      } else {
        setShowNewSelect2(false);
    }
    if (selectedValue === "15") {
        setShowNewSelect3(true);
      } else {
        setShowNewSelect3(false);
    }
    if (selectedValue === "16") {
        setShowNewSelect(true);
      } else {
        setShowNewSelect(false);
    }
    if (selectedValue === "17") {
        setShowNewSelect4(true);
      } else {
        setShowNewSelect4(false);
    }
  };

  const handleSecondSelectChange = (event) => {
    const secondSelectValue = event.target.value;
    const ctx = document.getElementById("grafico1").getContext("2d");
    gp.handleFile(secondSelectValue, ctx);
  };

  const handleThirdSelectChange = (event) => {
    const thirdSelectValue = event.target.value;
    const ctx = document.getElementById("grafico1").getContext("2d");
    gp.handleFile15(thirdSelectValue, ctx);
  };

  const handleFourthSelectChange = (event) => {
    const fourthSelectValue = event.target.value;
    const ctx = document.getElementById("grafico1").getContext("2d");
    gp.handleFile16(fourthSelectValue, ctx);
  };

  const handleFifthSelectChange = (event) => {
    const fifthSelectValue = event.target.value;
    const ctx = document.getElementById("grafico1").getContext("2d");
    gp.handleFile17(fifthSelectValue, ctx);
  };

  return (
    <>
      <Header />
      <section className="dados_container">
        <h1>Banco de Dados</h1>
        <select id="grafico" onChange={handleChange}>
          {options.map((option, index) => (
            <option key={index} value={index + 1}>
              {option}
            </option>
          ))}
        </select>

        {showNewSelect && (
          <select onChange={handleSecondSelectChange}>
            {/* Novo select específico para selectedValue igual a 1 */}
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
        )}

        {showNewSelect2 && (
          <select onChange={handleThirdSelectChange}>
            {/* Novo select específico para selectedValue igual a 1 */}
            <option value="1">Rede Geral (CAESB)</option>
            <option value="2">Poço/Cisterna</option>
            <option value="3">Poço artesiano</option>
            <option value="4">Captação de água da chuva</option>
            <option value="5">Gambiarra/ gato</option>
            <option value="6">Caixa d’água</option>
          </select>
        )}

        {showNewSelect3 && (
          <select onChange={handleFourthSelectChange}>
            {/* Novo select específico para selectedValue igual a 1 */}
            <option value="1">Automóvel</option>
            <option value="2">Motocicleta</option>
            <option value="3">Bicicleta</option>
          </select>
        )}

        {showNewSelect4 && (
          <select onChange={handleFifthSelectChange}>
            {/* Novo select específico para selectedValue igual a 1 */}
            <option value="1">Rede Geral (CEB/NEOENERGIA)</option>
            <option value="2">Próprio (gerador a combustível)</option>
            <option value="3">Próprio (gerador solar)</option>
            <option value="4">Outras fontes renováveis</option>
            <option value="5">Gambiarra/ gato</option>
          </select>
        )}

        <div>
          <canvas id="grafico1"></canvas>
        </div>
      </section>
    </>
  );
}

export default BancoDados;