import sequelize from '../config/database.js';
import {
  Model,
  InferAttributes,
  InferCreationAttributes,
  DataTypes,
} from 'sequelize';

import { UserModel } from './User.js';

export interface LeadModel
  extends Model<
    InferAttributes<LeadModel>,
    InferCreationAttributes<LeadModel>
  > {
  id: string;
  name: string;
  email: string;
  industry: string;
  phone: string;
  location: string;
  status: 'new' | 'contacted' | 'negotiating' | 'converted' | 'disqualified';
  userId: UserModel['id'];
}

const Lead = sequelize.define<LeadModel>(
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
    userId: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: 'Users',
        key: 'id',
      },
      onDelete: 'CASCADE',
    },
  },
  {
    freezeTableName: true,
  }
);

export default Lead;
