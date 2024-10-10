import { combineReducers } from "redux";
import FiltersReducer from "../components/Filters/FiltersSlice";
import todoListReducer from "../components/TodoList/TodoSlice";

const rootReducer = combineReducers({
  filters: FiltersReducer,
  todoList: todoListReducer,
});

export default rootReducer;
