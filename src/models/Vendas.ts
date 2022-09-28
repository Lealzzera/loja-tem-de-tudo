import { Model, DataTypes } from "sequelize";
import { sequelize } from '../instances/pg';

export interface VendasInstace extends Model {
  id: number;
  cliente: string;
  data: Date;
  itens: string;
  valor: number;
  vendedor: string;
}

export const Produto = sequelize.define<VendasInstace>('Produtos', {
  id: {
    primaryKey: true,
    autoIncrement: true,
    type: DataTypes.INTEGER
  },
  cliente: {
    type: DataTypes.STRING
  },
  data: {
    type: DataTypes.DATE
  },
  itens: {
    type: DataTypes.STRING
  },
  valor: {
    type: DataTypes.FLOAT
  },
  vendedor: {
    type: DataTypes.STRING
  },
}, {
  tableName: 'vendas',
  timestamps: false
});