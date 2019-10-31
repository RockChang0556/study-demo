const http = require('http');

/**
 * http.ClientRequest 类
 * 
 * http.request() === new http.ClientRequest()
 */

// 创建一个客户端(能发送http请求)的对象
const client = http.request({
    // TCP
    host: '127.0.0.1',
    port: 8080,
    // http
    protocol: 'http:',
    path: '/',
    method: 'GET'
}, res => {
    res.on('data', data => {
        console.log(data.toString());
    });
    res.on('end', data => {
        console.log(data);
    });
});

// 请求
client.write('');
client.end(); // 没有end(), 服务器会以为你一直在发数据, 就不会返回了
