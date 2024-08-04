/*
 * @Author: BINGWU
 * @Date: 2024-08-05 00:32:45
 * @LastEditors: hujiacheng hujiacheng@iipcloud.com
 * @LastEditTime: 2024-08-05 00:36:43
 * @FilePath: \messenger-clone-react-vite-express\config\database.js
 * @Describe: 
 * @Mark: ૮(˶ᵔ ᵕ ᵔ˶)ა
 */

const { Sequelize } = require('sequelize');
const dotenv = require('dotenv');

dotenv.config();

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  dialect: 'mysql',
  port: process.env.DB_PORT,
  // 新增这行代码
  dialectModule: require('mysql2')
});

module.exports = sequelize;