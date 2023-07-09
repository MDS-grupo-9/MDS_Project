import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import Header from '../../components/Header'
import Popup from '../../components/Popup';
import { useState } from 'react';
import Fga_foto from '../../images/fga_foto.png'
import Paula_foto from '../../images/paula_foto.jpg'
import Carla_foto from '../../images/carla_foto.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css';

function Home() {
    AOS.init();
    const [buttonPopup, setButtonPopup] = useState(false);

    return(
        <>
            <main>
                <Header/>
                <div id="body"></div>
                <section className="titulo">
                <div className="nome_projeto" data-aos="zoom-in">
                    <h1>Observatório de Energia</h1>
                    <h2>Analisando dados de energia desde 2023</h2>
                </div>
                </section>
                <div className="sobre">
                    <h3 data-aos="fade-right">Sobre o Observatório</h3>
                    <p data-aos="fade-right"> &ensp; O Observatório de Energia é um projeto realizado por estudantes da Universidade de Brasília que visa mapear o consumo de energia dentro do Distrito Federeal em cada uma de suas Regiões Administrativas. Nestre tabalho, estará sendo utilizado uma base de dados obtidos pela Pesquisa Distrital por Amostra de Domicílios (PDAD), que está disponibilizada pela CODEPLAN.<br/>
                    <br/>
                    &ensp; O objetivo de nosso projeto é fazer análises detalhadas e apresentar os dados por meio de gráficos, mapas e tabelas interativas, para que entidades públicas e pessoas físicas que possuem interesse neste estudo possam utilizar da informação disponibilizada para seus próprios fins.
                    </p>
                    <button onClick={() => setButtonPopup(true)} data-aos="zoom-in">Saiba mais</button>
                    
                </div>
                <div id="quem_somos" className="quem_somos">
                    <h3 data-aos="fade-left">Quem somos:</h3>
                    <img src={Fga_foto} alt="foto FGA" width="620px" data-aos="fade-left"/>
                    <p data-aos="fade-left">Nós somos estudantes de Engenharia de Software da Faculdade do Gama da Universidade de Brasília (UnB - FGA) cursando a disciplina Métodos de Desenvolvimento de Software.<br/>
                        <br/>
                        Realizamos a confecção desse projeto em conjunto com a professora Carla Silva Rocha Aguiar e a professora e economista Paula Meyer Soares, que se responsabilizaram em fornecer avaliação e suporte ao trabalho.<br/>
                        <br/>
                        A FGA é uma das Faculdades da UnB onde está centralizada os cursos de graduação das engenharias especializadas, além de ter cursos de pós-graduação e diversas outras atividades dentro de seu espaço.</p>
                    <a href="https://fga.unb.br/guia-fga/sobre">Saiba mais sobre a FGA</a>
                </div>
            
                <div className="desenvolvedores" data-aos="fade-up">
                    <h3>Desenvolvedores:</h3>
                    <div className="imagens">
                    <div>
                        <a href="https://github.com/JoelSRangel"><img 
                            src="https://avatars.githubusercontent.com/u/98978800?v=4"
                            data-name="Joel Soares Rangel"/></a>
                        <span>Joel Soares</span>
                    </div>
                    <div>
                        <a href="https://github.com/soaresrlucas"><img
                            src="https://avatars.githubusercontent.com/u/89469881?s=400&u=39c9984d990a31e638e33157ee4ec2ca01ce8a4a&v=4"
                            data-name="Lucas Soares Rodrigues"/></a>
                        <span>Lucas Soares</span>
                    </div>
                    <div>
                        <a href="https://github.com/DaviPierre"><img 
                            src="https://avatars.githubusercontent.com/u/73446334?v=4" 
                            data-name="Davi Gonçalves Akegawa Pierre"/></a>
                        <span>Davi Pierre</span>
                    </div>
                    <div>
                        <a href="https://github.com/Yvestxt"><img 
                            src="https://avatars.githubusercontent.com/u/73966483?v=4" 
                            data-name="Yves Gustavo Ribeiro Pimenta"/></a>
                        <span>Yves Ribeiro Pimenta</span>
                    </div>
                    <div>
                        <a href="https://github.com/Ninja-Haiyai"><img 
                            src="https://avatars.githubusercontent.com/u/73038704?v=4" 
                            data-name="Matheus Barros do Nascimento"/></a>
                        <span>Matheus Barros </span>
                    </div>
                </div>
                </div>

                <div id="prof" className="prof" data-aos="fade-up">
                    <h3>Esse projeto se fez possível graças à colaboração das professoras:</h3>
                    <div>
                        <img src={Paula_foto}/>
                        <a href="https://buscatextual.cnpq.br/buscatextual/visualizacv.do?id=K4745835T3&tokenCaptchar=03AAYGu2Q8qUr6WUQRmmIT-ndoYJLTSxzOxDHjnIHAZNsdNLpcSeHHLiX-oiF9Bgjf0B1oA5JTEzqRxSfwNW9pqCkMSkdXcSmOafVgnKTaRNzvkYFUB4d6tlb3pBTpACPUEcBYiXnZTs7gIJ3qt_MqFpD_RZvPryb6M1jk8Hv-PgHHsDqpk63cjjsd3H9SC_dvA_fBdZUnYtWiYxkSozrrUFqWD83GQQ0IRuNmhY11dIhR5K_KtzDZwbpytt2b6FVND7TsBTKOMLtC-KgiHlf5qTH_2GlsxqMmELH7iN0WWEdmgGGrT3SLLLPtE5PvaTg00QCB4wut_Vfe74BU8wcJNv_cPR0IxAMmxW1CTvBVfSE3fMt7nqPt8IvtYJWpqdp-FcGf25BA2tjIA5DPSPZbOkYA5Hlq8poN6TvqkIHp2GUWJJmRE1xIcgGfqnfsVLHr7B08vGhjH5grrPV1WBJQ-UL-TWWKQQHo8zR6DEj9M3nMMBWPnchllna1XTHL0GzFFdNOkHQArzgt_FXhdm1TxVhkrLvhFAlqX75vt1uSdNk1oxgt52SXt2y8LMp7UYi452Gsc5XVgQqaurgx1oU_vXs3uv2108ghOu9PwVKN9h2EcwX5b_TAM6lQqNyh6C7PkJmSqjE1q9cJ"><p>Paula Meyer Soares </p></a>
                        <img src={Carla_foto}/>
                        <a href="https://buscatextual.cnpq.br/buscatextual/visualizacv.do?id=K4735688Z5&tokenCaptchar=03AAYGu2TlDjtNdpCd7sRQdVYMrAjxPCfIXlHfZ_T1gOybVPuC55CGtMgQ9TA5EGjAhLtoTCuyPrMijkPEmBZTZf7ptAVmErHzLv0ERcuazjnwZPsyVCmSQBYaLXkBqpLs7SCVKGJ4VLl_gpnTgmc68vEz0LAsVcAFIGyg9n0447-bI7SDbTxR1zVUy86meZH514U6mVn8e3wCa-eyEt1Z5ImBZYGevBMWCHUrO4nKh2JbDMWMrX4olhD4WlzTR_7y1hpYWqJFq256RtU8EM-bqiIgg282u2vFOtj7ss4NWWaxHqEEE0u1iTRopNVbxvD7SQV_WDO-EC9JVgc6V4wDz7Rbe0ahye80w3S_WtDq_vXq4UkVufxnNceQX3aEnrExIQCIMStB2cP4SQ9MOjBr7-99Luy022Fnv-c1fRVPpjQMtOB3SvnPrslswi2IgnpkisnZ2MOqPLSR5V83dnb0AsF0N8TTt-ytBXPeNm_NtqU46EAW-MMzvuYJ3nhhu4a80iDruZRZTDwi9YJvV9gGkKiWVkOuNngp9cezkDUg-a7FzMZwZw_AP0e1jeFBR1I-YOjT0b9N4_ilIF1e3uWtBd0jYpaEQ-7tPxHWDAD5pxZ0iH6K9JVEhXhJTdmlLjw-Ht-rbqCxKOVN"><p>Carla Silva Rocha Aguiar </p></a>
                    </div>
                </div>

                <footer>
                </footer>

            </main>
            <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
            <p>O Brasil é um país de dimensões continentais e o Distrito Federal constitui uma das unidades da federação
                    criada no início dos anos 60. Dentro desse contexto, a caracterização dessa população que mora e que
                    veio de diversas partes do Brasil é crucial de modo que se possa, a partir de um mapeamento do consumo
                    de energia por estrato de renda, região administrativa e tipo de equipamento, estudar as necessidades de
                    cada grupo e desenvolver políticas de acordo.</p>
                
                    <p>Dentro desse contexto, o Observatório de Energia foi pensado com a missão de fornecer dados precisos e
                    abrangentes sobre o consumo de energia, permitindo que os tomadores de decisão tenham uma visão mais
                    clara das necessidades e comportamentos de consumo de energia na região, a fim de desenvolver políticas
                    energéticas mais eficazes e direcionadas às necessidades da população. Para permitir que esse objetivo
                    seja alcançado, o projeto contará com os dados obtidos pela Codeplan em suas pesquisas.</p>
                
                    <p>A Codeplan é um órgão de planejamento, pesquisas e estudos socioeconômicos, cuja produção técnica
                    contribui para o planejamento integrado do Distrito Federal e sua região de influência, especialmente os
                    municípios que compõem a Região Integrada de Desenvolvimento do Distrito Federal e Entorno (RIDE) e a
                    Área Metropolitana de Brasília (AMB). Sua missão é produzir e disseminar informações, estudos e análises
                    econômicas, sociais, demográficas, cartográficas, georreferenciadas, urbanas, regionais e ambientais
                    sobre o Distrito Federal e sua área de influência; analisar e avaliar políticas públicas implementadas
                    pelo Governo do Distrito Federal.</p>
    
                <p>Suas principais pesquisas realizadas foram as: Pesquisa e Emprego e Desemprego (PED); Pesquisa Distrital
                    por Amostra de Domicílios (PDAD); Pesquisa Metropolitana por Amostra de Domicíios (PMAD); Produto
                    Interno Bruto do Distrito Federal (PIB/DF); e o Índice de Desempenho Econômico do Distrito Federal
                    (IDECON).</p>
    
                <p>No planejamento do Observatório de Energia, foi escolhido a utilização dos dados adquiridos pelo PDAD. A
                    PDAD é uma pesquisa domiciliar amostral realizada a cada dois anos pela Codeplan. Seu objetivo é
                    investigar informações demográficas, sociais, de trabalho e de renda, além de atributos dos domicílios.
                    A pesquisa representa mais de 97% da população brasiliense, visita todas as 33 Regiões Administrativas e
                    fornece um diagnóstico detalhado da situação de cada uma delas.</p>
            </Popup>
        </>
    );
}

export default Home;