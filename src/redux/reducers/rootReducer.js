import { combineReducers } from "redux";
import quizReducer from "./quizReducer";
import createTestReducer from "./createTestReducer";
import authReducer from "./authReducer";

export default combineReducers({
  quiz: quizReducer,
  create: createTestReducer,
  auth: authReducer,
});
