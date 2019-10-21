//引入express模块
const express=require('express');
//引用连接池模块
const pool=require('../pool.js');
//创建路由器
var router=express.Router(); 
//创建注册路由接口reg
router.post('/reg',(req,res)=>{
  //获取对象
  var obj=req.body;
  //执行sql语句
  var sql="INSERT INTO user SET ?";
  pool.query(sql,[obj],(err,result)=>{
    if(err) throw err;
    if(result.affectedRows>0){
      res.send('1');
    }else{
      res.send('0');
    }
  })
})
//验证账号是否存在selUname
router.get('/selUname/:uname',(req,res)=>{
  //获取数据
  var $uname=req.params.uname;
  //执行SQL语句
  var sql="SELECT uname FROM user WHERE uname=?";
  pool.query(sql,[$uname],(err,result)=>{
    if(err) throw err;
    if(result.length>0){
      res.send('1');
    }else{
      res.send('0');
    }
  })
})
//验证手机号是否存在selPhone
router.get('/selPhone/:phone',(req,res)=>{
  //获取数据
  var $phone=req.params.phone;
  //执行SQL语句
  var sql="SELECT phone FROM user WHERE phone=?";
  pool.query(sql,[$phone],(err,result)=>{
    if(err) throw err;
    if(result.length>0){
      res.send('1');
    }else{
      res.send('0');
    }
  })
})
//登录路由login
router.get('/login/:uname&:upwd',(req,res)=>{
  //获取数据
  var $uname=req.params.uname;
  var $upwd=req.params.upwd;
  //执行SQL语句
  var sql="SELECT uname,upwd FROM user WHERE uname=? AND upwd=?";
  pool.query(sql,[$uname,$upwd],(err,result)=>{
    if(err) throw err;
    if(result.length>0){
      res.send('1');
    }else{
      res.send('0');
    }
  })
})

//导出路由器
module.exports=router;