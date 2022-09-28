import { Request, Response } from "express";
import { Clientes } from '../models/Clientes';

export const criarCliente = async (req: Request, res: Response) => {
  let { nome, endereco, qtd_compras, telefone } = req.body;

  let novoCliente = await Clientes.create({
    nome: nome, endereco: endereco, qtd_compras: qtd_compras, telefone: telefone
  });
  res.json({ novoCliente });
}

export const listarClientes = async (req: Request, res: Response) => {
  let clientes = await Clientes.findAll();

  res.json({ clientes });
}

export const listarCliente = async (req: Request, res: Response) => {
  let { id } = req.params;
  let cliente = await Clientes.findByPk(id);
  if (cliente) {
    res.json({ cliente });
  } else {
    res.json({ error: 'Cliente não encontrado' });
  }
}

export const atualizarCliente = async (req: Request, res: Response) => {
  let { id } = req.params;
  let { nome, endereco, qtd_compras, telefone } = req.body;

  let cliente = await Clientes.findByPk(id);
  if (cliente) {
    if (nome) {
      cliente.nome = nome;
    }
    if (endereco) {
      cliente.endereco = endereco;
    }
    if (qtd_compras) {
      cliente.qtd_compras = qtd_compras;
    }
    if (telefone) {
      cliente.telefone = telefone;
    }

    await cliente.save();
    res.json({ cliente });
  } else {
    res.json({ error: 'Cliente não encontrado' });
  }
}

export const deletarCliente = async (req: Request, res: Response) => {
  let { id } = req.params;
  await Clientes.destroy({ where: { id } });
  res.json({})
}