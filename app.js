//引入express模块
const express=require('express');
//引入跨域cors模块
const cors=require('cors');
//引入路由器user.js
const userRouter=require('./router/user.js');
//引入路由器index.js
const indexRouter=require('./router/index.js')
//引入中间件body-parser
const bodyParser=require('body-parser');
//创建服务器app
var app=express();
//使用跨域中间件
app.use(cors({
  origin:["localhost:5050","127.0.0.1:5050","localhost:5500","127.0.0.1:5500"]
}))
//监听接口5050
app.listen(5050);
//静态托管到文件夹html
app.use(express.static('public'));
//使用body-parser中间件
app.use(bodyParser.urlencoded({
  extended:false
}))
//挂载路由user
app.use('/user',userRouter);
//挂载路由器index
app.use('/index',indexRouter);
