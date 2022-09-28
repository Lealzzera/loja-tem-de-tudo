import { Request, Response } from 'express';
import { Vendas } from '../models/Vendas';

export const criarVenda = async (req: Request, res: Response) => {
  let { cliente, data, itens, valor, vendedor } = req.body;

  let novaVenda = await Vendas.create({
    cliente, data, itens, valor, vendedor
  });

  res.json({ id: novaVenda.id, cliente: cliente, data: data, itens: itens, valor: valor, vendedor: vendedor });
}

export const listarVendas = async (req: Request, res: Response) => {
  let vendas = await Vendas.findAll();
  res.json({ vendas });
}

export const listarVenda = async (req: Request, res: Response) => {
  let { id } = req.params;
  let venda = await Vendas.findByPk(id);
  if (venda) {
    res.json({ venda });
  } else {
    res.json({ error: 'Venda não localizada' });
  }
}

export const atualizarVenda = async (req: Request, res: Response) => {
  let { id } = req.params;
  let { cliente, data, itens, valor, vendedor } = req.body;

  let venda = await Vendas.findByPk(id);
  if (venda) {
    if (cliente) {
      venda.cliente = cliente;
    }
    if (data) {
      venda.data = data;
    }
    if (itens) {
      venda.itens = itens;
    }
    if (valor) {
      venda.valor = valor;
    }
    if (vendedor) {
      venda.vendedor = vendedor;
    }
    await venda.save();

    res.json({ venda });
  } else {
    res.json({ error: 'Venda não encontrada' });
  }
}

export const deletarVenda = async (req: Request, res: Response) => {
  let { id } = req.params;
  await Vendas.destroy({
    where: { id }
  });
  res.json({});
}