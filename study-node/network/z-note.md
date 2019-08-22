# 网络协议基础

### 基本概念
- **网卡**
    - 每一块网卡都有自己的一个唯一编号(mac地址)
    - 每一个网卡在连接到某个网络的时候会拥有一个固定或动态分配的编号(IP地址)

- **IP**
    - Internet Protocol  网络协议
    - 规定了互联的计算机之间的定位规则
        

- **IP协议**
    - 所谓协议就是一套规则,而IP协议就是为了能够让计算互连的一种规则,为了表示每台连入网络中的计算机(网卡)的唯一性, 每个连入网络的网卡都会绑定一个IP地址(固定-买断, 临时分配)

- **IP地址格式**
    - x.x.x.x 
    x表示一个字节的值，一个字节是8位
    所以一个x能表示的值为：0-255之间，一个IP地址由4个字节组成，所以IP地址的表示范围为：0.0.0.0-255.255.255.255,
    - 这套规则目前是IP协议的第四个版本中的定义，所以也称为：IPV4,不过就现在计算机发展来说，这套规则能够表示的地址已经很明显不够使用了，所以最新的一套IP协议规则是PV6

- **IP的分配使用**
    IP地址的使用是有一定的规则和规划的
    - 127.0.0.1 : 本地会换网络地址(自己CALL自己的一个快捷方式)
    - 192.168.0.1 - 192.168.255.254
        172.16.0.1 - 172.31.255.254
        10.0.0.1 - 10.255.255.254
        局部网络使用
    - 其他

### 数据传输协议
- **TCP**
    - 可靠的,面向连接的协议,传输效率低
    - 效率要求相对低, 但对准确性要求相对高的场景
    - 文件传输, 接收邮件, 远程登录

- **UDP**
    - 不可靠的,无连接的服务, 传输效率高
    - 效率要求相对高, 但对准确性要求低的场景
    - 在线视频, 网络语音电话

#### UDP ( dgram )
> 官网 ( http://nodejs.cn/api/dgram.html )
> dgram模块提供了 UDP 数据包 socket 的实现
```js
// 使用
const dgram = require('dgram');

// 关闭服务
clientScoket.close();
```

- **启动**
    1. 进入 /UDP 目录
    2. 启动服务端  node server
    3. 启动客户端  node client

#### TCP ( net )
> 官网 ( http://nodejs.cn/api/net.html )
> net 模块提供了创建基于流的 TCP 或 IPC 服务器( net.creatServer() )和客户端( new.creatConnection() )的异步网络API
```js
// 使用
const net = require('net');

// 服务端 net.Server 类
const server = net.creatServer(); // 或 new net.Server()

// 客户端 net.Scoket 类
const clientScoket = net.createConnection(); // 或 new net.Scoket()
```

- **通讯**
```js
// 服务端
server.on('connection', socket => { // 当有客户端连接时触发
    // socket 当前连接的 socket 对象
    // console.log(socket.remoteAddress); // 客户端的地址
    // console.log(socket.remotePort); // 客户端的端口

    socket.write('hello'); // 发送

    socket.on('data', data => {
        console.log('客户端过来的数据: ' + data); // 接受 => hhhh
    });
});
```

```js
// 客户端
clientScoket.on('data', data => {
    console.log('服务端过来的数据: ' + data); // 接受 => hello

    clientScoket.write('hhhh'); // 发送
});
```

- **数据包丢失问题**
> 在数据传输过程中不仅仅只有主体数据(你要发送的主要内容)，还包括了一些其他的数据信息，比如发送端的P、端口等，以方便接受者对数据进行处理与回复<br>
如果发送的数据比较大的话，还会对发送的数据进分包，每一个包中包含有一部分主体数据以及上面提到的额外信息，接收方在接收到数据以后会数据包进行整合等一系列操作<br>
这种传输规则就是数据传输协议中的规定，不同的协议对传输规则有不同的规定

- 问题描述: 服务端传输数据过大的话, 会打包数据, on('data')就会触发多次
- 解决方法: 在on('data')里拼接数据, 在on('end')里完成拼接并执行下一步操作


### HTTP
> 超文本传输协议, 传输 ht (超文本) 这样的文本的规则
- 规定了请求发送的数据格式
    - 请求行, 请求头, 请求正文
- 规定了返回的数据的格式
- 传输的规则

#### request格式
分为三部分

- Request Line: 请求行
    - method: 请求方式, 如'get', 'post', 'put'... 不同的请求方式所得到的结果也会不一样
    - path-to-resource: 请求资源,也就是url(统一资源定位符), url的作用是用来定位我们想获取的资源在网络中的位置, 它也有一套规则
    - http/version-number: 表示当前所使用的http协议的版本, 主流为1.1, 最新为2.0
- Request header: 请求头
    - Host: 所请求的主机名,如www.baidu.com
    - Accept: 浏览器可以接收的内容类型, 如 text/html, img/gif
    - Accept-Language: 浏览器可以接受的语言类型, 如 zh-CN,zh;q=0.9, 首选zh-CN,q优先性为0.9
    - Accept-encoding: 浏览器可以接受的内容压缩方式, 如gzip
    - User-Agent: 请求的代理信息(谁发出的这个请求), 如firfox
    - Connection: 连接类型, 如 keep-alive(保持激活,http/1.1新增功能), close(立即关闭)
    - Keep-Alive: tcp连接保持的时间(s)
    - Cookie
- Request body: 请求正文
    - 就是前端需要传给后端的参数
