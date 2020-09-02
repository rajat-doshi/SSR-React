import { combineReducers } from "redux";
import { reducer as toastrReducer } from "react-redux-toastr";
import Items from "../Reducer/Item"
export default combineReducers({
  toastr: toastrReducer,
  itemsList:Items
});
