const CHANNEL_ACCESS_TOKEN = '你的TOKEN';
const sheet_url = 'https://docs.google.com/spreadsheets/d/****/edit'; //  Google 試算表連結
const SpreadSheet = SpreadsheetApp.openByUrl(sheet_url);
//拿取設定表單
let settingSheet = SpreadSheet.getSheetByName("setting");
//啟用快取
let cache = CacheService.getScriptCache();

let operatingHours =cache.get("operatingHours");
if(operatingHours==null){
  //取得營業時間
  const workingTimeString =settingSheet.getRange(3,2).getValue().toString();
  //設定營業時間
  const workingTime = workingTimeString.split(',');
  //將營業時間寫入，有營業時間的為1
  operatingHours = []
  for(let i=parseInt(workingTime[0]) ; i<parseInt(workingTime[1]);i++ ){
    operatingHours[i]=1;
  }
  //快取1小時失效失效
  cache.put("operatingHours",JSON.stringify(operatingHours) ,3600)
}
let date = new Date;


//設定標題

const title =['預約LineId','預約請求時間','是否完成' ,'號碼','1'];
//取得今日日期
var formattedDate = Utilities.formatDate(new Date(), "Asia/Taipei", "yyyy-MM-dd");

//取得名稱為今日日期的分頁
let reserveList = SpreadSheet.getSheetByName(formattedDate);
//如果沒有將創建新的 
if(!reserveList){
  reserveList = SpreadSheet.insertSheet(formattedDate);
  //寫入標題
  for(let i=0 ; i<title.length;i++){
    reserveList.getRange(1,(i+1)).setValue(title[i]);
  }
}

function init(){}
