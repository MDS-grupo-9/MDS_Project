const Chart = require('chart.js');
const XLSX = require('xlsx');
const fetch = require('node-fetch');

function createCanvasMock() {
  const canvas = document.createElement('canvas');

  canvas.getContext = jest.fn().mockReturnValue({
    getContext: jest.fn().mockReturnValue({})
  });
  return canvas;
}

const filePath = './inventario-bens-duraveis.xlsx';

function fetchData(filePath) {
  return fetch(filePath)
    .then(response => response.arrayBuffer())
    .then(data => {
      const workbook = XLSX.read(data, { type: 'array' });
      const worksheet = workbook.Sheets['bens-duraveis'];
      return XLSX.utils.sheet_to_json(worksheet, { header: 1 });
    })
    .catch(error => {
      console.error('Ocorreu um erro ao carregar o arquivo:', error);
      return null;
    });
}

const canvas = createCanvasMock();

fetchData(filePath)
  .then(jsonData => {
    if (jsonData) {
      createChart(canvas.getContext('2d'), jsonData);
    }
  });

function createChart(ctx, jsonData) {
  const columnA = jsonData.slice(1).map(row => row[0]);
  const columnD = jsonData.slice(1).map(row => row[5]);
  const columnE = jsonData.slice(1).map(row => row[6]);

  new Chart(ctx, {
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
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
}
