import { createStore } from "redux";
import authRedicer from "../features/auth/authSlice";

const store = createStore(authRedicer);

export default store;
