//引入express模块
const express=require('express');
//引入路由器user.js
const userRouter=require('./router/user.js');
//引入中间件body-parser
const bodyParser=require('body-parser');
//创建服务器app
var app=express();
//监听接口8080
app.listen(8080);
//静态托管到文件夹html
app.use(express.static('public'));
//使用body-parser中间件
app.use(bodyParser.urlencoded({
  extended:false
}))
//挂载路由user
app.use('/user',userRouter);
