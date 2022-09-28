import { Router } from "express";
import * as ApiProdutoController from '../controllers/apiProdutoController';
import * as ApiVendasController from '../controllers/apiVendasController';
import * as ApiClientesController from '../controllers/apiClientesController';

const router = Router();

//Rotas referente aos produtos
router.post('/produtos', ApiProdutoController.criarProduto);
router.get('/produtos', ApiProdutoController.listarProdutos);
router.get('/produto/:id', ApiProdutoController.listarProduto);
router.put('/produto/:id', ApiProdutoController.atualizarProduto);
router.delete('/produto/:id', ApiProdutoController.deletarProduto);

//Rotas referente as vendas
router.post('/vendas', ApiVendasController.criarVenda);
router.get('/vendas', ApiVendasController.listarVendas);
router.get('/venda/:id', ApiVendasController.listarVenda);
router.put('/venda/:id', ApiVendasController.atualizarVenda);
router.delete('/venda/:id', ApiVendasController.deletarVenda);

//Rotas referente aos clientes
router.post('/clientes', ApiClientesController.criarCliente);
router.get('/clientes', ApiClientesController.listarClientes);
router.get('/cliente/:id', ApiClientesController.listarCliente);
router.put('/cliente/:id', ApiClientesController.atualizarCliente);
router.delete('/cliente/:id', ApiClientesController.deletarCliente);

export default router;