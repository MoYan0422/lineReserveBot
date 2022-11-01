//進行預約動作
function addReserve(userLineId){
  if(getUserNumber(userLineId)==null&&userLineId!=null){
    let usernumber = createReserve(userLineId);
    return usernumber;
  }
}
// 新增預約資料
function createReserve(userLineId) {
  // userLineId = 'test4';
  if (userLineId != null && getUserNumber(userLineId)==null) {
    let timeNow = Utilities.formatDate(new Date(), "Asia/Taipei", "HH:mm");
    let row = reserveList.getLastRow();
    let reserveValue = [userLineId, timeNow, '0',row]

    for (let i = 0; i < reserveValue.length; i++) {
      reserveList.getRange(row + 1, i + 1).setValue(reserveValue[i]);
    }
    // console.log("預約成功");
    return row;
  }
}
//取消預約
function cancelReserve(userLineId){
  // userLineId = 'test';
  let userNumber = getUserNumber(userLineId);
  if(userNumber){
    reserveList.getRange(userNumber+1,4).setValue('null');
    return true
  } 
  return false
}
//拿取使用者預約號碼
function getUserNumber(userLineId){
  let row = reserveList.getLastRow();
  let idData =  reserveList.getRange(1,1,row,1).getValues().flat();
  let userNumber = null;
  for(let i = 1 ;i<=row;i++){
    if(userLineId == idData[i]){
      userNumber = reserveList.getRange(i+1,4).getValue();
      // 判斷是否為數字
      if(!(/^-?\d+$/.test(userNumber))){
        userNumber = null;
      }
    }
  }
  // console.log('使用者預約號碼:'+userNumber);
  return userNumber;
}
//查看目前號碼選單
function getCurrentNumber(){
  return reserveList.getRange(1,title.length).getValue();
}
//查看等待人數
function getWaitNumber(userLineId){
  let number =  getCurrentNumber();
  let row = getUserNumber(userLineId);
  if(row==null){
    row = reserveList.getLastRow();
  }
  let sum = row-number;
  if(sum>0){
  //取得範圍之後陣列扁平化去掉null的長度減去自己
    let waitNumber = reserveList.getRange(number+1,4,row-1).getValues().flat().filter(Number).length-1 ;
    return waitNumber;
  }else if(sum == 0){
     return 0;
  }
  return -1;
}
function test(){
  
  let a= getWaitNumber("U1b77bceecb863ac5c42ab43cd47160db")
  console.log(a)
  console.log(reserveList.getLastRow())
}