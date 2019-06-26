/**
 * 客户端
 */
const dgram = require('dgram');

const clientScoket = dgram.createSocket('udp4');

/**
 * 发送数据
 *  UDP, 无连接协议, 不需要连接到服务器,然后再发数据
 *
 * clientScoket.send(data, 端口号, 地址)
 */
clientScoket.send('hello', 12345, '127.0.0.1');