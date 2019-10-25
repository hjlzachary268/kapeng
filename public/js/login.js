//账号登录
function userLog(){
  //获取数据
  var $uname=uname.value.trim();
  var $upwd=upwd.value.trim();
  //验证非空
  if(!$uname || $uname==''){
    alert('用户名不能为空');
    return;
  }
  if(!$upwd || $upwd==''){
    alert('用户密码不能为空');
    return;
  }
  //创建异步对象
  var xhr=new XMLHttpRequest();
  //绑定监听，获取响应
  xhr.onreadystatechange=function(){
    if(xhr.readyState===4 && xhr.status===200){
      var result=xhr.responseText;
      if(result==='1'){
        alert('登录成功');
      }else{
        alert('登录失败:用户名或密码错误');
      }
    }
  }
  //创建请求
  xhr.open('get',`/user/login/${$uname}&${$upwd}`,true);
  //发送请求
  xhr.send();
}