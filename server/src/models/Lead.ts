import { DataTypes } from 'sequelize';
import sequelize from '../config/database.ts';

const Lead = sequelize.define(
  'Lead',
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
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
      allowNull: false,
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
