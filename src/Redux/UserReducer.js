import Cookies from "js-cookie";
import jwt from "jwt-decode";

var UserCookies = Cookies.get("AuthToken");
let UserState = {
  LoginStatus: false,
  UserData: Cookies.get("AuthToken") === undefined ? null : UserCookies,
};
// console.log(jwt(UserCookies));

const FunctionUser = (state = UserState, action) => {
  switch (action.type) {
    case "CHANGE_LOGIN_STATUS":
      return {
        ...state,
        LoginStatus: action.value,
      };

    case "CHANGE_USER_DATA":
      return {
        ...state,
        UserData: action.value,
      };

    default:
      return state;
  }
};
export default FunctionUser;
