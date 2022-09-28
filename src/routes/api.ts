import { Router } from "express";
import * as ApiController from '../controllers/apiController'

const router = Router();

router.get('/ping', ApiController.ping);
router.get('/random', ApiController.random);
router.get('/nome/:nome', ApiController.nome);

router.post('/produtos', ApiController.criarProduto);
router.get('/produtos', ApiController.listarProdutos);
router.get('/produto/:id', ApiController.listarProduto);

export default router;