export default class UserInfo {
  constructor(userConfig) {
    this._userName = document.querySelector(userConfig.userNameSelector);
    this._userJob = document.querySelector(userConfig.userJobSelector);
    this._userAvatar = document.querySelector(userConfig.userAvatar);
  };

getUserInfo() {
  return {username: this._userName.textContent, userjob: this._userJob.textContent}
};

setUserInfo(dataUserInfo) {
  this._userName.textContent = dataUserInfo.name;
  this._userJob.textContent = dataUserInfo.about;
  this._userAvatar.src = dataUserInfo.avatar;
  };
};
