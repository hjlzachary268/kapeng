//引入express模块
const express=require('express');
//引入连接池模块
const pool=require('../pool.js');
//创建路由器
var router=express.Router();
//菜单获取接口menu
router.get('/menu/:cid',(reg,res)=>{
  //获取对象
  var $cid=reg.params.cid;
  //执行SQL语句
  var sql="SELECT fname,price FROM food WHERE cid=?";
  pool.query(sql,[$cid],(err,result)=>{
    if(err) throw err;
    // console.log(result);
    result.length>0 && res.send(result) || res.send({msg:"找不到对应的菜色哦!"});
  })
})
module.exports=router;