import * as XLSX from 'xlsx';
import Chart from 'chart.js/auto';

//CÓDIGO EM JS
const filePath = 'Pesquisa_Distrital_2021_DF.xlsx'; // Coloque o caminho do arquivo aqui
let chart = null;
let valor = 0, valor2 = 0, valor3 = 0, valor4 = 0, valor5 = 0, valor6 = 0, valor7 = 0, valor8 = 0, valor9 = 0, valor10 = 0, valor11 = 0, valor12 = 0, valor13 = 0,
valor14 = 0, valor15 = 0, valor16 = 0, valor17 = 0;

function handleFile(selectedValue, ctx) {

  if (chart) {
    // Destrói o gráfico anterior se existir
    chart.destroy();
  }

  fetch(filePath)
    .then(response => response.arrayBuffer())
    .then(data => {
      const workbook = XLSX.read(data, { type: 'array' });

      const sheetIndex = 16;

      const worksheet = workbook.Sheets[workbook.SheetNames[sheetIndex]];

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
          aspectRatio: 2.5,
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
}

function handleFile2(ctx) {

  if (chart) {
    // Destrói o gráfico anterior se existir
    chart.destroy();
  }

  fetch(filePath)
    .then(response => response.arrayBuffer())
    .then(data => {
      const workbook = XLSX.read(data, { type: 'array' });

      const sheetIndex = 1;

      const worksheet = workbook.Sheets[workbook.SheetNames[sheetIndex]];

      // Converter a planilha em uma matriz de objetos JSON
      const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

      // Obter os valores das colunas A, D e E
      const columnA = jsonData.slice(1).map(row => row[0]);
      const columnB = jsonData.slice(1).map(row => row[1]);
      const columnC = jsonData.slice(1).map(row => row[2]);
      const columnD = jsonData.slice(1).map(row => row[3]);

      chart = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: columnA,
          datasets: [
            {
              label: 'Total',
              data: columnB,
              borderWidth: 1
            },
            {
              label: 'DF',
              data: columnC,
              borderWidth: 1
            },
            {
              label: 'Outro Estado',
              data: columnD,
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
    valor2 = 1;
  });
}

function handleFile3(ctx) {

  if (chart) {
    // Destrói o gráfico anterior se existir
    chart.destroy();
  }

  fetch(filePath)
    .then(response => response.arrayBuffer())
    .then(data => {
      const workbook = XLSX.read(data, { type: 'array' });

      const sheetIndex = 2;

      const worksheet = workbook.Sheets[workbook.SheetNames[sheetIndex]];

      // Converter a planilha em uma matriz de objetos JSON
      const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

      // Obter os valores das colunas A, D e E
      const columnA = jsonData.slice(1).map(row => row[0]);
      const columnB = jsonData.slice(1).map(row => row[1]);
      const columnC = jsonData.slice(1).map(row => row[2]);
      const columnD = jsonData.slice(1).map(row => row[3]);

      chart = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: columnA,
          datasets: [
            {
              label: 'Total',
              data: columnB,
              borderWidth: 1
            },
            {
              label: 'Não LGBTQIA ',
              data: columnC,
              borderWidth: 1
            },
            {
              label: 'LGBTQIA',
              data: columnD,
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
    valor3 = 1;
  });
}

function handleFile4(ctx) {

  if (chart) {
    // Destrói o gráfico anterior se existir
    chart.destroy();
  }

  fetch(filePath)
    .then(response => response.arrayBuffer())
    .then(data => {
      const workbook = XLSX.read(data, { type: 'array' });

      const sheetIndex = 3;

      const worksheet = workbook.Sheets[workbook.SheetNames[sheetIndex]];

      // Converter a planilha em uma matriz de objetos JSON
      const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

      // Obter os valores das colunas A, D e E
      const columnA = jsonData.slice(1).map(row => row[0]);
      const columnB = jsonData.slice(1).map(row => row[1]);
      const columnC = jsonData.slice(1).map(row => row[2]);
      const columnD = jsonData.slice(1).map(row => row[3]);

      chart = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: columnA,
          datasets: [
            {
              label: 'Total',
              data: columnB,
              borderWidth: 1
            },
            {
              label: 'Feminino',
              data: columnC,
              borderWidth: 1
            },
            {
              label: 'Masculino',
              data: columnD,
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
    valor4 = 1;
  });
}

function handleFile5(ctx) {

  if (chart) {
    // Destrói o gráfico anterior se existir
    chart.destroy();
  }

  fetch(filePath)
    .then(response => response.arrayBuffer())
    .then(data => {
      const workbook = XLSX.read(data, { type: 'array' });

      const sheetIndex = 4;

      const worksheet = workbook.Sheets[workbook.SheetNames[sheetIndex]];

      // Converter a planilha em uma matriz de objetos JSON
      const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

      // Obter os valores das colunas A, D e E
      const columnA = jsonData.slice(1).map(row => row[0]);
      const columnB = jsonData.slice(1).map(row => row[1]);
      const columnC = jsonData.slice(1).map(row => row[2]);
      const columnD = jsonData.slice(1).map(row => row[3]);
      const columnE = jsonData.slice(1).map(row => row[4]);
      const columnF = jsonData.slice(1).map(row => row[5]);
      const columnG = jsonData.slice(1).map(row => row[6]);

      chart = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: columnA,
          datasets: [
            {
              label: 'Total',
              data: columnB,
              borderWidth: 1
            },
            {
              label: 'Parda',
              data: columnC,
              borderWidth: 1
            },
            {
              label: 'Branca',
              data: columnD,
              borderWidth: 1
            },
            {
              label: 'Preta',
              data: columnE,
              borderWidth: 1
            },
            {
              label: 'Amarela',
              data: columnF,
              borderWidth: 1
            },
            {
              label: 'Indigena',
              data: columnG,
              borderWidth: 1
            },
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
    valor5 = 1;
  });
}

function handleFile6(ctx) {

  if (chart) {
    // Destrói o gráfico anterior se existir
    chart.destroy();
  }

  fetch(filePath)
    .then(response => response.arrayBuffer())
    .then(data => {
      const workbook = XLSX.read(data, { type: 'array' });

      const sheetIndex = 5;

      const worksheet = workbook.Sheets[workbook.SheetNames[sheetIndex]];

      // Converter a planilha em uma matriz de objetos JSON
      const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

      // Obter os valores das colunas A, D e E
      const columnA = jsonData.slice(1).map(row => row[0]);
      const columnB = jsonData.slice(1).map(row => row[1]);
      const columnC = jsonData.slice(1).map(row => row[2]);
      const columnD = jsonData.slice(1).map(row => row[3]);
      const columnE = jsonData.slice(1).map(row => row[4]);
      const columnF = jsonData.slice(1).map(row => row[5]);
      const columnG = jsonData.slice(1).map(row => row[6]);
      const columnH = jsonData.slice(1).map(row => row[7]);
      const columnI = jsonData.slice(1).map(row => row[8]);

      chart = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: columnA,
          datasets: [
            {
              label: 'Total',
              data: columnB,
              borderWidth: 1
            },
            {
              label: 'Casal sem filhos',
              data: columnC,
              borderWidth: 1
            },
            {
              label: 'Casal com 1 filho',
              data: columnD,
              borderWidth: 1
            },
            {
              label: 'Unipessoal',
              data: columnE,
              borderWidth: 1
            },
            {
              label: 'Monoparental (feminino)',
              data: columnF,
              borderWidth: 1
            },
            {
              label: 'Outro perfil',
              data: columnG,
              borderWidth: 1
            },
            {
              label: 'Casal com 2 filhos',
              data: columnH,
              borderWidth: 1
            },
            {
              label: 'Casal com 3 fihos ou mais',
              data: columnI,
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
    valor6 = 1;
  });
}

function handleFile7(ctx) {

  if (chart) {
    // Destrói o gráfico anterior se existir
    chart.destroy();
  }

  fetch(filePath)
    .then(response => response.arrayBuffer())
    .then(data => {
      const workbook = XLSX.read(data, { type: 'array' });

      const sheetIndex = 6;

      const worksheet = workbook.Sheets[workbook.SheetNames[sheetIndex]];

      // Converter a planilha em uma matriz de objetos JSON
      const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

      // Obter os valores das colunas A, D e E
      const columnA = jsonData.slice(1).map(row => row[0]);
      const columnB = jsonData.slice(1).map(row => row[1]);
      const columnC = jsonData.slice(1).map(row => row[2]);
      const columnD = jsonData.slice(1).map(row => row[3]);
      const columnE = jsonData.slice(1).map(row => row[4]);
      const columnF = jsonData.slice(1).map(row => row[5]);
      const columnG = jsonData.slice(1).map(row => row[6]);

      chart = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: columnA,
          datasets: [
            {
              label: 'Total',
              data: columnB,
              borderWidth: 1
            },
            {
              label: 'Casado',
              data: columnC,
              borderWidth: 1
            },
            {
              label: 'Solteiro',
              data: columnD,
              borderWidth: 1
            },
            {
              label: 'Divorciado',
              data: columnE,
              borderWidth: 1
            },
            {
              label: 'Viuvo',
              data: columnF,
              borderWidth: 1
            },
            {
              label: 'Desquitado ou separado judicialmente',
              data: columnG,
              borderWidth: 1
            },
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
    valor7 = 1;
  });
}

function handleFile8(ctx) {

  if (chart) {
    // Destrói o gráfico anterior se existir
    chart.destroy();
  }

  fetch(filePath)
    .then(response => response.arrayBuffer())
    .then(data => {
      const workbook = XLSX.read(data, { type: 'array' });

      const sheetIndex = 7;

      const worksheet = workbook.Sheets[workbook.SheetNames[sheetIndex]];

      // Converter a planilha em uma matriz de objetos JSON
      const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

      // Obter os valores das colunas A, D e E
      const columnA = jsonData.slice(1).map(row => row[0]);
      const columnB = jsonData.slice(1).map(row => row[1]);
      const columnC = jsonData.slice(1).map(row => row[2]);
      const columnD = jsonData.slice(1).map(row => row[3]);

      chart = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: columnA,
          datasets: [
            {
              label: 'Total',
              data: columnB,
              borderWidth: 1
            },
            {
              label: 'Sim',
              data: columnC,
              borderWidth: 1
            },
            {
              label: 'Nao',
              data: columnD,
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
    valor8 = 1;
  });
}

function handleFile9(ctx) {

  if (chart) {
    // Destrói o gráfico anterior se existir
    chart.destroy();
  }

  fetch(filePath)
    .then(response => response.arrayBuffer())
    .then(data => {
      const workbook = XLSX.read(data, { type: 'array' });

      const sheetIndex = 8;

      const worksheet = workbook.Sheets[workbook.SheetNames[sheetIndex]];

      // Converter a planilha em uma matriz de objetos JSON
      const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

      // Obter os valores das colunas A, D e E
      const columnA = jsonData.slice(1).map(row => row[0]);
      const columnB = jsonData.slice(1).map(row => row[1]);
      const columnC = jsonData.slice(1).map(row => row[2]);
      const columnD = jsonData.slice(1).map(row => row[3]);

      chart = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: columnA,
          datasets: [
            {
              label: 'Total',
              data: columnB,
              borderWidth: 1
            },
            {
              label: 'Sim',
              data: columnC,
              borderWidth: 1
            },
            {
              label: 'Nao',
              data: columnD,
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
    valor9 = 1;
  });
}

function handleFile10(ctx) {

  if (chart) {
    // Destrói o gráfico anterior se existir
    chart.destroy();
  }

  fetch(filePath)
    .then(response => response.arrayBuffer())
    .then(data => {
      const workbook = XLSX.read(data, { type: 'array' });

      const sheetIndex = 9;

      const worksheet = workbook.Sheets[workbook.SheetNames[sheetIndex]];

      // Converter a planilha em uma matriz de objetos JSON
      const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

      // Obter os valores das colunas A, D e E
      const columnA = jsonData.slice(1).map(row => row[0]);
      const columnB = jsonData.slice(1).map(row => row[1]);
      const columnC = jsonData.slice(1).map(row => row[2]);
      const columnD = jsonData.slice(1).map(row => row[3]);
      const columnE = jsonData.slice(1).map(row => row[4]);
      const columnF = jsonData.slice(1).map(row => row[5]);
      const columnG = jsonData.slice(1).map(row => row[6]);
      const columnH = jsonData.slice(1).map(row => row[7]);
      const columnI = jsonData.slice(1).map(row => row[8]);
      const columnJ = jsonData.slice(1).map(row => row[9]);
      const columnK = jsonData.slice(1).map(row => row[10]);

      chart = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: columnA,
          datasets: [
            {
              label: 'Total',
              data: columnB,
              borderWidth: 1
            },
            {
              label: 'Outros serviços',
              data: columnC,
              borderWidth: 1
            },
            {
              label: 'Comércio',
              data: columnD,
              borderWidth: 1
            },
            {
              label: 'Educação, saúde e serviços sociais',
              data: columnE,
              borderWidth: 1
            },
            {
              label: 'Adm. Pública',
              data: columnF,
              borderWidth: 1
            },
            {
              label: 'Construção',
              data: columnG,
              borderWidth: 1
            },
            {
              label: 'Serviços por aplicativo',
              data: columnH,
              borderWidth: 1
            },
            {
              label: 'Serviços domésticos',
              data: columnI,
              borderWidth: 1
            },
            {
              label: 'Indústria',
              data: columnJ,
              borderWidth: 1
            },
            {
              label: 'Agropecuária',
              data: columnK,
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
    valor10 = 1;
  });
}

function handleFile11(ctx) {

  if (chart) {
    // Destrói o gráfico anterior se existir
    chart.destroy();
  }

  fetch(filePath)
    .then(response => response.arrayBuffer())
    .then(data => {
      const workbook = XLSX.read(data, { type: 'array' });

      const sheetIndex = 10;

      const worksheet = workbook.Sheets[workbook.SheetNames[sheetIndex]];

      // Converter a planilha em uma matriz de objetos JSON
      const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

      // Obter os valores das colunas A, D e E
      const columnA = jsonData.slice(1).map(row => row[0]);
      const columnB = jsonData.slice(1).map(row => row[1]);
      const columnC = jsonData.slice(1).map(row => row[2]);
      const columnD = jsonData.slice(1).map(row => row[3]);
      const columnE = jsonData.slice(1).map(row => row[4]);
      const columnF = jsonData.slice(1).map(row => row[5]);
      const columnG = jsonData.slice(1).map(row => row[6]);
      const columnH = jsonData.slice(1).map(row => row[7]);
      const columnI = jsonData.slice(1).map(row => row[8]);

      chart = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: columnA,
          datasets: [
            {
              label: 'Total',
              data: columnB,
              borderWidth: 1
            },
            {
              label: 'Automóvel',
              data: columnC,
              borderWidth: 1
            },
            {
              label: 'Ônibus',
              data: columnD,
              borderWidth: 1
            },
            {
              label: 'A pé',
              data: columnE,
              borderWidth: 1
            },
            {
              label: 'Motocicleta',
              data: columnF,
              borderWidth: 1
            },
            {
              label: 'Metrô',
              data: columnG,
              borderWidth: 1
            },
            {
              label: 'Transporte privado',
              data: columnH,
              borderWidth: 1
            },
            {
              label: 'Bicicleta',
              data: columnI,
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
    valor11 = 1;
  });
}

function handleFile12(ctx) {

  if (chart) {
    // Destrói o gráfico anterior se existir
    chart.destroy();
  }

  fetch(filePath)
    .then(response => response.arrayBuffer())
    .then(data => {
      const workbook = XLSX.read(data, { type: 'array' });

      const sheetIndex = 11;

      const worksheet = workbook.Sheets[workbook.SheetNames[sheetIndex]];

      // Converter a planilha em uma matriz de objetos JSON
      const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

      // Obter os valores das colunas A, D e E
      const columnA = jsonData.slice(1).map(row => row[0]);
      const columnB = jsonData.slice(1).map(row => row[1]);
      const columnC = jsonData.slice(1).map(row => row[2]);
      const columnD = jsonData.slice(1).map(row => row[3]);
      const columnE = jsonData.slice(1).map(row => row[4]);
      const columnF = jsonData.slice(1).map(row => row[5]);
      const columnG = jsonData.slice(1).map(row => row[6]);
      const columnH = jsonData.slice(1).map(row => row[7]);
      const columnI = jsonData.slice(1).map(row => row[8]);
      const columnJ = jsonData.slice(1).map(row => row[9]);
      const columnK = jsonData.slice(1).map(row => row[10]);
      const columnL = jsonData.slice(1).map(row => row[11]);

      chart = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: columnA,
          datasets: [
            {
              label: 'Total',
              data: columnB,
              borderWidth: 1
            },
            {
              label: 'Mais de 15 até 30 minutos',
              data: columnC,
              borderWidth: 1
            },
            {
              label: 'Até 15 minutos',
              data: columnD,
              borderWidth: 1
            },
            {
              label: 'Mais de 30 até 45 minutos',
              data: columnE,
              borderWidth: 1
            },
            {
              label: 'Mais de 45 minutos até 1 hora',
              data: columnF,
              borderWidth: 1
            },
            {
              label: 'Mais de 1 hora até 1 hora e 15 minutos',
              data: columnG,
              borderWidth: 1
            },
            {
              label: 'Não sabe',
              data: columnH,
              borderWidth: 1
            },
            {
              label: 'Mais de 1 hora e 15 minutos até 1 hora e meia',
              data: columnI,
              borderWidth: 1
            },
            {
              label: 'Mais de 1 hora e meia até 1 hora e 45 minutos',
              data: columnJ,
              borderWidth: 1
            },
            {
              label: 'Mais de 1 hora e 45 minutos até 2 horas',
              data: columnK,
              borderWidth: 1
            },
            {
              label: 'Mais de 2 horas',
              data: columnL,
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
    valor12 = 1;
  });
}

function handleFile13(ctx) {

  if (chart) {
    // Destrói o gráfico anterior se existir
    chart.destroy();
  }

  fetch(filePath)
    .then(response => response.arrayBuffer())
    .then(data => {
      const workbook = XLSX.read(data, { type: 'array' });

      const sheetIndex = 12;

      const worksheet = workbook.Sheets[workbook.SheetNames[sheetIndex]];

      // Converter a planilha em uma matriz de objetos JSON
      const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

      // Obter os valores das colunas A, D e E
      const columnA = jsonData.slice(1).map(row => row[0]);
      const columnB = jsonData.slice(1).map(row => row[1]);
      const columnC = jsonData.slice(1).map(row => row[2]);
      const columnD = jsonData.slice(1).map(row => row[3]);
      const columnE = jsonData.slice(1).map(row => row[4]);
      const columnF = jsonData.slice(1).map(row => row[5]);
      const columnG = jsonData.slice(1).map(row => row[6]);

      chart = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: columnA,
          datasets: [
            {
              label: 'Até 1',
              data: columnB,
              borderWidth: 1
            },
            {
              label: 'Mais de 1 até 2',
              data: columnC,
              borderWidth: 1
            },
            {
              label: 'Mais de 2 até 5',
              data: columnD,
              borderWidth: 1
            },
            {
              label: 'Mais de 5 até 10',
              data: columnE,
              borderWidth: 1
            },
            {
              label: 'Mais de 10 até 20',
              data: columnF,
              borderWidth: 1
            },
            {
              label: 'Mais de 20',
              data: columnG,
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
    valor13 = 1;
  });
}

function handleFile14(ctx) {

  if (chart) {
    // Destrói o gráfico anterior se existir
    chart.destroy();
  }

  fetch(filePath)
    .then(response => response.arrayBuffer())
    .then(data => {
      const workbook = XLSX.read(data, { type: 'array' });

      const sheetIndex = 13;

      const worksheet = workbook.Sheets[workbook.SheetNames[sheetIndex]];

      // Converter a planilha em uma matriz de objetos JSON
      const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

      // Obter os valores das colunas A, D e E
      const columnA = jsonData.slice(1).map(row => row[0]);
      const columnB = jsonData.slice(1).map(row => row[1]);
      const columnC = jsonData.slice(1).map(row => row[2]);
      const columnD = jsonData.slice(1).map(row => row[3]);
      const columnE = jsonData.slice(1).map(row => row[4]);
      const columnF = jsonData.slice(1).map(row => row[5]);
      const columnG = jsonData.slice(1).map(row => row[6]);

      chart = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: columnA,
          datasets: [
            {
              label: 'Até 1',
              data: columnB,
              borderWidth: 1
            },
            {
              label: 'Mais de 1 até 2',
              data: columnC,
              borderWidth: 1
            },
            {
              label: 'Mais de 2 até 5',
              data: columnD,
              borderWidth: 1
            },
            {
              label: 'Mais de 5 até 10',
              data: columnE,
              borderWidth: 1
            },
            {
              label: 'Mais de 10 até 20',
              data: columnF,
              borderWidth: 1
            },
            {
              label: 'Mais de 20',
              data: columnG,
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
    valor14 = 1;
  });
}

function handleFile15(selectedValue, ctx) {

  if (chart) {
    // Destrói o gráfico anterior se existir
    chart.destroy();
  }

  fetch(filePath)
    .then(response => response.arrayBuffer())
    .then(data => {
      const workbook = XLSX.read(data, { type: 'array' });

      const sheetIndex = 14;

      const worksheet = workbook.Sheets[workbook.SheetNames[sheetIndex]];

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
    valor15 = 1;
  });
  /*if (getError()) {
    valor = 1;
  } else {
    valor = 0;
  }*/
}

function handleFile16(selectedValue, ctx) {

  if (chart) {
    // Destrói o gráfico anterior se existir
    chart.destroy();
  }

  fetch(filePath)
    .then(response => response.arrayBuffer())
    .then(data => {
      const workbook = XLSX.read(data, { type: 'array' });

      const sheetIndex = 15;

      const worksheet = workbook.Sheets[workbook.SheetNames[sheetIndex]];

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
    valor16 = 1;
  });
  /*if (getError()) {
    valor = 1;
  } else {
    valor = 0;
  }*/
}

function handleFile17(selectedValue, ctx) {

  if (chart) {
    // Destrói o gráfico anterior se existir
    chart.destroy();
  }

  fetch(filePath)
    .then(response => response.arrayBuffer())
    .then(data => {
      const workbook = XLSX.read(data, { type: 'array' });

      const sheetIndex = 17;

      const worksheet = workbook.Sheets[workbook.SheetNames[sheetIndex]];

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
    valor17 = 1;
  });
  /*if (getError()) {
    valor = 1;
  } else {
    valor = 0;
  }*/
}

export { handleFile, handleFile2, handleFile3, handleFile4, handleFile5, handleFile6, handleFile7, handleFile8, handleFile9, handleFile10, handleFile11, handleFile12,
 handleFile13, handleFile14, handleFile15, handleFile16, handleFile17 };
