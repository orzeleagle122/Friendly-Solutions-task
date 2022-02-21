import {configureStore} from "@reduxjs/toolkit";
import {workOrderSlices} from "./slices/workOrderSlices";


export const store = configureStore({
    reducer: {
        workOrder:workOrderSlices.reducer,
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;