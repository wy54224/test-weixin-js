const request = require('request')
const express = require('express')
const app = express()

app.get('/', (req, res) => {
  const api = `https://api.weixin.qq.com/cgi-bin/get_api_domain_ip`
  request(api, {
    method: 'GET'
  }, (err, resp, body) => {
    try {
      res.send(body);
    } catch (error) {
      res.send('failed');
    }
  });
})

const port = 80
app.listen(port, () => {
  console.log('服务启动成功，端口：', port)
})
