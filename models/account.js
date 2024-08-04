const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const User = require('./user');

const Account = sequelize.define('Account', {
  id: {
    type: DataTypes.STRING,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4,
    field: '_id'
  },
  userId: {
    type: DataTypes.STRING,
    references: {
      model: User,
      key: 'id'
    }
  },
  type: DataTypes.STRING,
  provider: DataTypes.STRING,
  providerAccountId: DataTypes.STRING,
  refresh_token: DataTypes.STRING,
  access_token: DataTypes.STRING,
  expires_at: DataTypes.INTEGER,
  token_type: DataTypes.STRING,
  scope: DataTypes.STRING,
  id_token: DataTypes.STRING,
  session_state: DataTypes.STRING
}, {
  tableName: 'accounts',
  indexes: [
    {
      unique: true,
      fields: ['provider', 'providerAccountId']
    }
  ]
});

Account.belongsTo(User, { foreignKey: 'userId', onDelete: 'CASCADE' });

module.exports = Account;