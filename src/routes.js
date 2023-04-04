const { Router } = require('express');
const VeiculoController = require('./app/controllers/VeiculoController');
const router = Router();

router.get('/veiculos', VeiculoController.index);
router.post('/veiculos-inserir', VeiculoController.store);
router.get('/veiculos-buscar/:id', VeiculoController.show);
router.put('/veiculos-update/:id', VeiculoController.update);
router.delete('/veiculos-deletar/:id', VeiculoController.delete);

module.exports = router;