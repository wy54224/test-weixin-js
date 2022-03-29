const request = require('request')
const express = require('express')
const app = express()
const dns = require('dns')

app.get('/', (req, res) => {
  const api = `https://api.weixin.qq.com/cgi-bin/get_api_domain_ip`
  dns.lookup('www.qq.com', function(err, address, family){
    console.log('dns err: ' + err);
    console.log('address: ' + address);
    console.log('family: ' + family);
  });
  request(api, {
    method: 'GET'
  }, (err, resp, body) => {
    console.log('request err: ' + err);
    console.log('response: ' + resp);
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
