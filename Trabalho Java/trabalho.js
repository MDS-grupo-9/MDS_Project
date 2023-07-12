//CÓDIGO EM JS
const ctx = document.getElementById('grafico1').getContext('2d');
const filePath = './inventario-bens-duraveis.xlsx';

function handleFile(filePath) {
  fetch(filePath)
    .then(response => response.arrayBuffer())
    
    .then(data => {
      const workbook = XLSX.read(data, { type: 'array' });
      const worksheet = workbook.Sheets['bens-duraveis'];

      // Converter a planilha em uma matriz de objetos JSON
      const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

      // Obter os valores das colunas A, D e E
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
    })
  if (getError()) {
    valor = 1;
  } else {
    valor = 0;
  }
}

handleFile(filePath);

module.exports = handleFile;