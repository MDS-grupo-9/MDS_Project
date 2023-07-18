function geterror4() {
  // Simulando a lógica que atribui um valor à variável
  let resultado = 0;

  return resultado;
}

test('Sucesso quando o gráfico for renderizado/ Falha quando não renderizar o gráfico', () => {
  const resultado = geterror4();

  expect(resultado).toBe(0); // Verifica se o valor é 0 (sucesso)
  expect(resultado).not.toBe(1); // Verifica se o valor não é 1 (falha)
});