import Lead from './Lead.js';
import sequelize from '../config/database.js';
import {
  Model,
  InferAttributes,
  InferCreationAttributes,
  DataTypes,
  CreationOptional,
} from 'sequelize';

export interface UserModel
  extends Model<
    InferAttributes<UserModel>,
    InferCreationAttributes<UserModel>
  > {
  id: string;
  username: string;
  email: string;
  password: string;
  profileImg: string;
  cloudinaryId: CreationOptional<string>;
}

const User = sequelize.define<UserModel>('User', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  profileImg: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  cloudinaryId: {
    type: DataTypes.STRING,
    allowNull: true,
  },
});

User.hasMany(Lead, {
  foreignKey: 'userId',
  onDelete: 'CASCADE',
});

export default User;
