import {
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  Model,
} from 'sequelize';
import sequelize from '../config/database.js';

import { UserModel } from './User.js';

type Industry =
  | 'other'
  | 'technology'
  | 'healthcare'
  | 'finance'
  | 'retail'
  | 'hospitality'
  | 'food&Beverage'
  | 'education'
  | 'construction'
  | 'transportation'
  | 'realEstate'
  | 'manufacturing'
  | 'professional'
  | 'fitness'
  | 'automotive';

type Status =
  | 'new'
  | 'contacted'
  | 'negotiating'
  | 'converted'
  | 'disqualified';

export interface LeadModel
  extends Model<
    InferAttributes<LeadModel>,
    InferCreationAttributes<LeadModel>
  > {
  id: string;
  name: string;
  email: string;
  industry: Industry;
  phone: string;
  location: string;
  status: Status;
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
