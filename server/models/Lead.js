import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const Lead = sequelize.define(
  'Lead',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    industry: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    location: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    status: {
      type: DataTypes.ENUM(
        'new',
        'contacted',
        'negotiating',
        'converted',
        'disqualified'
      ),
      defaultValue: 'new',
      allowNull: false,
    },
  },
  {
    freezeTableName: true,
  }
);

export default Lead;
