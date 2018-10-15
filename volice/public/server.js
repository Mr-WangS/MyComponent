var rootDocment = 'http://192.168.1.33/store-manager-web';//你的域名
/**url,data(参数)，methd(GET/POST),wxthis(this) */
function req(url, data,methd, wxThis) {
  var promise = new Promise((resolve, reject) => {
    var that = this;
    var postData = data;
    let postUrl = rootDocment + url;
    if (wxThis == 0) {
    } else {
      wxThis.dialog = wxThis.selectComponent("#dialog");
      wxThis.dialog.hideDialogShow()
    }
        wx.request({
          url: postUrl,
          data: postData,
          method: methd == 1 ? 'GET' : 'POST',
          header: { 'content-type': 'application/json' },
          success: function (res) {
            if(res.statusCode==503){
              wxThis == 0 ? '' : wxThis.dialog.hideDialogHide()
              reject("503");
            }else{
              wxThis == 0 ? '' : wxThis.dialog.hideDialogHide()
              resolve(res.data)
            }
          },
          fail: function (e) {
            wxThis == 0 ? '' : wxThis.dialog.hideDialog()
            reject();
          }
        })
    
  });
  return promise;
}

function timestampToTime(timestamp,typeS) {
  var date = new Date(timestamp);
    //1代表全换完整格式2代表小时
    if(typeS==1){
      var Y = date.getFullYear() + '-';
      var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
      var D = date.getDate() + ' ';
      var h = date.getHours() + ':';
      var m = date.getMinutes();
      var s = date.getSeconds();
      return Y + M + D + h + m;
    }
  if (typeS == 2) {
    var result = ''
    var Da = new Date()
    var Y = date.getFullYear() 
    var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1)
    var D = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
    var h = date.getHours() < 10 ? '0' + date.getHours() : date.getHours();
    var m = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
    var Yn = Da.getFullYear()
    var Mn = (Da.getMonth() + 1 < 10 ? '0' + (Da.getMonth() + 1) : Da.getMonth() + 1)
    var Dn = Da.getDate();
    var hn = Da.getHours();
    var mn = Da.getMinutes();
    if (Y < Yn) {
       result = Yn - Y + "年前"
        return result
    } 
    if (Number(M) < Number(Mn)){
      result = M + '-' + D + "    " + h + ": " + m
      return result;
    }
    if (Number(D) < Number(Dn)) {
      result = M + '-' + D + "    " + h + ":" + m
      return result;
    }
    if (Number(hn)-Number(h)>=12){
      result = "12小时前"
      return result;
    }
    if (Number(hn) - Number(h) > 0 && Number(hn) - Number(h) < 12){
      result = Number(hn) - Number(h) + "小时前"
      return result;
    }else{
      result = Number(mn) - Number(m) + "分钟前"
      return result;
    }  
  }
  if(typeS==3){
    var Y = date.getFullYear() + '-';
    var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
    var D = date.getDate() + ' ';
    var h = date.getHours() + ':';
    var m = date.getMinutes();
    var s = date.getSeconds();
    return Y + M + D;
  }
}
module.exports = {
  req: req,
  activeTime: timestampToTime
}
