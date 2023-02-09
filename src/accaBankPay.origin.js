var dfp = model.dfp.getDfpValues(); 
dfp();

window.onload = function() {
  var str = document.getElementsByName("checkstandWay");
  var objarray = str.length;
  for (var i = 0; i < objarray; i++) {
    if (str[i].checked == true) {
      changeStyle();
    }
  }
};
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

  function my_submit() {
    document.payForm.submit1.disabled = true;
    window.setTimeout("f1();", 3000);
    document.payForm.submit();
  }
  function f1(){
    document.payForm.submit1.disabled=false;
  }
  
  
  function checkboxChange(paytype){
    document.getElementById("chooseType").value = "";
    if(paytype == 0) {
      document.getElementById("chooseType").value = "BTBCREDITPAY";
      document.getElementById("accountChooseType").innerHTML = "B2B信用支付";
    }
    if(paytype == 1) document.getElementById("accountChooseType").innerHTML = "账户支付";
    if(paytype == 2) document.getElementById("accountChooseType").innerHTML = "安途账户支付";
    var paytypearr = document.getElementsByName("accountChoose");
      var bool = false ;       
      for(var i=0;i<paytypearr.length;i++){
        if(paytype == paytypearr[i].value) {
          if(paytypearr[i].checked) {
            bool = true;
          }
        }else {
          paytypearr[i].checked=false;  
        }
      }
      if(bool && paytype == 1){
        document.getElementById("wzhPay").style.display="none";
        document.getElementById("AccountEnough").style.display="";
        document.getElementById("accountPay").style.display="";
        document.getElementById("autuPayArea").style.display="none";
      }else if(bool &&  paytype == 2){
        document.getElementById("wzhPay").style.display="none";
        document.getElementById("AccountEnough").style.display="none";
        document.getElementById("accountPay").style.display="none";
        document.getElementById("autuPayArea").style.display="";
      }else{
        document.getElementById("wzhPay").style.display="";
        document.getElementById("AccountEnough").style.display="none";
        document.getElementById("accountPay").style.display="none";
        document.getElementById("autuPayArea").style.display="none";
      }
      
    /* var ObjValue= document.getElementById("accountChoose"); 
        if(ObjValue.checked) {
      if(flage==1) {
          document.getElementById("AccountEnough").style.display="";
          document.getElementById("payWayHidden").style.display="none";
          document.getElementById("bankListHidden").style.display="none";
          document.getElementById("accountPay").style.display="";
        }else{
          //document.getElementById("AccountNotEnough").style.display="";
          document.getElementById("payWayHidden").style.display="";
          document.getElementById("bankListHidden").style.display="";
          document.getElementById("accountPay").style.display="none";
      }
      } else {
        document.getElementById("AccountEnough").style.display="none";
          //document.getElementById("AccountNotEnough").style.display="none";
      document.getElementById("payWayHidden").style.display="";
      document.getElementById("bankListHidden").style.display="";
      document.getElementById("accountPay").style.display="none";
    }
  
    if(ObjValue.checked){ 
      //alert("已选择");
      ObjValue.value = 1; 
      ObjValue.checked="checked";
      //alert(document.getElementById("accountChoose").value );
    } else {
      //document.getElementById("AccountNotEnough").style.display="none";
      document.getElementById("AccountEnough").style.display="none";
      //alert("未选择");
      ObjValue.value = 0; 
      ObjValue.checked="";
      //alert(document.getElementById("accountChoose").value );
    } */
    
  }

  function setAccountPay(){
    //风控指纹采集
      var deviceFinger = model.dfp.getDeviceFinger();
    document.getElementById("deviceFinger").value = deviceFinger;
    var deviceToken = model.dfp.getDeviceToken();
    document.getElementById("deviceToken").value = deviceToken;
    
    var paytypearr = document.getElementsByName("accountChoose");
      var bool = false ;       
      for(var i=0;i<paytypearr.length;i++){
        if(paytypearr[i].checked) {
          bool = true;
          break;
        }
      }
    //var ObjValue= document.getElementById("accountChoose"); 
    //var orderAmt=$("#orderAmt").val();
    try {
      if(bool){ 
        document.getElementById("payUserBank_m1").value="doAccountPay";
      } else {
        document.getElementById("amt").value=orderAmt;
        document.getElementById("payUserBank_m1").value="confirmPayType";
      }
    } catch (e) {
    }
    //  if(checkBankId())
    document.payUserBank.submit();
  }
  
  function setAutuPay(){
    //风控指纹采集
    try{
        var deviceFinger = model.dfp.getDeviceFinger();
      document.getElementById("deviceFinger").value = deviceFinger;
      var deviceToken = model.dfp.getDeviceToken();
      document.getElementById("deviceToken").value = deviceToken;
      document.getElementById("payUserBank_m1").value="antuPay";
    }catch (e) {
    }
    document.payUserBank.submit();
  }
  