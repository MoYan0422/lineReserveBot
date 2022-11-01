function doPost(request) {
  const msg = JSON.parse(request.postData.contents);
   console.log(JSON.stringify(msg));

  const user_id = msg.events[0].source.userId;
  const replyToken = msg.events[0].replyToken; // 回覆的 token
  const userMessage = msg.events[0].message.text; // 抓取使用者傳的訊息內容
  // // 參考文件https://jcshawn.com/linebot-user-profile/


  var reply_message 
  let date = new Date;
  if(operatingHours[date.getHours()]){
    switch(userMessage){
      case '我要預約':reply_message = reserve(getWaitNumber()); break;
      case '確認預約':
        reply_message = reserveRequest(user_id)
        break;
      case '目前號碼':
        let currentNumber = getCurrentNumber()
        let waitnumber = getWaitNumber(user_id);
        reply_message =showCurrentNumber(currentNumber,waitnumber);  
        break;
      case '取消預約':
        reply_message =showCancelReserve(cancelReserve(user_id)) ;
        break;
      default:reply_message =storeMenu();
    }
  }else{
    reply_message =[{
          "type": "text",
          "text": `抱歉!目前沒有營業喔。`
        }];
  }
  
  
  var url = 'https://api.line.me/v2/bot/message/reply';
  UrlFetchApp.fetch(url, {
    'headers': {
      'Content-Type': 'application/json; charset=UTF-8',
      'Authorization': 'Bearer ' + CHANNEL_ACCESS_TOKEN,
    },
    'method': 'post',
    'payload': JSON.stringify({
      'replyToken': replyToken,
      'messages': reply_message,
    }),
  });
  

}
function reserveRequest(userLineId){
  let userNumber = addReserve(userLineId);
  if(userNumber != null){
    return showUserNumber(userNumber)
  }
  return  [{
    "type": "text",
    "text": `抱歉!您已經預約過了喔。`
  }];
  
}
