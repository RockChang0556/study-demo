/*
    服务端
    - 监听当前服务器上指定的ip与端口, 如果有数据发送到此ip与端口, 进行处理
*/

const dgram = require('dgram');

/**
 * 创建一个 scoket 类, scoket 就是用来处理网络数据的一个标准 API 对象
 * 用过 scoket ,我们就可以对网络数据进行操作
 *
 * dgram.Scoket 类
 */
// const serverScoket = new dgram.Socket();
// udp4 => ipv4   udp6 => ipv6
const serverScoket = dgram.createSocket('udp4'); // 此方法内部其实就是上面的 new

/**
 * 监听指定的地址及端口
 *
 * serverScoket.bind( 端口号, 地址 )
 */
serverScoket.bind(12345, '127.0.0.1');

serverScoket.on('listening', () => {
    console.log('服务开启成功, 监听中');
});

serverScoket.on('message', data => {
    console.log('数据接收成功, 数据为: ' + data);
});