import { configureStore } from "@reduxjs/toolkit";
import photoReducer from "features/Photo/photoSlice";
import authReducer from "./authSlice";
import messageReducer from "./messageSlice";

const rootReducer = {
  photos: photoReducer,
  auth: authReducer,
  message: messageReducer,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
