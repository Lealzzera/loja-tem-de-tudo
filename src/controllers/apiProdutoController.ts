import { Request, Response } from 'express';
import { Produto } from '../models/Produtos';

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

export const atualizarProduto = async (req: Request, res: Response) => {
  let { id } = req.params;
  let { nome_produto, descricao, marca, fornecedor, classificacao, preco_custo, preco_venda, qtde_estoque, qtde_loja } = req.body;

  let produto = await Produto.findByPk(id);
  if (produto) {
    if (nome_produto) {
      produto.nome_produto = nome_produto;
    }
    if (descricao) {
      produto.descricao = descricao;
    }
    if (marca) {
      produto.marca = marca;
    }
    if (fornecedor) {
      produto.fornecedor = fornecedor

    }
    if (classificacao) {
      produto.classificacao = classificacao
    }
    if (preco_custo) {
      produto.preco_custo = preco_custo
    }
    if (preco_venda) {
      produto.preco_venda = preco_venda
    }
    if (qtde_estoque) {
      produto.qtde_estoque = qtde_estoque
    }
    if (qtde_loja) {
      produto.qtde_loja = qtde_loja
    }

    await produto.save();
    res.json({ produto });
  } else {
    res.json({ error: 'Produto não encontrado' })
  }
}

export const deletarProduto = async (req: Request, res: Response) => {
  let { id } = req.params;
  let produto = Produto.findByPk(id);
  await Produto.destroy({ where: { id } });
  res.json({});
}