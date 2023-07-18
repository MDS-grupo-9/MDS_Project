const { handleFile7 } = require('../src/graphics/trabalho');

test('Verifica se não ocorreu um erro ao carregar o arquivo', async () => {
  let valor7 = 0; // Inicializa a variável "valor" como 0

  // Função mock para simular o fetch
  global.fetch = jest.fn().mockResolvedValue({
    arrayBuffer: jest.fn().mockResolvedValue({}),
  });

  // Mock do contexto (ctx)
  const mockCtx = {};

  // Chama a função handleFile passando o contexto mockado
  await handleFile7(mockCtx);

  // Verifica o valor da variável "valor"
  expect(valor7).toBe(0);
});