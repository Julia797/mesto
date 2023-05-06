export default class UserInfo {
  constructor(userConfig) {
    this._userName = document.querySelector(userConfig.userNameSelector);
    this._userJob = document.querySelector(userConfig.userJobSelector);
  };

getUserInfo() {
  return {username: this._userName.textContent, userjob: this._userJob.textContent}
};

setUserInfo(data) {
  this._userName.textContent = data.username;
  this._userJob.textContent = data.userjob;
  };
};
