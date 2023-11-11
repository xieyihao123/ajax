//引入express模块
const express = require('express');

//实例化服务器
const app = express();

//挂载路由，创建路由规则
app.get('/server', (req, res) => {

    //设置响应头  设置允许跨域
    res.setHeader('Access-Control-Allow-Origin', '*');


    //设置响应体
    res.send('HELLO EXPRESS');
})

//监听端口启动服务器
app.listen(80, () => {
    console.log("服务器已经启动，80端口监听中……");
})