import { createStore } from "redux";
import authReducer from "../features/auth/authSlice";

const store = createStore(authReducer);

export default store;
