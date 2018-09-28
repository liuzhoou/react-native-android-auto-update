var AndroidAutoUpdate = require('react-native').NativeModules.AndroidAutoUpdate;
var DeviceEventEmitter = require('react-native').DeviceEventEmitter;

module.exports = {
  getAppVersionCode(cb) {
    AndroidAutoUpdate.getAppVersionCode((versionCode) =>{
      cb(versionCode);
    });
  },
  getAppVersionName(cb) {
    AndroidAutoUpdate.getAppVersionName((versionName) =>{
      cb(versionName);
    });
  },
  goToDownloadApk(url) {
    AndroidAutoUpdate.goToDownloadApk(url);
  },
}