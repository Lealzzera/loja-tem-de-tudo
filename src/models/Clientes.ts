import { Model, DataTypes } from "sequelize";
import { sequelize } from '../instances/pg';

export interface VendasInstace extends Model {
  id: number;
  nome: string;
  endereco: string;
  qtd_compras: number;
  telefone: number;
}

export const Produto = sequelize.define<VendasInstace>('Produtos', {
  id: {
    primaryKey: true,
    autoIncrement: true,
    type: DataTypes.INTEGER
  },
  nome: {
    type: DataTypes.STRING
  },
  endereco: {
    type: DataTypes.STRING
  },
  qtd_compras: {
    type: DataTypes.NUMBER
  },
  telefone: {
    type: DataTypes.NUMBER
  },
}, {
  tableName: 'clientes',
  timestamps: false
});