  function tabView(originClassName,addClassName){
    $(originClassName).click(function() {
      $(originClassName).removeClass(addClassName);
      $(this).addClass(addClassName);
    });
  }

  var dfp = model.dfp.getDfpValues(); 
  dfp();

  window.onload = function(){
    var str = document.getElementsByName("checkstandWay");
    var objarray = str.length;
    for (var i = 0; i < objarray; i++) {
      if (str[i].checked == true) {
        changeStyle();
      }
    }
    var payType = $("#payType").val();
    if (payType == 4) {
      document.getElementById("wzhPay").style.display = "";
    }
  }
  
  function checkForm() {
    var pwd = document.payForm.password.value;
    var userId = document.payForm.userId.value;
    if (pwd == "" || userId == "") {
      document.getElementById("errLi1").style.display = "";
      document.getElementById("errLi2").style.display = "";
      document.getElementById("errMsg").innerHTML = "对不起，用户名和密码不能为空！";
      return;
    } else {
      document.getElementById("errLi1").style.display = "none";
      document.getElementById("errLi2").style.display = "none";
      document.getElementById("errMsg").innerHTML = "";
    }
  }
  /* 虚拟银联卡表单验证 */
  function checkFormVCBankId() {
    var pwd = document.payFormVC.passwordVC.value;
    var userId = document.payFormVC.bankId.value;
    if (pwd == "" || userId == "") {
      document.getElementById("errLi1").style.display = "";
      document.getElementById("errLi2").style.display = "";
      document.getElementById("errMsg").innerHTML = "对不起，用户名和密码不能为空！";
      return;
    } else {
      document.getElementById("errLiVC1").style.display = "none";
      document.getElementById("errLiVC2").style.display = "none";
      document.getElementById("errMsgVC").innerHTML = "";
    }
  }
  function f1() {
    if(document.getElementById("formButtonId")){
      document.getElementById("formButtonId").disabled=true;
    }
    if(document.getElementById("formButtonVCId")){
      document.getElementById("formButtonVCId").disabled=true;
    }
  }
  function checkScan() {
    if(jQuery("input[name=bankId]:checked").length==0){
      alert("请您选择扫码方式！");
      return false;
    }
    return true;
  }
  function changeStyle(){
    var chkObjs = document.getElementsByName("checkstandWay");
    $("ol.SelectBank").css({"display":"none"});
    for(var i=0;i<chkObjs.length;i++){
      if(chkObjs[i].checked){
        var title_id = chkObjs[i].value;
        var params = title_id.split("_");
        $("#payInput_" + params[1]).css({"display":""});
        break; 
      } 
    }
  }

// AccaPayAccountType
$(function(){
  createpassword1();
});

function FormSubmit(){  
// 风控指纹采集
    var deviceFinger = model.dfp.getDeviceFinger();
    document.getElementById("deviceFinger").value = deviceFinger;
    var deviceToken = model.dfp.getDeviceToken();
    document.getElementById("deviceToken").value = deviceToken;
    
  var userId = document.getElementById("userId").value;
  if(userId==""){
    alert("用户名不能为空");
    return false;
  }
  document.getElementById("formButtonId").disabled=true;
  window.setTimeout("f1();", 3000 );

  if(pgeditoraccount.pwdValid()==1){
    alert("密码不符合要求");
     _$("_ocx_passwordaccount").focus();
     return false;
  }   
  if(pgeditoraccount.pwdLength()==0){
       alert("密码不能为空");
     _$("_ocx_passwordaccount").focus();
     return false;
  }
  
  $.ajax({
    url: "https://test.dovepay.com/dovePay/srand_num.jsp?" + get_time(),
    type : "GET",
    async : false,
    success : function(srand_num) {
      pgeditoraccount.pwdSetSk(srand_num);
    }
  });

  var PwdResult = pgeditoraccount.pwdResultSMGM();
  _$("password").value = PwdResult;//获得密码密文,赋值给表单
  var macResult = pgeditoraccount.machineNetwork();
  _$("macNumber").value = macResult;
  document.payForm.submit();
}

function createpassword1(){
  var random , datab;
    //请求通讯加密两个参数(随机数pgeRZRandNum和数据B pgeRZDataB)
    Ajax.request({
        url : "https://test.dovepay.com/dovePay/skey_enstr.jsp?" + get_time(),
        type :"GET",
        async : false,
        success : function(xhr){
            var skey_enstr = pgeCtrl.trim(xhr.responseText);
            var o = skey_enstr.split(",");
            random = o[0];
            datab = o[1];
        }
    });
    //new 控件对象
    window.pgeditoraccount = new pge({
        pgePath : "https://test.dovepay.com/dovePay/ocx/",
        pgeId : "_ocx_passwordaccount",//控件id
        pgeEditType : 0,//控件显示类型,0(星号),1(明文)
        pgeEreg1 : "[\\s\\S]*",//输入过程中字符类型限制，如"[0-9]*"表示只能输入数字
        pgeEreg2 : "[\\s\\S]{6,20}",//输入完毕后字符类型判断条件，与pgeditor.pwdValid()方法对应
        pgeMaxLength : 20,//允许最大输入长度
        pgeTabIndex : 1,//tab键顺序
        pgeClass : "ocx_style",//控件css样式
        pgeInstallClass : "ocx_style",//针对安装或升级的css样式
        pgeOnKeyDown :"FormSubmit()",//回车键响应函数，需焦点在控件中才能响应
        tabCallBack : "input2",//火狐tab键回调函数,设置要跳转到的对象ID
        AffineX:getPasswordAffineX(),
        AffineY:getPasswordAffineY(),
        pgeWindowID : "password" + new Date().getTime() + 1,
        pgeRZRandNum : random,
        pgeRZDataB : datab
        
    });

    //定义公共对象
    window.pgeCtrl = pgeditoraccount;
    //绘制控件标签
    pgeCtrl.pwdhtml("_ocx_password_account_str",pgeditoraccount.load());
    //初始化
    pgeInit();
}
  
/**
  * 银联无卡快捷支付页确认支付按钮
  * @returns {Boolean}
  */
 function quickConfirmPayunionpay(){
  var ObjValue= document.getElementById("accountChoose");
  if(ObjValue!=null && ObjValue.checked){
    $('#isTogether').val("1");
  }
  $('#payUserBank_m').val('quickPayment');
  $('#payUserBank_m1').val('quickPayment');

  if(pgeditorunionpay.pwdValid()==1){
    alert("密码不符合要求");
     _$("_ocx_passwordunionpay").focus();
     return false;
  }   
  if(pgeditorunionpay.pwdLength()==0){
       alert("密码不能为空");
     _$("_ocx_passwordunionpay").focus();
     return false;
  }
  
  $.ajax({
    url: "https://test.dovepay.com/dovePay/srand_num.jsp?"+get_time(),
    type: "GET",
    async: false,
    success: function(srand_num){
      pgeditoSMnionpay.pwdSetSk(srand_num);
    }
   });

  var PwdResult=pgeditorunionpay.pwdResultSMGM();
  _$("password").value=PwdResult;//获得密码密文,赋值给表单
  var macResult = pgeditor.machineNetwork();
  _$("macNumber").value = macResult;
  //提交form
  document.payUserBank.submit();
}