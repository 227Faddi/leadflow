import { DataTypes } from 'sequelize';
import Lead from './Lead.js';
import sequelize from '../config/database.js';

const User = sequelize.define('User', {
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
