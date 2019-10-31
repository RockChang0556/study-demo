/**
 * 在node中,tcp协议, 是基于 net 模块来实现的
 */

const net = require('net');
const fs = require('fs');

/**
 * 创建一个服务器
 *     1. 监听地址以及端口
 *     2. 处理监听到的数据
 *     3. 返回(发送)数据到连接的客户端
 *
 * net.Server 类
 *     net.creatServer()  =>  内部差不对就是 return new net.Server()
 *
 * function(cb) {
 *     let s = new net.Server();
 *     s.on('connection', cb); // 内部触发 connection
 *     return s;
 * }
 */
const server = net.createServer();

// 当有客户端连接时触发
server.on('connection', socket => {
    // socket 当前连接的 socket 对象
    console.log('有客户端连接了, 地址为: ' + socket.remoteAddress + ', 端口为: ' + socket.remotePort);

    // server 本质是个可读可写的双工流
    // 向客户端发送
    // socket.write('hello');

    // socket.on('data', data => {
    //     console.log('客户端过来的数据: ' + data);
    // });

    let fsData = fs.readFileSync('./server/1.jpg');
    // console.log(fsData);
    socket.write(fsData);
});

// 0.0.0.0 === *   默认 通配符
server.listen({
    host: '127.0.0.1',
    port: 12345
});

