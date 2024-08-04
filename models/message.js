/*
 * @Author: BINGWU
 * @Date: 2024-08-05 00:59:07
 * @LastEditors: hujiacheng hujiacheng@iipcloud.com
 * @LastEditTime: 2024-08-05 00:59:12
 * @FilePath: \messenger-clone-react-vite-express\models\message.js
 * @Describe: 
 * @Mark: ૮(˶ᵔ ᵕ ᵔ˶)ა
 */
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const User = require('./user');
const Conversation = require('./conversation');

const Message = sequelize.define('Message', {
  id: {
    type: DataTypes.STRING,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4,
    field: '_id'
  },
  body: DataTypes.STRING,
  image: DataTypes.STRING,
  createdAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  },
  conversationId: {
    type: DataTypes.STRING,
    references: {
      model: Conversation,
      key: 'id'
    }
  },
  senderId: {
    type: DataTypes.STRING,
    references: {
      model: User,
      key: 'id'
    }
  }
}, {
  tableName: 'messages'
});

Message.belongsTo(Conversation, { foreignKey: 'conversationId' });
Message.belongsTo(User, { foreignKey: 'senderId', onDelete: 'CASCADE' });

Message.belongsToMany(User, { through: 'MessageSeen', as: 'seen', foreignKey: 'messageId' });
User.belongsToMany(Message, { through: 'MessageSeen', as: 'seenMessages', foreignKey: 'userId' });

module.exports = Message;