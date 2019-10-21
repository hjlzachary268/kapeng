    var isReg=true;
    //查询手机号码是否存在
    function isExistphone(){
      //创建异步函数
      var xhr=new XMLHttpRequest();
      //绑定监听，获取响应
      xhr.onreadystatechange=function(){
        if(xhr.readyState===4 && xhr.status===200){
          var result=xhr.responseText;
          if(result==='1'){
            phoneTips.innerHTML='号码已存在';
            phoneTips.style.background='rgba(255, 80, 80,0.5)';
            isReg=false;
          }else{
            phoneTips.innerHTML='验证通过';
            phoneTips.style.background='rgba(80, 255, 80,0.5)';
          }
        }
      }
      //创建请求
      xhr.open('get',`/user/selPhone/${phone.value}`,true);
      //发送请求
      xhr.send();

    }
    //查询用户名是否存在
    function isExistUname(){
      //创建异步函数
      var xhr=new XMLHttpRequest();
      //绑定监听，获取响应
      xhr.onreadystatechange=function(){
        if(xhr.readyState===4 && xhr.status===200){
          var result=xhr.responseText;
          if(result==='1'){
            unameTips.innerHTML="账号已存在";
            unameTips.style.background='rgba(255, 80, 80,0.5)';
            isReg=false;
          }else{
            unameTips.innerHTML="验证通过";
            unameTips.style.background='rgba(80, 255, 80,0.5)';
          }
        }
      }
      //创建请求
      xhr.open('get',`/user/selUname/${uname.value}`,true);
      //发送请求
      xhr.send();
    }

    //用户名输入验证
    function unameMsg(){
      unameTips.innerHTML="用户名6-12字";
      unameTips.style.background='rgba(100, 150, 255,0.7)';
    }
    function checkUname(){
      if(!uname.value.trim() || uname.value.trim()==""){
        unameTips.innerHTML="账号不能为空";
        unameTips.style.background='rgba(255, 80, 80,0.5)';
        isReg=false;
      }else if(uname.value.length<6 || uname.value.length>12){
        unameTips.innerHTML="账号长度不符";
        unameTips.style.background='rgba(255, 80, 80,0.5)';
        isReg=false;
      }else{
        isExistUname();
      }
    }

    //密码输入验证
    function upwdMsg(){
      upwdTips.innerHTML="密码长度6-12位";
      upwdTips.style.background='rgba(100, 150, 255,0.7)';
    }
    function checkUpwd(){
      if(!upwd.value.trim() || upwd.value.trim()==""){
        upwdTips.innerHTML="密码不能为空";
        upwdTips.style.background='rgba(255, 80, 80,0.5)';
        isReg=false;
      }else if(upwd.value.length<6 || upwd.value.length>12){
        upwdTips.innerHTML="密码长度不符";
        upwdTips.style.background='rgba(255, 80, 80,0.5)';
        isReg=false;
      }else{
        upwdTips.innerHTML="验证通过";
        upwdTips.style.background='rgba(80, 255, 80,0.5)';
      }
    }

    //重复密码验证
    function cpwdMsg(){
      cpwdTips.innerHTML="密码长度6-12位";
      cpwdTips.style.background='rgba(100, 150, 255,0.7)';
    }
    function checkCpwd(){
      if(!cpwd.value.trim() || cpwd.value.trim()==""){
        cpwdTips.innerHTML="密码不能为空";
        cpwdTips.style.background='rgba(255, 80, 80,0.5)';
        isReg=false;
      }else if(cpwd.value===upwd.value){
        cpwdTips.innerHTML="验证通过";
        cpwdTips.style.background='rgba(80, 255, 80,0.5)';
      }else{
        cpwdTips.innerHTML="密码不一致";
        cpwdTips.style.background='rgba(255, 80, 80,0.5)';
        isReg=false;
      }
    }

    //邮箱验证
    function emailMsg(){
      emailTips.innerHTML="邮箱格式XXX@XX.XX";
      emailTips.style.background='rgba(100, 150, 255,0.7)';
      
    }
    function checkEmail(){
      if(!email.value.trim() || email.value.trim()==""){
        emailTips.innerHTML="邮箱不能为空";
        emailTips.style.background='rgba(255, 80, 80,0.5)';
        isReg=false;
        //输入的内容里有且只有一个@
      }else if(email.value.indexOf('@')!==-1 && email.value.match(/@/g).length===1){
        //获取@后面的字符串
        var strLast=email.value.substr(email.value.indexOf('@'));
        //@后面的字符串里有且只有一个. ，并且.不能@和.之间要有其他字符
        if(strLast.indexOf('.')>1 && strLast.split('.').length===2 && !strLast.split('.')[1]==''){
          emailTips.innerHTML="验证通过";
          emailTips.style.background='rgba(80, 255, 80,0.5)';
        }else{
          emailTips.innerHTML="邮箱格式错误";
          emailTips.style.background='rgba(255, 80, 80,0.5)';
          isReg=false;
        }
      }else{
        emailTips.innerHTML="邮箱格式错误";
        emailTips.style.background='rgba(255, 80, 80,0.5)';
        isReg=false;
      }
    }

    //电话验证
    function phoneMsg(){
      phoneTips.innerHTML="号码长度11位";
      phoneTips.style.background='rgba(100, 150, 255,0.7)';
    }
    function checkPhone(){
      if(!phone.value.trim() || phone.value.trim()==""){
        phoneTips.innerHTML="手机号码不能为空";
        phoneTips.style.background='rgba(255, 80, 80,0.5)';
        isReg=false;
      }else if(phone.value.length===11 && !isNaN(phone.value) && phone.value.charAt(0)!=='0'){
        isExistphone();
      }else{
        phoneTips.innerHTML="号码格式不符";
        phoneTips.style.background='rgba(255, 80, 80,0.5)';
        isReg=false;
      }
    }
    //真实姓名验证
    function user_nameMsg(){
      user_nameTips.innerHTML="姓名长度2-16字";
      user_nameTips.style.background='rgba(100, 150, 255,0.7)';
    }
    function checkUser_name(){
      if(!user_name.value.trim() || user_name.value.trim()==""){
        user_nameTips.innerHTML="姓名不能为空";
        user_nameTips.style.background='rgba(255, 80, 80,0.5)';
        isReg=false;
      }else if(user_name.value.length<2 || user_name.value.length>16){
        user_nameTips.innerHTML="姓名长度不符";
        user_nameTips.style.background='rgba(255, 80, 80,0.5)';
        isReg=false;
      }else{
        user_nameTips.innerHTML="验证通过";
        user_nameTips.style.background='rgba(80, 255, 80,0.5)';
      }
    }
    //提交数据，接收响应
    function userReg(){
      //获取数据
      var $uname=uname.value.trim();
      var $upwd=upwd.value.trim();
      var $cpwd=cpwd.value.trim();
      var $email=email.value.trim();
      var $phone=phone.value.trim();
      var $user_name=user_name.value.trim();
      //性别默认选中男，当勾选女时改变$gender值
      var $gender=1;
      if(woman.checked){
        $gender=0;
      }
      var $birthday=birthday.value
      //输入内容验证验证
      checkUname();
      checkUpwd();
      checkCpwd();
      checkEmail();
      checkPhone();
      checkUser_name();
      if(!$birthday || $birthday==""){
        birthdayTips.innerHTML="生日不能为空";
        birthdayTips.style.background='rgba(255, 80, 80,0.5)';
        isReg=false;
      }else{
        birthdayTips.innerHTML="验证通过";
        birthdayTips.style.background='rgba(80, 255, 80,0.5)';
      }
      //日期转换格式为数值
      $birthday=new Date($birthday.replace(/-/g,'/')).getTime();
      //创建异步对象
      var xhr=new XMLHttpRequest();
      //绑定监听，获取响应
      xhr.onreadystatechange=function(){
        if(xhr.readyState===4 && xhr.status===200){
          var result=xhr.responseText;
          if(result==='1'){
            alert('注册成功');
          }else{
            alert('注册失败');
          }
        }
      }
      //创建请求
      xhr.open('post','/user/reg',true);
      //修改请求头信息，更改请求主体数据类型
      xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
      //发送请求
      var formdata=`uname=${$uname}&upwd=${$upwd}&email=${$email}&phone=${$phone}&user_name=${$user_name}&gender=${$gender}&birthday=${$birthday}`
      console.log(isReg);
      if(isReg===true){
        xhr.send(formdata);
      }else{
        isReg=true;
      }
      console.log(isReg);
    }