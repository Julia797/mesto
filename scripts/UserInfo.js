export default class UserInfo {
  constructor(userConfig) {
    this._userName = document.querySelector(userConfig.userName);
    this._userJob = document.querySelector(userConfig.userJob);
  };

getUserInfo() {
  return {username: this._userName.textContent, userjob: this._userJob.textContent}
};

setUserInfo() {

  };
};
