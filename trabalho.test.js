const { JSDOM } = require('jsdom');
const Chart = require('chart.js');
const XLSX = require('xlsx');
const fs = require('fs');
const filePath = './inventario-bens-duraveis.xlsx';
const handleFile = require('./trabalho.js');

function createCanvasMock() {
  const dom = new JSDOM();
  global.document = dom.window.document;

  const canvas = document.createElement('canvas');

  canvas.getContext = jest.fn().mockReturnValue({
    getContext: jest.fn().mockReturnValue({})
  });
  return canvas;
}

// Resto do código de teste.

function fetchData(filePath) {
  const data = fs.readFileSync(filePath);
  const workbook = XLSX.read(data, { type: 'buffer' });
  const worksheet = workbook.Sheets['bens-duraveis'];
  const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
  return jsonData;
}

JSDOM.fromFile('./trabalho.html')
.then(dom => {
  // O ambiente JSDOM está pronto para uso
  const window = dom.window;
  const document = window.document;

  // Exemplo: Acessando o conteúdo HTML da página
  const htmlContent = document.documentElement.innerHTML;
  console.log(htmlContent);
})
.catch(error => {
  console.error('Ocorreu um erro ao abrir o ambiente JSDOM:', error);
});


const { getColumnValues } = require('./trabalho.js');

describe('getColumnValues', () => {
  test('should return an array of column values', () => {
    const jsonData = [
      ['Header1', 'Header2', 'Header3', 'Header4', 'Header5', 'Header6', 'Header7'],
      [1, 2, 3, 4, 5, 6, 7],
      [8, 9, 10, 11, 12, 13, 14]
    ];

    const columnA = getColumnValues(jsonData, 0);
    const columnD = getColumnValues(jsonData, 5);
    const columnE = getColumnValues(jsonData, 6);

    expect(columnA).toEqual([1, 8]);
    expect(columnD).toEqual([6, 13]);
    expect(columnE).toEqual([7, 14]);
  });
});
