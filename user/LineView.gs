
//商店選單
function storeMenu() {
  let menu =
    [
      {
        "type": "bubble",
        "size": "micro",
        "hero": {
          "type": "image",
          "url": "https://msmist.com/wp-content/uploads/2021/03/mbti.png",
          "size": "full",
          "aspectMode": "cover",
          "aspectRatio": "320:213"
        },
        "body": {
          "type": "box",
          "layout": "vertical",
          "contents": [
            {
              "type": "text",
              "text": "查看商品",
              "weight": "bold",
              "size": "sm",
              "wrap": true
            },
            {
              "type": "box",
              "layout": "vertical",
              "contents": [
                {
                  "type": "box",
                  "layout": "baseline",
                  "spacing": "sm",
                  "contents": [
                    {
                      "type": "text",
                      "text": "查看目前擁有的服務及價格",
                      "wrap": true,
                      "color": "#8c8c8c",
                      "size": "xs",
                      "flex": 5
                    }
                  ]
                }
              ]
            }
          ],
          "spacing": "sm",
          "paddingAll": "13px"
        },
        "action": {
          "type": "uri",
          "label": "查看菜單",
          "uri": "https://goo.gl/maps/3CwEgFtzwQR1S3FB8"
        }
      },
      {
        "type": "bubble",
        "size": "micro",
        "hero": {
          "type": "image",
          "url": "https://scdn.line-apps.com/n/channel_devcenter/img/flexsnapshot/clip/clip10.jpg",
          "size": "full",
          "aspectMode": "cover",
          "aspectRatio": "320:213"
        },
        "body": {
          "type": "box",
          "layout": "vertical",
          "contents": [
            {
              "type": "text",
              "text": "我要預約",
              "weight": "bold",
              "size": "sm",
              "wrap": true
            },
            {
              "type": "box",
              "layout": "vertical",
              "contents": [
                {
                  "type": "box",
                  "layout": "baseline",
                  "spacing": "sm",
                  "contents": [
                    {
                      "type": "text",
                      "text": "點選我進行今天的預約排隊喔",
                      "wrap": true,
                      "color": "#8c8c8c",
                      "size": "xs",
                      "flex": 5
                    }
                  ]
                }
              ]
            }
          ],
          "spacing": "sm",
          "paddingAll": "13px"
        },
        "action": {
          "type": "message",
          "label": "action",
          "text": "我要預約"
        }
      },
      {
        "type": "bubble",
        "size": "micro",
        "hero": {
          "type": "image",
          "url": "https://scdn.line-apps.com/n/channel_devcenter/img/flexsnapshot/clip/clip10.jpg",
          "size": "full",
          "aspectMode": "cover",
          "aspectRatio": "320:213"
        },
        "body": {
          "type": "box",
          "layout": "vertical",
          "contents": [
            {
              "type": "text",
              "text": "目前排隊人數",
              "weight": "bold",
              "size": "sm",
              "wrap": true
            },
            {
              "type": "box",
              "layout": "vertical",
              "contents": [
                {
                  "type": "box",
                  "layout": "baseline",
                  "spacing": "sm",
                  "contents": [
                    {
                      "type": "text",
                      "text": "查看目前排隊人數，如果到您號碼前兩號就可以現場等待。",
                      "wrap": true,
                      "color": "#8c8c8c",
                      "size": "xs",
                      "flex": 5
                    }
                  ]
                }
              ]
            }
          ],
          "spacing": "sm",
          "paddingAll": "13px"
        },
        "action": {
          "type": "message",
          "label": "action",
          "text": "目前號碼"
        }
      }
    ];
  let reply_message = [

    {
      "type": "flex",
      "altText": "Menu",
      "contents":
      {
        "type": "carousel",
        "contents": menu
      }
    }
  ]
  return reply_message;
}
//預約確認選單
function reserve(number) {
  let reserveMenu = [{
    "type": "bubble",
    "hero": {
      "type": "image",
      "url": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/01_1_cafe.png",
      "size": "full",
      "aspectRatio": "20:13",
      "aspectMode": "cover",
      "action": {
        "type": "uri",
        "uri": "http://linecorp.com/"
      }
    },
    "body": {
      "type": "box",
      "layout": "vertical",
      "contents": [
        {
          "type": "text",
          "text": "預約系統",
          "weight": "bold",
          "size": "xl"
        },
        {
          "type": "box",
          "layout": "vertical",
          "margin": "lg",
          "spacing": "sm",
          "contents": [
            {
              "type": "box",
              "layout": "baseline",
              "spacing": "sm",
              "contents": [
                {
                  "type": "text",
                  "text": "說明",
                  "color": "#aaaaaa",
                  "size": "sm",
                  "flex": 1
                },
                {
                  "type": "text",
                  "text": `目前還有${number}人在排隊，請問是否確認要預約?`,
                  "wrap": true,
                  "color": "#666666",
                  "size": "sm",
                  "flex": 5
                }
              ]
            }
          ]
        }
      ]
    },
    "footer": {
      "type": "box",
      "layout": "vertical",
      "spacing": "sm",
      "contents": [
        {
          "type": "button",
          "style": "link",
          "height": "sm",
          "action": {
            "type": "message",
            "label": "確認預約",
            "text": "確認預約"
          }
        }
      ],
      "flex": 0
    }
  }]

  let reply_message = [
    {
      "type": "flex",
      "altText": "Menu",
      "contents":
      {
        "type": "carousel",
        "contents": reserveMenu
      }
    }
  ]
  return reply_message;
}
//目前號碼
function showCurrentNumber(currentNumber,waitnumber){
  if(waitnumber<0){
    return [{
          "type": "text",
          "text": `不好意思!目前已到${currentNumber}號。`
        }]
  }else if(waitnumber == 0){
    return [{
          "type": "text",
          "text": `到你了!`
        }]
  }
  return [{
          "type": "text",
          "text": `目前已到${currentNumber}號，排隊${waitnumber}人。`
        }]
}
//使用者預約號碼
function showUserNumber(number) {
  var formattedDate = Utilities.formatDate(new Date(), "Asia/Taipei", "yyyy-MM-dd HH:mm");
  let reserveUserNumber = [{
    "type": "bubble",
    "body": {
      "type": "box",
      "layout": "vertical",
      "contents": [
        {
          "type": "text",
          "text": "您的號碼",
          "weight": "bold",
          "color": "#1DB446",
          "size": "sm"
        },
        {
          "type": "separator",
          "margin": "xxl"
        },
        {
          "type": "text",
          "text": `${number}號`,
          "weight": "bold",
          "size": "xxl",
          "margin": "md"
        },
        {
          "type": "separator",
          "margin": "xxl"
        },
        {
          "type": "text",
          "text": `${formattedDate}分時預約`,
          "size": "xs",
          "color": "#aaaaaa",
          "wrap": true
        }
      ]
    },
    "styles": {
      "footer": {
        "separator": true
      }
    }
  }]
  let reply_message = [
    {
      "type": "flex",
      "altText": "Menu",
      "contents":
      {
        "type": "carousel",
        "contents": reserveUserNumber
      }
    }
  ]
  return reply_message;
}

function showCancelReserve(cancelReserve){
  if(cancelReserve){
    return [{
          "type": "text",
          "text": `取消成功。`
        }]
  }
  return [{
          "type": "text",
          "text": `查無預約。`
        }]
}







