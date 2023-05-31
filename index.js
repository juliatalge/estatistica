const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

// Endpoint para consultar o número médio de observações por lembrete
app.get('/estatisticas/observacoes-por-lembrete', (req, res) => {
  // Aqui você pode adicionar a lógica para consultar o número médio de observações por lembrete
  // e retornar a resposta adequada

  // Exemplo de resposta com um número médio de 5 observações por lembrete
  const numeroMedioObservacoes = 5;
  res.json({ numeroMedioObservacoes });
});

// Inicia o servidor na porta 3000
app.listen(3000, () => {
  console.log('Servidor estatisticas iniciado na porta 3000');
});