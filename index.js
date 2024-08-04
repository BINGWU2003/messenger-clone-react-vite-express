/*
 * @Author: BINGWU
 * @Date: 2024-08-05 00:32:03
 * @LastEditors: hujiacheng hujiacheng@iipcloud.com
 * @LastEditTime: 2024-08-05 00:32:19
 * @FilePath: \messenger-clone-react-vite-express\index.js
 * @Describe: 
 * @Mark: ૮(˶ᵔ ᵕ ᵔ˶)ა
 */
const express = require('express');
const cors = require('cors'); // 引入cors包
const mysql = require('mysql2'); // 引入mysql2包
const dotenv = require('dotenv'); // 引入dotenv包

dotenv.config(); // 加载.env文件中的配置

const app = express();
const port = 3000;

app.use(cors()); // 使用cors中间件
app.use(express.json());

// 配置MySQL连接
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT // 使用端口号配置
});

// 连接到MySQL
db.connect(err => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL');
});


// hello world
app.get('/', (req, res) => {
  res.send('Hello World!');
});


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});