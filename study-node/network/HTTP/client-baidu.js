const http = require('http');
const fs = require('fs');

/**
 * http.ClientRequest 类
 * 
 * http.request() === new http.ClientRequest()
 */

// 创建一个客户端(能发送http请求)的对象
const client = http.request({
    // TCP
    host: 'www.baidu.com',
    port: 80,
    // http
    protocol: 'http:',
    path: '/img/bd_logo1.png',
    method: 'GET'
}, res => {
    // 这个回调会在服务器响应时触发

    // let content = ''; // 不推荐字符串拼接的方式
    let content = Buffer.alloc(0);
    // res => socket
    res.on('data', data => {
        // console.log(data.toString()); // baidu首页的html
        // content += data;
        content = Buffer.concat([content, data], content.length + data.length);
    });
    res.on('end', () => {
        fs.writeFileSync('./baidu.png', content);
        console.log('ok');
    });
});
// 请求
client.write('');

client.end(); // 没有end(), 服务器会以为你一直在发数据, 就不会返回了
