// AccaPayBankType_Banks
function popUp() {
  showModalDialog('https://test.dovepay.com/dovePay/xieyi.jsp','德付通快捷支付服务协议-法审','dialogWidth:600px;dialogHeight:300px;center: yes;help:yes;resizable:yes;status:yes;unadornen:yes') ;
}

function setLineBank(){
  var payUserBank_m1= document.getElementById("payUserBank_m1");
  if(payUserBank_m1){
    document.getElementById("payUserBank_m1").value="confirmPayType";
  }
  if(checkBankId()){
    document.payUserBank.submit();
  }
}


//删除卡弹出交易密码框
function openwindow(cardId,buyorderId,iWidth,iHeight){  
  // url 转向网页的地址  
  // name 网页名称，可为空  
  // iWidth 弹出窗口的宽度  
  // iHeight 弹出窗口的高度  
  //window.screen.height获得屏幕的高，window.screen.width获得屏幕的宽  
  var iTop = (window.screen.height-30-iHeight)/2; //获得窗口的垂直位置;  
  var iLeft = (window.screen.width-10-iWidth)/2; //获得窗口的水平位置;  
  window.open("https://test.dovepay.com/dovePay/verifyTransactionPassword.jsp?cardId="+cardId+"&buyorderId="+buyorderId,"",'height='+iHeight+',innerHeight='+iHeight+',width='+iWidth+',innerWidth='+iWidth+',top='+iTop+',left='+iLeft+',toolbar=no,menubar=no,scrollbars=auto,resizeable=no,location=no,status=no');  
} 

// 解约银行卡
function unbind(cardId,buyorderId){
  $.ajax({
    type : 'POST',
    url : $('#payAction').val(),
    data : {
      m : 'deleteCard',
      cardId : cardId,
      buyorderId : buyorderId,
      checkstandWay : 'unionpayNocard'
    },
    dataType : 'text',
    cache : false,
    async : false,// 设成同步
    success : function(data, textStatus, jqXHR) {
      // 3. 刷新当前界面
      // history.go(0);
      $('#spanunionpay_' + cardId).remove();
      // 4. 隐藏显示的div
      $('#quickConfirmDivunionpay').hide();
      return true;
    },
    error : function(data, textStatus, jqXHR) {
      data = eval("(" + data + ")");
      alert(data.msg);
      return false;
    }
  });
}

function validDateTr() {
  var val = jQuery("#fastCardDateTr").val();
  if(val == "")
    val = null;
  
  if ($("#fastCardDatep").is(":visible")==true && val == null) {
    jQuery("#fastCardDateErr").html("有效期不能为空");
    return false;
  }
  jQuery("#fastCardDateErr").html("");
  return true;
}
  $(function() {
    var fcd = document.getElementById("fastCardDateTr");
    //IE 按Backspace 页面回退bug 
    fcd.onkeydown = function(event) {
      e = event ? event : (window.event ? window.event : null);
      if (e.keyCode == 8) {
        return false;
      }
    };
    $("#fastCardDateTr").datePicker({
      followOffset : [ 0, 24 ],
      altFormat : 'yy-mm',
      minDate : new Date(),
      showMode : 1,
      onselect : function(date, formatDate) {
        fcd.readOnly = false;
        fcd.value = formatDate;
        fcd.readOnly = true;
      }
    });

    $('#fastCardDateTr').blur(validDateTr);

  });