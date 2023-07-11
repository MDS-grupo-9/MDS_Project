import * as XLSX from 'xlsx';
import Chart from 'chart.js/auto';

//CÓDIGO EM JS
const ctx = document.getElementById('grafico1').getContext('2d');
const filePath = '/inventario-bens-duraveis.xlsx'; // Coloque o caminho do arquivo aqui
let chart = null;
let valor = 0;

function handleFile(selectedValue) {

  if (chart) {
    // Destrói o gráfico anterior se existir
    chart.destroy();
  }

  fetch(filePath)
    .then(response => response.arrayBuffer())
    .then(data => {
      const workbook = XLSX.read(data, { type: 'array' });

      const worksheet = workbook.Sheets['bens-duraveis'];

      // Converter a planilha em uma matriz de objetos JSON
      const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

      // Obter os valores das colunas A, D e E
      const columnA = jsonData.slice(1).map(row => row[0]);
      const columnD = jsonData.slice(1).map(row => row[selectedValue * 2 - 1]);
      const columnE = jsonData.slice(1).map(row => row[selectedValue * 2]);

      chart = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: columnA,
          datasets: [
            {
              label: 'Sim',
              data: columnD,
              borderWidth: 1
            },
            {
              label: 'Não',
              data: columnE,
              borderWidth: 1
            }
          ]
        },
        options: {
          responsive: true,
          aspectRatio: 2.2,
          devicePixelRatio: 1,
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      });
    })
  .catch(error => {
    console.error('Ocorreu um erro ao carregar o arquivo:', error);
    valor = 1;
  });
  /*if (getError()) {
    valor = 1;
  } else {
    valor = 0;
  }*/
}


export { handleFile };
