// 客户端

const net = require('net');

/**
 * 创建客户端与 UDP 不同
 * 
 * net.Socket 类
 *  1. new net.Scoket()
 *  2.  net.creatConnection()
 */

// 要连接的主机及端口号
const clientScoket = net.createConnection({
    host: '127.0.0.1',
    port: 12345
}, () => {
    console.log('连接服务成功!');
});

clientScoket.on('data', data => {
    console.log('服务端过来的数据: ' + data.toString());

    // clientScoket.write('hhhh');
});