import {combineReducers} from "redux";
import {data} from "./data/data";
import {ReducerNameSpace} from "../../constants";

export default combineReducers({
  [ReducerNameSpace.DATA]: data,
});
