const tarefasController = require('../controllers').tarefas;

module.exports = (app) => {
  app.get('/api', (req, res) => res.status(200).send({
    message: 'Bem-Vindo ao ListaDeTarefas API!',
  }));

  app.post('/api/tarefas', tarefasController.create);
  app.get('/api/tarefas', tarefasController.list);
  app.get('/api/tarefas/:TarefasPk', tarefasController.retrieve);
  app.put('/api/tarefas/:TarefasPk', tarefasController.update);
  app.delete('/api/tarefas/:TarefasPk', tarefasController.destroy);
};