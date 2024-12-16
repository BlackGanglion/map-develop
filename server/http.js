import http from 'http';  // Node.js 内置的 HTTP 模块
import fs from 'fs';      // 文件系统模块
import path from 'path';  // 路径模块
import { fileURLToPath } from 'url';

// 定义服务器端口
const PORT = 3000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 创建 HTTP 服务
const server = http.createServer((req, res) => {
  // 设置响应头，允许跨域和 JSON 格式
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Access-Control-Allow-Origin', '*'); // 允许跨域访问

  // 处理请求路径
  if (req.url === '/api/geojson') {
    // 读取本地 JSON 文件
    const filePath = path.join(__dirname, '../route/TUOLUMNEMEADOWSOutdoorClimb20240427081229.json');
    fs.readFile(filePath, 'utf-8', (err, data) => {
      if (err) {
        res.statusCode = 500;
        res.end(JSON.stringify({ error: 'Internal Server Error' }));
        return;
      }

      res.statusCode = 200;
      res.end(JSON.stringify({
        success: true,
        data: JSON.parse(data),
      })); // 返回 JSON 数据
    });
  } else {
    // 处理未匹配的路径
    res.statusCode = 404;
    res.end(JSON.stringify({ error: 'Not Found' }));
  }
});

// 启动服务器
server.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});