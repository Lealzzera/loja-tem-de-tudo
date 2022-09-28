import { Request, Response } from 'express';
import { Produto } from '../models/Produtos';

export const ping = (req: Request, res: Response) => {
  res.json({ pong: true });
};

export const random = (req: Request, res: Response) => {
  let nRand: number = Math.floor(Math.random() * 10);
  res.json({ number: nRand });
};

export const nome = (req: Request, res: Response) => {
  let nome: string = req.params.nome;
  res.json({ nome: nome });
};

/*------------------------------------------*/


// API's referente a produtos

export const criarProduto = async (req: Request, res: Response) => {
  let { nome_produto, descricao, marca, fornecedor, classificacao, preco_custo, preco_venda, qtde_estoque, qtde_loja } = req.body;

  let novoProduto = await Produto.create({
    nome_produto, descricao, marca, fornecedor, classificacao, preco_custo, preco_venda, qtde_estoque, qtde_loja
  });

  res.json({ id: novoProduto.id, nome_produto, descricao, marca, fornecedor, classificacao, preco_custo, preco_venda, qtde_estoque, qtde_loja })
};

export const listarProdutos = async (req: Request, res: Response) => {
  let produtos = await Produto.findAll();
  res.json({ produtos });
}

export const listarProduto = async (req: Request, res: Response) => {
  let { id } = req.params;
  let produto = await Produto.findByPk(id);
  if (produto) {
    res.json([produto]);
  } else {
    res.json({ error: 'Produto não encontrado' });
  }
}

//API's referente a vendas