import { combineReducers } from "redux";
import news from "./news/news.reducer";

const rootReducer = combineReducers({
  news,
});

export default rootReducer;
