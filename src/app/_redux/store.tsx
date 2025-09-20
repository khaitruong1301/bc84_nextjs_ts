import { configureStore } from "@reduxjs/toolkit";
import numberReducer from "./reducers/numberStateReducer";
export const store = configureStore({
    reducer: {
        numberReducer:numberReducer
    }

});


export type RootState = ReturnType<typeof store.getState>;
export type DispatchType = typeof store.dispatch;