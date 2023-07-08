
const { TextEncoder, TextDecoder } = require('text-encoding-utf-8');

const textEncoder = new TextEncoder();
const encodedData = textEncoder.encode('Hello, world!');

console.log(encodedData); // Uint8Array(13) [ 72, 101, 108, 108, 111, 44, 32, 119, 111, 114, 108, 100, 33 ]

global.window = window;
global.document = window.document;
global.navigator = {
  userAgent: 'node.js',
};

// Carregar o pacote chart.js no ambiente do jsdom
const Chart = require('chart.js');
window.Chart = Chart;

// Agora você pode usar o TextEncoder e o TextDecoder conforme necessário
