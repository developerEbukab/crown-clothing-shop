import { combineReducers } from "redux";
import userReduder from "./user/user.reducer";

export default combineReducers({
  user: userReduder,
});