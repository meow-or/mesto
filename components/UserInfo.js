export default class UserInfo {
  constructor(userNameSelector, userInfoSelector) {
    this._userName = document.querySelector(userNameSelector);
    this._userInfo = document.querySelector(userInfoSelector);
  }

  getUserInfo() {
    const profileValuesFromMarkup = { 
      name: this._userName.textContent, info: this._userInfo.textContent
    };
    return  profileValuesFromMarkup;
  }

  setUserInfo(profileData) {
    this._userName.textContent = profileData['myname'];
    this._userInfo.textContent = profileData['profession'];

    const enterUserInfo = {
      name: this._userName.textContent,
      info: this._userInfo.textContent
    }
  }


}