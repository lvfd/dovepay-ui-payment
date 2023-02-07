  $(function(){
    tabView(".search-condition-nav","on");
    
    $(".bb").hover(function(){
      $(".aa").show();
    },function(){
      $(".aa").hide();
    })
  });
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

  function showZH() {
    if(document.getElementById("vcPay")){
      document.getElementById("vcPay").style.display = "none";
    }
    if(document.getElementById("zhPay")){
      document.getElementById("zhPay").style.display = "";
    }
    if(document.getElementById("aliPay")){
      document.getElementById("aliPay").style.display = "none";
    }
    if(document.getElementById("wechatPay")){
      document.getElementById("wechatPay").style.display = "none";
    }
    if(document.getElementById("wzhPay")){
      document.getElementById("wzhPay").style.display = "none";
    }
    if(document.getElementById("masterPay")){
      document.getElementById("masterPay").style.display = "none";
    }
  }
  function showWZH() {
    if(document.getElementById("vcPay")){
      document.getElementById("vcPay").style.display = "none";
    }
    if(document.getElementById("zhPay")){
      document.getElementById("zhPay").style.display = "none";
    }
    if(document.getElementById("aliPay")){
      document.getElementById("aliPay").style.display = "none";
    }
    if(document.getElementById("wechatPay")){
      document.getElementById("wechatPay").style.display = "none";
    }
    if(document.getElementById("wzhPay")){
      document.getElementById("wzhPay").style.display = "";
    }
    if(document.getElementById("masterPay")){
      document.getElementById("masterPay").style.display = "none";
    }
  }
  function showALI() {
    if(document.getElementById("vcPay")){
      document.getElementById("vcPay").style.display = "none";
    }
    if(document.getElementById("zhPay")){
      document.getElementById("zhPay").style.display = "none";
    }
    if(document.getElementById("aliPay")){
      document.getElementById("aliPay").style.display = "";
    }
    if(document.getElementById("wechatPay")){
      document.getElementById("wechatPay").style.display = "none";
    }
    if(document.getElementById("wzhPay")){
      document.getElementById("wzhPay").style.display = "none";
    }
    if(document.getElementById("masterPay")){
      document.getElementById("masterPay").style.display = "none";
    }
  }
  function showWECHAT() {
    if(document.getElementById("vcPay")){
      document.getElementById("vcPay").style.display = "none";
    }
    if(document.getElementById("zhPay")){
      document.getElementById("zhPay").style.display = "none";
    }
    if(document.getElementById("aliPay")){
      document.getElementById("aliPay").style.display = "none";
    }
    if(document.getElementById("wechatPay")){
      document.getElementById("wechatPay").style.display = "";
    }
    if(document.getElementById("wzhPay")){
      document.getElementById("wzhPay").style.display = "none";
    }
    if(document.getElementById("masterPay")){
      document.getElementById("masterPay").style.display = "none";
    }
  }
  function showMaster() {
    if(document.getElementById("vcPay")){
      document.getElementById("vcPay").style.display = "none";
    }
    if(document.getElementById("zhPay")){
      document.getElementById("zhPay").style.display = "none";
    }
    if(document.getElementById("aliPay")){
      document.getElementById("aliPay").style.display = "none";
    }
    if(document.getElementById("wechatPay")){
      document.getElementById("wechatPay").style.display = "none";
    }
    if(document.getElementById("wzhPay")){
      document.getElementById("wzhPay").style.display = "none";
    }
    if(document.getElementById("masterPay")){
      document.getElementById("masterPay").style.display = "";
    }
  }
  
  /* 虚拟银联卡支付 LN 2020/12/06*/
  function showVirtualCard() {
    if(document.getElementById("vcPay")){
      document.getElementById("vcPay").style.display = "";
    }
    if(document.getElementById("zhPay")){
      document.getElementById("zhPay").style.display = "none";
    }
    if(document.getElementById("aliPay")){
      document.getElementById("aliPay").style.display = "none";
    }
    if(document.getElementById("wechatPay")){
      document.getElementById("wechatPay").style.display = "none";
    }
    if(document.getElementById("wzhPay")){
      document.getElementById("wzhPay").style.display = "none";
    }
    if(document.getElementById("masterPay")){
      document.getElementById("masterPay").style.display = "none";
    }
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