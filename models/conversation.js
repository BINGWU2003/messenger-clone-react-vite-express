/*
 * @Author: BINGWU
 * @Date: 2024-08-05 00:58:08
 * @LastEditors: hujiacheng hujiacheng@iipcloud.com
 * @LastEditTime: 2024-08-05 00:58:18
 * @FilePath: \messenger-clone-react-vite-express\models\c.js
 * @Describe: 
 * @Mark: ૮(˶ᵔ ᵕ ᵔ˶)ა
 */
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const User = require('./user');

const Conversation = sequelize.define('Conversation', {
  id: {
    type: DataTypes.STRING,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4,
    field: '_id'
  },
  createdAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  },
  lastMessageAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  },
  name: DataTypes.STRING,
  isGroup: DataTypes.BOOLEAN
}, {
  tableName: 'conversations'
});

Conversation.belongsToMany(User, { through: 'UserConversations', foreignKey: 'conversationId' });
User.belongsToMany(Conversation, { through: 'UserConversations', foreignKey: 'userId' });

module.exports = Conversation;