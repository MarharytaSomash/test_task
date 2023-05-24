import { combineReducers } from "redux";
import { productReducer } from "./productReducer";
import { createStore } from "redux";
import { errorReducer } from "./errorReducer";

export const rootReducer = combineReducers({
    product: productReducer,
    error: errorReducer,
});
export const store = createStore(rootReducer);
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
