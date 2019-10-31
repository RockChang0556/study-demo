const http = require('http');

/**
 * http.server 类
 *
 * http.creatServer() === new http.Server()
 */

const server = http.createServer();

/**
 * request: 客户端对象, 保存了当前这个请求的客户端的相关信息
 *           API => http.IncomingMessage
 * response: 服务器输出对象, 提供了服务器输出(响应)有关的一些方法
 *           API => http.ServerResponse
 */
server.on('request', (request, response) => {
    // request.socket 其实就是 net.socket
    console.log('接收到了请求, 地址是: ' + request.socket.remoteAddress);

    // 向客户端返回数据
    console.log('url : ' + request.url);
    response.write('rock');
});

// 80端口默认约定给 http 使用
server.listen({
    host: '0.0.0.0',
    port: 80
}, () => {
    console.log('服务开启成功');
});
