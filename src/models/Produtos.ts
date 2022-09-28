import { Model, DataTypes } from "sequelize";
import { sequelize } from '../instances/pg';

export interface ProdutosInstance extends Model {
  id: number;
  nome_produto: string;
  descricao: string;
  marca: string;
  fornecedor: string;
  classificacao: string;
  preco_custo: number;
  preco_venda: number;
  qtde_estoque: number;
  qtde_loja: number;
}

export const Produto = sequelize.define<ProdutosInstance>('Produtos', {
  id: {
    primaryKey: true,
    autoIncrement: true,
    type: DataTypes.INTEGER
  },
  nome_produto: {
    type: DataTypes.STRING
  },
  descricao: {
    type: DataTypes.STRING
  },
  marca: {
    type: DataTypes.STRING
  },
  fornecedor: {
    type: DataTypes.STRING
  },
  classificacao: {
    type: DataTypes.STRING
  },
  preco_custo: {
    type: DataTypes.FLOAT
  },
  preco_venda: {
    type: DataTypes.FLOAT
  },
  qtde_estoque: {
    type: DataTypes.INTEGER
  },
  qtde_loja: {
    type: DataTypes.INTEGER
  }
}, {
  tableName: 'produtos',
  timestamps: false
});