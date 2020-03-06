const Tarefas = require('../models').Tarefas;

module.exports = {
  create(req, res) {
    return Tarefas
      .create({
        descricao: req.body.descricao,
        data_criacao: req.body.data_criacao,
        status: req.body.status,
      })
      .then(tarefa => res.status(201).send(tarefa))
      .catch(error => res.status(400).send(error));
  },

  list(req, res) {
    return Tarefas
      .findAll()
      .then(tarefas => res.status(200).send(tarefas))
      .catch(error => res.status(400).send(error));
  },

  retrieve(req, res) {
    return Tarefas
      .findByPk(req.params.TarefasPk)
      .then(tarefa => {
        if (!tarefa) {
          return res.status(404).send({
            message: 'Tarefa Not Found',
          });
        }
        return res.status(200).send(tarefa);
      })
      .catch(error => res.status(400).send(error));
  },

  update(req, res) {
    return Tarefas
      .findByPk(req.params.TarefasPk)
      .then(tarefa => {
        if (!tarefa) {
          return res.status(404).send({
            message: 'Tarefa Not Found',
          });
        }
        return tarefa
          .update({
            descricao: req.body.descricao || tarefa.descricao,
            data_criacao: req.body.data_criacao || tarefa.data_criacao,
            status: req.body.status || tarefa.status,
          })
          .then(updatedTarefas => res.status(200).send(updatedTarefas))  // Send back the updated tarefa.
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },

  destroy(req, res) {
    return Tarefas
      .findByPk(req.params.TarefasPk)
      .then(tarefa => {
        if (!tarefa) {
          return res.status(400).send({
            message: 'Tarefa Not Found',
          });
        }
        return tarefa
          .destroy()
          .then(() => res.status(204).send())
          .catch(error => res.status(400).send(error));
      })
      .catch(error => res.status(400).send(error));
  },
};